# TableTop - Restaurant Menu Management System

A full-featured restaurant menu management system built with Next.js 16, TypeScript, Auth.js, and Tailwind/shadcn/UI, featuring role-based authentication for admin, staff, and customers.

Preview: https://scic-table-top-restaurant-menu-mana.vercel.app

## Features

- Role-based authentication: Admin, Staff, Customer
- Admin dashboard to manage menu items (add, delete, update)
- Staff dashboard (optional) for staff-related operations
- Customer menu view to browse dishes

Menu item management:

- Dish name, description, price, category, ingredients, and image URL
Protected routes:
- /dashboard accessible only to admin & staff
- /unauthorized for restricted access

- Responsive design using Tailwind CSS & Shadcn/UI
- Mock authentication for quick testing (admin, staff, customer)

## Credentials (Mock Authentication)
- Admin Login
```
email: admin@mail.com
password: 1234
```

- Staff Login
```
email: staff@mail.com
password: 1234
```

- Customer Login
```
email: customer@mail.com
password: 1234
```

## Tech Stack
- Next.js 16 (App Router)
- TypeScript
- Auth.js (Credentials providers)
- Tailwind CSS & Shadcn/UI for styling
- Lucide React for icons


## Installation
- Clone the repository:
```bash
git clone https://github.com/...
cd <Project file>
```

- Install dependencies:
```bash
npm install
```

## Environment Variables
- Create a .env.local file in the root directory with:
```
# NextAuth
NEXT_AUTH_SECRET=your_random_secret_key
```

