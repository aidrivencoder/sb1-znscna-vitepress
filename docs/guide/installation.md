# Installation

## Prerequisites

Before you begin, ensure you have:
- Node.js 16 or higher
- npm or yarn package manager

## Step-by-Step Installation

1. Create a new project:

```bash
npm create vite@latest my-project
```

2. Install dependencies:

```bash
cd my-project
npm install
```

3. Start the development server:

```bash
npm run dev
```

## Troubleshooting

If you encounter any issues during installation:

1. Clear npm cache:
```bash
npm cache clean --force
```

2. Delete node_modules and reinstall:
```bash
rm -rf node_modules
npm install
```