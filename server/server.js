import config from './../config/config'
import app from './express'
import socket from './socket'

const server = app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})
socket(server)
