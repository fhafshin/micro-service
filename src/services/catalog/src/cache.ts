import { createClient } from 'redis';

export default async function createRedisClient(): Promise<any> {
  const client = createClient();

  client.on('error', (error) => {
    console.log('error redis:', error);
  });
  await client.connect();
  return client;
}
