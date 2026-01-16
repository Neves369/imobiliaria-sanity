import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import property from './src/sanity/schemas/property';

export default defineConfig({
  name: 'default',
  title: 'Imobiliária CMS',

  projectId: '8c7j6tjp', // O usuário deve substituir pelo seu ID
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: [property],
  },
});
