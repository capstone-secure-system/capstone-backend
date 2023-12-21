import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway(5050,{
  cors : {
    origin : '*',
    methods: '*'
  }
})
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  sendSnapShotToClients(data: any) {
    this.server.emit('data',data);
  }
}
