# Configuration

## Basic Configuration

Configure your project by modifying `config.ts`:

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  // Site config
  title: 'Your Site',
  description: 'Description',

  // Theme config
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' }
    ]
  }
})
```

## Advanced Options

### Custom Theme

Create a custom theme by extending the default theme:

```ts
// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // register global components
  }
}
```

### Environment Variables

Use `.env` files for environment-specific configuration:

```bash
VITE_API_URL=https://api.example.com
```