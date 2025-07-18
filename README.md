Frontend Skill Test – Todo App

This is a submission for the **Frontend Developer Skill Test**. It’s a simple Todo List app built with **Next.js App Router**, **RTK Query**, and **Tailwind CSS**. The project focuses on a combination of **Server-Side Rendering with ISR** and **Client-Side Revalidation using RTK Query**.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Redux Toolkit + RTK Query

## 🛠️ Getting Started

``bash

git clone https://github.com/your-username/todo-skill-test.git

cd RadenMuhammadFarrelKusumawardhana_FrontEndTest_EZV

npm install

npm run dev

## Features

**Server-Side Rendering + ISR (Incremental Static Regeneration)**
- Data is fetched using fetch() on the server (app/page.tsx)
- ISR strategy: page is pre-rendered at build time and revalidated every 10 seconds
- SEO-friendly, so search engines can see the content

**Client-Side Data Revalidation with RTK Query**
- After initial render, data is kept fresh using RTK Query
- Auto-refetches every 30 seconds
- Manual refresh button available as well

**Add Todo Modal**
- Modal form for adding a new todo
- Uses useCreateTodoMutation from RTK Query

Note: Since the API is mock (JSONPlaceholder), new todos are not persisted

**Pagination**
- Uses query param ?page=1, ?page=2, etc.
- Works on both server-side and client-side
- Prev/Next buttons are auto-disabled based on condition

Made By Raden Muhammad Farrel Kusumawardhana
