# Projeto Imobiliário - Vite + React + TypeScript + Sanity

Este é um projeto funcional de um site imobiliário para venda e aluguel de imóveis.

## Tecnologias Utilizadas
- **Vite + React + TypeScript** (Frontend)
- **Sanity CMS** (Gerenciamento de Conteúdo)
- **Lucide React** (Ícones)
- **React Router Dom** (Navegação)

## Como Configurar o Sanity

Para que o projeto funcione com seus próprios dados, siga estes passos:

1.  **Crie uma conta no Sanity**: Vá para [sanity.io](https://www.sanity.io) e crie um projeto.
2.  **Obtenha seu Project ID**: No painel do Sanity, copie o `projectId`.
3.  **Atualize as configurações**:
    -   Abra `sanity.config.ts` e substitua `'your-project-id'` pelo seu ID.
    -   Abra `src/sanity/client.ts` e substitua `'your-project-id'` pelo seu ID.
4.  **CORS**: No painel do Sanity, em "Settings" > "API" > "CORS origins", adicione `http://localhost:5173` para permitir o acesso local.
5.  **Deploy do Studio (Opcional)**: Você pode rodar o Sanity Studio localmente ou fazer o deploy para gerenciar seus imóveis.

## Como Rodar o Projeto

1.  Instale as dependências:
    ```bash
    pnpm install
    ```
2.  Inicie o servidor de desenvolvimento:
    ```bash
    pnpm run dev
    ```

## Estrutura do Projeto
- `src/sanity/schemas/property.ts`: Define os campos do imóvel (Título, Preço, Tipo, Imagem, etc).
- `src/pages/Home.tsx`: Lista todos os imóveis vindos do Sanity.
- `src/pages/PropertyDetails.tsx`: Exibe os detalhes de um imóvel específico.
- `src/components/PropertyCard.tsx`: Componente visual para a listagem.
