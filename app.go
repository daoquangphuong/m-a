package main

import (
	"log"
	"net/http"
	"os"

	"github.com/googollee/go-socket.io"
)

type justFileNoDir struct {
	Fs http.FileSystem

}

func (fs justFileNoDir) Open(name string) (http.File, error) {
	f, err := fs.Fs.Open(name)

	if err != nil {
		return nil, err
	}
	stat, err := f.Stat()
	if name != "/" && stat.IsDir() {
		return nil, os.ErrNotExist
	}

	return f, nil
}

func main() {
	server, err := socketio.NewServer(nil)
	if err != nil {
		log.Fatal(err)
	}
	server.On("connection", func(so socketio.Socket) {
		log.Println("on connection")
		so.Join("chat")
		so.On("chat message", func(msg string) {
			log.Println("emit:", so.Emit("chat message", msg))
			so.BroadcastTo("chat", "chat message", msg)
		})
		so.On("disconnection", func() {
			log.Println("on disconnect")
		})
	})
	server.On("error", func(so socketio.Socket, err error) {
		log.Println("error:", err)
	})

	http.Handle("/socket.io/", server)
	http.Handle("/", http.FileServer(justFileNoDir{http.Dir("./assets")}))
	log.Println("Serving at localhost:5000...")
	log.Fatal(http.ListenAndServe(":5000", nil))
}