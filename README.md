# IndieHackerGrowthWay

[中文文档](README-cn.md)

A comprehensive resource directory for indie developers, featuring a curated collection of tools and resources organized by different stages of the indie hacker journey.

## Purpose & Philosophy

IndieHackerGrowthWay serves as a roadmap and resource hub for independent developers and entrepreneurs. It breaks down the indie hacker journey into six key stages:

1. **Inspiration** - Where ideas begin
2. **Build** - Tools for MVP development
3. **Launch** - Resources for product launch
4. **Grow** - Growth hacking and marketing
5. **Monetize** - Revenue generation strategies
6. **Automate** - Business process automation

Each stage is color-coded and contains carefully selected resources to help indie hackers succeed at that particular phase of their journey.

## For Developers

### Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── data/         # Resource YAML configurations
│   │   ├── lib/          # Utility functions and types
│   │   └── pages/        # Page components
├── server/               # Express.js server setup
└── shared/              # Shared types and schemas
```

### Tech Stack

- **Frontend**
  - React with TypeScript
  - TanStack Query for data fetching
  - Tailwind CSS + shadcn/ui for styling
  - Wouter for routing
  - YAML for resource configuration
  - i18n support for internationalization

- **Development Tools**
  - Vite for fast development
  - TypeScript for type safety
  - ESLint + Prettier for code quality

### Code Modules

1. **Navigation Component**
   - Handles section navigation and scroll behavior
   - Implements smooth scrolling to sections

2. **Resource Management**
   - YAML-based resource configuration
   - Dynamic resource filtering
   - Type-safe resource handling

3. **UI Components**
   - ResourceCard: Displays individual resources
   - ResourceSection: Groups resources by category
   - SearchBar: Filters resources across all sections

4. **Internationalization**
   - Language selection
   - Localized content loading
   - Dynamic YAML configuration per language

## Deployment

### GitHub Pages Deployment

1. **Setup GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Configure GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source
   - Create `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - name: Setup Node.js
           uses: actions/setup-node@v2
           with:
             node-version: '20'
         - name: Install Dependencies
           run: npm install
         - name: Build
           run: npm run build
         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist/public
   ```

3. **Update package.json**
   Add homepage field for GitHub Pages:
   ```json
   {
     "homepage": "https://yourusername.github.io/repository-name"
   }
   ```

4. **Push and Deploy**
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push
   ```

Your site will be automatically deployed to `https://yourusername.github.io/repository-name`

### Benefits of GitHub Pages

- **Free Hosting**: GitHub Pages is completely free for public repositories
- **Automatic Deployment**: Automatic builds and deployments via GitHub Actions
- **Custom Domains**: Supports custom domain configuration
- **SSL/TLS**: Free HTTPS certificates provided by GitHub
- **CDN**: Content delivery through GitHub's global CDN

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
