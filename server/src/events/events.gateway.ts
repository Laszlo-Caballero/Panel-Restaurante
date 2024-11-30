import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

@WebSocketGateway()
export class EventsGateway {
  @SubscribeMessage('ordenes')
  handleMessage(@MessageBody() data: string) {
    console.log(data);
    return JSON.parse(data);
  }
}
