import io from "socket.io-client"

let socket

export const init = () => {
  console.log("sunucuya bağlanılıyorr....")
  socket = io("http://localhost:3001", {
    transports: ["websocket"],
  })

  socket.on("connect", () =>
    console.log("sunucuya bağlantı başarıyla gerçekleşti...")
  )
}
