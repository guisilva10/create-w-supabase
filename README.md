# Create W Supabase - Next.js Starter Kit

<div align="center">

**[English](#-english) | [Portugues](#-portugues)**

</div>

---

# English

A high-performance, opinionated boilerplate for Full Stack applications with **Better Auth**, **Supabase**, **Prisma**, and **shadcn/ui**.

## Quick Start

```bash
pnpm create w-supabase my-app
cd my-app
pnpm install
cp .env.example .env
# Fill in your Supabase credentials
pnpm db:generate
pnpm db:push
pnpm dev
```

Access: [http://localhost:3000](http://localhost:3000)

---

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router) + React 19
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **ORM:** [Prisma 7](https://www.prisma.io/)
- **Authentication:** [Better Auth](https://www.better-auth.com/) — Email/password + Google OAuth
- **Backend:** [Supabase](https://supabase.com/) — PostgreSQL + Storage + Realtime
- **Data Fetching:** [TanStack Query v5](https://tanstack.com/query/latest)
- **Forms:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **3D Effects:** [Three.js](https://threejs.org/) + React Three Fiber
- **Quality:** Prettier, ESLint & TypeScript

---

## Folder Structure

```plaintext
src/
├── app/                    # Routes, layouts and pages (App Router)
│   ├── (private)/app/      # Authenticated routes
│   ├── (public)/           # Public routes (landing, auth)
│   ├── api/auth/[...all]/  # Better Auth API handler
│   ├── _components/        # Reusable UI components (shadcn)
│   ├── _hooks/             # Custom hooks
│   └── _lib/               # Utilities
├── features/               # Domain-grouped logic (Auth, etc)
├── lib/                    # Auth config, Supabase clients
├── providers/              # Context Providers (QueryClient, Theme)
├── services/database/      # Prisma client singleton
├── types/                  # Global TypeScript definitions
prisma/                     # Database schema
```

---

## Available Scripts

| Command              | Description                              |
| :------------------- | :--------------------------------------- |
| `pnpm dev`           | Starts the development server.           |
| `pnpm build`         | Builds the application for production.   |
| `pnpm start`         | Starts the server in production mode.    |
| `pnpm lint`          | Runs ESLint verification.                |
| `pnpm db:generate`   | Generates the Prisma Client.             |
| `pnpm db:push`       | Pushes schema to database.               |
| `pnpm db:migrate`    | Runs database migrations.                |

---

## Essential Variables

| Variable                       | Description                                    |
| :----------------------------- | :--------------------------------------------- |
| `DATABASE_URL`                 | Supabase PostgreSQL connection string (pooling).|
| `DIRECT_URL`                   | Supabase direct connection (for migrations).   |
| `BETTER_AUTH_SECRET`           | Secret key for Better Auth tokens.             |
| `BETTER_AUTH_URL`              | App base URL.                                  |
| `NEXT_PUBLIC_SUPABASE_URL`     | Supabase project URL.                          |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY`| Supabase anonymous key.                        |
| `NEXT_PUBLIC_APP_URL`          | Base URL of the application.                   |
| `GOOGLE_CLIENT_ID`             | Google OAuth Client ID (optional).             |
| `GOOGLE_CLIENT_SECRET`         | Google OAuth Client Secret (optional).         |

---

# Portugues

Boilerplate opinativo e de alta performance para aplicacoes Full Stack com **Better Auth**, **Supabase**, **Prisma** e **shadcn/ui**.

## Inicio Rapido

```bash
pnpm create w-supabase my-app
cd my-app
pnpm install
cp .env.example .env
# Preencha as credenciais do Supabase
pnpm db:generate
pnpm db:push
pnpm dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router) + React 19
- **Estilizacao:** [Tailwind CSS v4](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **ORM:** [Prisma 7](https://www.prisma.io/)
- **Autenticacao:** [Better Auth](https://www.better-auth.com/) — Email/senha + Google OAuth
- **Backend:** [Supabase](https://supabase.com/) — PostgreSQL + Storage + Realtime
- **Data Fetching:** [TanStack Query v5](https://tanstack.com/query/latest)
- **Formularios:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Efeitos 3D:** [Three.js](https://threejs.org/) + React Three Fiber
- **Qualidade:** Prettier, ESLint & TypeScript

---

## Estrutura de Pastas

```plaintext
src/
├── app/                    # Rotas, layouts e paginas (App Router)
│   ├── (private)/app/      # Rotas autenticadas
│   ├── (public)/           # Rotas publicas (landing, auth)
│   ├── api/auth/[...all]/  # Better Auth API handler
│   ├── _components/        # Componentes UI reutilizaveis (shadcn)
│   ├── _hooks/             # Hooks personalizados
│   └── _lib/               # Utilitarios
├── features/               # Logica agrupada por dominio (Auth, etc)
├── lib/                    # Config auth, clientes Supabase
├── providers/              # Context Providers (QueryClient, Theme)
├── services/database/      # Prisma client singleton
├── types/                  # Definicoes globais TypeScript
prisma/                     # Schema do banco
```

---

## Scripts Disponiveis

| Comando              | Descricao                                |
| :------------------- | :--------------------------------------- |
| `pnpm dev`           | Inicia o servidor de desenvolvimento.    |
| `pnpm build`         | Compila a aplicacao para producao.       |
| `pnpm start`         | Inicia o servidor em modo de producao.   |
| `pnpm lint`          | Executa a verificacao do ESLint.         |
| `pnpm db:generate`   | Gera o Prisma Client.                    |
| `pnpm db:push`       | Envia schema para o banco de dados.      |
| `pnpm db:migrate`    | Executa migrations do banco.             |

---

## Variaveis Essenciais

| Variavel                        | Descricao                                        |
| :------------------------------ | :----------------------------------------------- |
| `DATABASE_URL`                  | Connection string PostgreSQL do Supabase (pooling).|
| `DIRECT_URL`                    | Conexao direta do Supabase (para migrations).    |
| `BETTER_AUTH_SECRET`            | Chave secreta para tokens do Better Auth.        |
| `BETTER_AUTH_URL`               | URL base do app.                                 |
| `NEXT_PUBLIC_SUPABASE_URL`      | URL do projeto Supabase.                         |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Chave anonima do Supabase.                       |
| `NEXT_PUBLIC_APP_URL`           | URL base da aplicacao.                           |
| `GOOGLE_CLIENT_ID`              | Client ID do Google OAuth (opcional).            |
| `GOOGLE_CLIENT_SECRET`          | Client Secret do Google OAuth (opcional).        |

---

<div align="center">

Developed with coffee and code by **Willem**

</div>
