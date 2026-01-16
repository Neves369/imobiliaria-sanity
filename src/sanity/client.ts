import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '8c7j6tjp', // Substituir pelo ID real
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-16',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
