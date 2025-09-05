# NeoUrl - URL Shortener Frontend

<div align="center">

![NeoUrl Logo](https://img.shields.io/badge/NeoUrl-URL%20Shortener-blue?style=for-the-badge)
![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**A fast, modern, and accessible URL shortener frontend built with Astro**

[Demo](https://tab-to-dev.click/neourl/) • [API Documentation](#api-integration) • [Contributing](#contributing)

</div>

## 🚀 Features

- **⚡ Lightning Fast**: Built with Astro for optimal performance and SSR/SSG capabilities
- **🎨 Modern UI**: Clean, responsive design with TailwindCSS 4.x
- **♿ Accessible**: WCAG compliant with proper ARIA labels and semantic HTML
- **🔧 Developer-Friendly**: TypeScript support with comprehensive type definitions
- **📱 Mobile-First**: Responsive design that works on all devices
- **🎯 SEO Optimized**: Automatic sitemap generation and meta tags
- **🚀 Production Ready**: Optimized builds with code splitting and compression

### Core Functionality

- **URL Shortening**: Create short URLs with optional custom aliases
- **URL Management**: View and manage all created short URLs
- **Copy to Clipboard**: One-click copying of shortened URLs
- **Sorting & Filtering**: Organize URLs by creation date
- **Loading States**: Smooth loading indicators and error handling
- **Client-Side Validation**: Real-time URL validation

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **Astro** | Meta-framework | ^5.13.5 |
| **TypeScript** | Type safety | Latest |
| **TailwindCSS** | Styling | ^4.1.12 |
| **Node.js** | Server adapter | ^9.4.3 |

### Additional Tools

- **ESLint** - Code linting and quality
- **Prettier** - Code formatting
- **Lighthouse** - Performance auditing
- **Terser** - Code minification

## 📦 Installation

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tiny-url-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   ```bash
   cp .env.example .env
   ```
   
   Configure your environment variables:
   ```env
   API_URL=http://localhost:0001/api
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:4321`

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Base UI components (Button, Input, etc.)
│   ├── AppHeader.astro  # Application header
│   ├── Footer.astro     # Site footer
│   ├── UrlForm.astro    # URL shortening form
│   ├── UrlList.astro    # URL list display
│   ├── UrlCard.astro    # Individual URL card
│   └── Welcome.astro    # Main welcome section
├── icons/               # SVG icon components
├── layouts/             # Page layouts
│   └── Layout.astro     # Main layout template
├── pages/               # Astro pages (file-based routing)
│   └── index.astro      # Homepage
├── styles/              # Global styles
├── types/               # TypeScript type definitions
│   └── url.ts           # URL-related types
└── utils/               # Utility functions
    └── urlHelpers.ts    # URL validation and API helpers
```

## 🚀 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run sync` | Sync Astro types |
| `npm run lighthouse-dev` | Run Lighthouse audit |

## 🔧 Configuration

### Astro Configuration

The project uses a comprehensive Astro configuration (`astro.config.mjs`) with:

- **Server-side rendering (SSR)** with Node.js adapter
- **TailwindCSS** integration via Vite plugin
- **Build optimizations** including Terser minification
- **Sitemap generation** for SEO
- **Environment variable validation**
- **Image optimization** with Sharp

### Performance Optimizations

- Code splitting with manual chunks
- CSS and JS minification
- Console and debugger removal in production
- Automatic HTML compression
- Optimized image loading

## 🌐 API Integration

The frontend integrates with a backend API for URL operations:

### Endpoints

- `GET /api/urls` - Retrieve all URLs
- `POST /api/shorten` - Create a shortened URL

### Type Definitions

```typescript
interface UrlData {
  id: string | number
  originalUrl: string
  shortUrl: string
  alias?: string
  authCode?: string
  createdDate?: string
}

interface CreateUrlRequest {
  originalUrl: string
  alias?: string
  authCode?: string
}
```

## 🎨 Design System

### Component Architecture

- **UI Components**: Reusable base components in `src/components/ui/`
- **Feature Components**: Business logic components
- **Icon System**: Modular SVG icon components

### Styling Approach

- **TailwindCSS 4.x**: Modern utility-first CSS framework
- **Responsive Design**: Mobile-first approach
- **Custom Theme**: Neon-inspired color scheme
- **Accessibility**: WCAG compliant color contrasts

## 🚀 Deployment

### Production Build

```bash
npm run build
```

### Deployment Targets

The application is configured for deployment to:
- **Static hosting** (with prerendered pages)
- **Server hosting** (with SSR capabilities)
- **Edge functions** (with adapter configuration)

### Environment Variables

Ensure the following environment variables are set in production:

```env
API_URL=https://your-api-domain.com/api
```

## 🧪 Development

### Code Quality

The project enforces code quality through:

- **TypeScript** - Static type checking
- **ESLint** - Code linting with Astro-specific rules
- **Prettier** - Consistent code formatting
- **Strict mode** - Astro's strict TypeScript configuration

### Performance Monitoring

- **Lighthouse** integration for performance auditing
- **Bundle analysis** with Rollup
- **Build optimization** metrics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Maintain accessibility standards
- Write semantic HTML
- Use consistent code formatting
- Add appropriate ARIA labels

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙋‍♀️ Support

For support, please open an issue in the GitHub repository or contact the development team.

---

<div align="center">

**Built with ❤️ using Astro and modern web technologies**

</div>
