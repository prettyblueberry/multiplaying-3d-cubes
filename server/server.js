import app from './express.js'
import socket from './socket.js'

const server = app.listen(3000, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', 3000)
})
socket(server)
