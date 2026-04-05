# Gaurav Kumar Sah - Portfolio Website

A modern personal portfolio built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Three.js.

## Features

- Personalized profile sections (Hero, About, Skills, Projects, Experience, Education, Certifications, Resume, Contact)
- Animated project cards with real project screenshots
- AI assistant widget to answer questions about Gaurav
- Smooth section transitions and responsive layout
- Resume download integration

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Three.js
- Lucide React

## Project Structure

- `src/components` - Reusable UI components
- `src/sections` - Portfolio sections
- `src/data/portfolio.ts` - Main portfolio content source
- `src/utils/ai.ts` - Assistant response and helper logic
- `public/images` - Profile, project, and certificate assets

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Customization Guide

Update personal details from:

- `src/data/portfolio.ts`

Update assistant behavior from:

- `src/utils/ai.ts`
- `src/components/ChatbotWidget.tsx`

## Deployment

This project is Vite-based and can be deployed on platforms like Vercel, Netlify, or GitHub Pages.

## License

Personal portfolio project for Gaurav Kumar Sah. All rights reserved.
