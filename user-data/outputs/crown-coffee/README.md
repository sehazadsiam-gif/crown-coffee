# ☕ Crown Coffee — Cafe Management System

Manage Inventory, Profits & Staff from a beautiful web dashboard.

**Stack:** Node.js + Express · Supabase (PostgreSQL) · Vercel

---

## 🚀 Quick Start (Google IDX)

1. Go to [idx.google.com](https://idx.google.com) → New Project → Node.js
2. Upload all project files
3. Create a `.env` file:
   ```
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_ANON_KEY=your-anon-key
   ```
4. In the terminal:
   ```bash
   npm install
   npm run dev
   ```

---

## 🗄️ Supabase Setup

1. Go to [supabase.com](https://supabase.com) → New Project
2. Open **SQL Editor** → paste contents of `supabase-schema.sql` → Run
3. Go to **Settings → API** → copy URL and anon key into `.env`

---

## 🌐 Deploy to Vercel

```bash
npm install -g vercel
vercel env add SUPABASE_URL
vercel env add SUPABASE_ANON_KEY
vercel
```

---

## 🐙 GitHub Setup

```bash
git init
git add .
git commit -m "Initial commit — Crown Coffee"
git remote add origin https://github.com/YOUR_USERNAME/crown-coffee.git
git push -u origin main
```

---

## 📁 Project Structure

```
crown-coffee/
├── public/
│   └── index.html        ← Full frontend (Dashboard, Inventory, Profits, Staff)
├── server.js             ← Node.js + Express + Supabase API
├── supabase-schema.sql   ← Run once in Supabase SQL Editor
├── package.json
├── vercel.json
├── .env.example
├── .gitignore
└── README.md
```

---

## ✅ Features
- 📊 Dashboard with weekly revenue chart & low stock alerts
- 📦 Inventory tracking with reorder alerts
- 💰 Daily profit & expense recording
- 👥 Staff management with roles and shifts
- 🗄️ Supabase PostgreSQL database
- 🌐 One-command Vercel deployment
