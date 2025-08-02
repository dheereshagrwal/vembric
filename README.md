# Vembric

A beautiful, modern template for API documentation built with Next.js. Vembric provides a clean, developer-friendly interface for creating stunning API documentation websites.

## Features

- 🎨 **Beautiful Design** - Modern UI with dark mode support
- 📱 **Responsive** - Works perfectly on all devices
- ⚡ **Fast** - Built with Next.js for optimal performance
- 🔍 **Developer-Friendly** - Easy to customize and extend
- 📚 **Organized Navigation** - Intuitive sidebar with collapsible sections
- 🎯 **API-Focused** - Designed specifically for API documentation

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the content by modifying the navigation in `components/app-sidebar.tsx` and the main content in `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load Inter and JetBrains Mono fonts for optimal readability.

## Customization

### Navigation

Edit `components/app-sidebar.tsx` to customize:

- Navigation sections
- Menu items
- Project links
- Branding

### Styling

The project uses Tailwind CSS with a custom design system. You can customize colors and styling in:

- `app/globals.css` - CSS variables and theme
- `tailwind.config.js` - Tailwind configuration

### Content

Add your API documentation content by editing the pages in the `app/` directory.

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Tailwind CSS](https://tailwindcss.com/docs) - utility-first CSS framework.
- [shadcn/ui](https://ui.shadcn.com/) - beautiful UI components.

## Deploy on Vercel

The easiest way to deploy your Vembric documentation is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
