# Deployment Guide

## Building for Production

To build your documentation site for production:

```bash
npm run docs:build
```

This generates static files in the `.vitepress/dist` directory.

## Deployment Options

### GitHub Pages

1. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy
on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 16
      - run: npm ci
      - run: npm run docs:build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
```

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run docs:build`
3. Set publish directory: `docs/.vitepress/dist`

## Post-Deployment

After deploying:
1. Verify all pages load correctly
2. Check internal links
3. Test search functionality
4. Validate responsive design