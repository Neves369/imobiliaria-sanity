export default {
  name: 'property',
  title: 'Imóvel',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Tipo de Negócio',
      type: 'string',
      options: {
        list: [
          { title: 'Venda', value: 'venda' },
          { title: 'Aluguel', value: 'aluguel' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'propertyType',
      title: 'Tipo de Imóvel',
      type: 'string',
      options: {
        list: [
          { title: 'Casa', value: 'casa' },
          { title: 'Apartamento', value: 'apartamento' },
          { title: 'Terreno', value: 'terreno' },
          { title: 'Comercial', value: 'comercial' },
        ],
      },
    },
    {
      name: 'price',
      title: 'Preço',
      type: 'number',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'condominiumPrice',
      title: 'Valor do Condomínio',
      type: 'number',
      // validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'iptu',
      title: 'Valor do IPTU',
      type: 'number',
      // validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Descrição',
      type: 'text',
    },
    {
      name: 'mainImage',
      title: 'Imagem Principal',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bedrooms',
      title: 'Quartos',
      type: 'number',
    },
    {
      name: 'bathrooms',
      title: 'Banheiros',
      type: 'number',
    },
     {
      name: 'parkingSpaces',
      title: 'Vagas de Garagem',
      type: 'number',
    },
    {
      name: 'area',
      title: 'Área (m²)',
      type: 'number',
    },
    {
      name: 'address',
      title: 'Endereço',
      type: 'string',
    },
  ],
};
