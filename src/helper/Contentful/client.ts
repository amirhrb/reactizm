import { createClient } from 'contentful';

const client = createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENT_DELIVERY_API as string,
  space: process.env.NEXT_PUBLIC_SPACE_ID as string,
});
export default client;
