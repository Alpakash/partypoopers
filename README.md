# Turborepo-kit

Tuborepo-kit is a monorepo boilerplate.
These are packages based on Supabase, Tailwindcss, TanStack Query, and React-hook-form that can be commonly used in three environments: Web (Next.js), App (React Native Expo), and Desktop (Tauri).

## File Tree

```
.vscode
  └─ Recommended extensions and settings for VSCode users
apps
  ├─ app
  |   ├─ Expo SDK 51
  |   ├─ React Native using React 18
  |   ├─ Navigation using Expo Router
  |   └─ Tailwind CSS using NativeWind
  ├─ program
  |   ├─ Tauri 1.6
  |   ├─ Next.js 14 using React 18
  |   ├─ Auth using tauri-plugin-oauth
  |   └─ Tailwind CSS
  └─ web
      ├─ Next.js 14
      ├─ React 18
      ├─ Tailwind CSS
      └─ @supabase/ssr
packages
  ├─ api
  |   └─ Api using Supabase client
  ├─ eslint-config
  |   └─ Shared eslint configuration
  ├─ query
  |   └─ State management using Tanstack-query
  ├─ supabase
  |   └─ Supabase client, Edge functions
  ├─ tailwind-config
  |   └─ Shared tailwind configuration
  ├─ types
  |   └─ Shared types
  ├─ typescript-config
  |   └─ Shared tsconfig
  ├─ ui
  |   └─ Shared ui using React-hook-form
  └─ utils
      └─ Shared utils

```

## Quick Start

```bash
git clone https://github.com/01-works/turborepo-kit.git
```

```bash
pnpm i
```

## Setup

### **1. Environment Variables**

```bash
cp .env.example .env.local
```

Set the Supabase environment variables in each project.

### 2. Supabase

```sql
create table
  public.profile (
    user_id uuid primary key,
    profile_image text,
    nickname text not null,
    foreign key (user_id) references auth.users (id)
  );
```

Create a project at [Supabase](https://supabase.com/) and create a profile table and profile storage. (RLS settings omitted)

```bash
supabase init
supabase login
supabase link
```

Execute the above commands in order and enter `pnpm gen-types` to create a `database.types.ts` file.

### 3. Run

Presets for each environment are [Expo](https://docs.expo.dev/), [Next.js](https://nextjs.org/docs), and [Tauri](https://tauri.app/v1/guides/) Please refer to the official document.

- app
    
    ```bash
    pnpm run dev
    ```
    
- program
    
    ```bash
    pnpm tauri dev
    ```
    
- web
    
    ```bash
    pnpm run dev
    ```
