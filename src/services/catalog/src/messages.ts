import * as amqp from 'amqplib';

export const notifications = [];
export async function initMessages() {
  const connRabbitmq = await amqp.connect('amqp://localhost');
  const channel = await connRabbitmq.createChannel();
  await channel.assertQueue('orders', { durable: true });
  channel.consume('orders', (message) => {
    const order = JSON.parse(message.content.toString());
    const notification = {
      id: notifications.length,
      order,
    };
    notifications.push(notification);
  });
}
