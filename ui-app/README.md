# UI Application 🎨

A modern **React TypeScript** frontend application that provides an interactive interface to display the top 10 books and publishers in the world. This application is part of the "Journey of a Click" project demonstrating complete end-to-end microservices deployment.

## 🚀 Features

- **React 18** with TypeScript for type safety
- **Grommet UI** components for modern design
- **Responsive layout** with split-view architecture
- **Real-time data fetching** from microservices
- **Interactive tables** with refresh functionality
- **Loading states** and user feedback
- **Feedback collection** integration

## 🏗️ Architecture

The application follows a component-based architecture:

```
┌─────────────────────────────────────────┐
│               App.tsx                   │
│  ┌─────────────────────────────────────┐│
│  │           HomePage/                 ││
│  │  ┌─────────────┬─────────────────┐  ││
│  │  │ Books Panel │ Publishers Panel│  ││
│  │  │             │                 │  ││
│  │  └─────────────┴─────────────────┘  ││
│  └─────────────────────────────────────┘│
│  ┌─────────────────────────────────────┐│
│  │        Feedback Link                ││
│  └─────────────────────────────────────┘│
└─────────────────────────────────────────┘
```

## 🛠️ Local Development

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup & Run

1. **Install Dependencies**
   ```bash
   cd ui-app
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

The application will be available at `http://localhost:3000`

### Project Structure
```
ui-app/
├── .env                       # Environment configuration
├── .gitignore                 # Git ignore patterns
├── public/                    # Static assets
│   ├── index.html            # HTML template
│   ├── favicon.ico           # App favicon
│   ├── manifest.json         # PWA manifest
│   ├── logo192.png           # Logo assets
│   ├── logo512.png           # Logo assets
│   └── robots.txt            # SEO robots file
├── src/                      # Source code
│   ├── App.tsx               # Main application component
│   ├── App.css               # Global styles
│   ├── index.tsx             # React entry point
│   ├── index.css             # Global CSS
│   ├── react-app-env.d.ts    # TypeScript declarations
│   └── HomePage/             # Main home component
│       ├── index.tsx         # Home page implementation
│       └── types.ts          # TypeScript type definitions
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
└── README.md                 # This documentation
```

## 📦 Dependencies

### Core Dependencies
- **react** (^18.2.0) - UI library
- **react-dom** (^18.2.0) - DOM rendering
- **typescript** (^4.9.5) - Type safety
- **axios** (^1.4.0) - HTTP client for API calls
- **@types/node** (^16.18.34) - Node.js TypeScript definitions

### UI Components
- **grommet** (^2.32.1) - UI component library
- **grommet-icons** (^4.10.0) - Icon set
- **styled-components** (^5.3.11) - CSS-in-JS styling
- **polished** (^4.2.2) - Styling utilities

### Development Tools
- **react-scripts** (5.0.1) - Create React App scripts
- **@types/react** (^18.2.8) - React TypeScript definitions
- **@types/react-dom** (^18.2.4) - React DOM TypeScript definitions

## 🎨 UI Components & Features

### Main Components

#### App Component (`App.tsx`)
- Main application wrapper
- Grommet theme provider
- HomePage component integration
- Feedback link with chat icon integration

#### HomePage Component (`HomePage/index.tsx`)
- Split-panel layout for Books and Publishers
- State management for data and loading states
- API integration with error handling
- Environment-based API configuration
- Interactive data display with refresh functionality

### Interactive Features

1. **Data Fetching**
   - "Show books data" button to fetch books
   - "Show publishers data" button to fetch publishers
   - Refresh buttons to reload data

2. **Loading States**
   - Spinner animations during API calls
   - "Fetching..." text feedback

3. **Data Display**
   - Interactive DataTable components with primary key indexing
   - Responsive columns (Book Name/Author, Publisher Name/Revenue)
   - Clean, organized presentation with bold headers

4. **User Experience**
   - Full-height application layout (90vh)
   - Header section with application title
   - Split-view design with bordered panels
   - Visual feedback for all actions
   - Chat icon integration for feedback
   - Responsive design principles

## 🌐 API Integration

The application connects to backend microservices:

### Configuration
The API host is configured using environment variables:
```typescript
const HOST = process.env.REACT_APP_HOST
```

Current configuration in `.env`:
```env
REACT_APP_HOST=http://ec2-3-144-100-189.us-east-2.compute.amazonaws.com
```

### Endpoints
- **Books API**: `${HOST}/books`
- **Publishers API**: `${HOST}/publishers`

### Data Models

The application uses well-structured TypeScript interfaces defined in `HomePage/types.ts`:

**Individual Item Types:**
```typescript
interface IBookItem {
    id: string;
    name: string;
    author: string;
}

interface IPublisherItem {
    id: string;
    name: string;
    revenue: string;
}
```

**API Response Types:**
```typescript
interface IBooksResponse {
    items: Array<IBookItem>;
    metadata: { title: string; source: string };
}

interface IPublishersResponse {
    items: Array<IPublisherItem>;
    metadata: { title: string; source: string };
}
```

All types are properly exported and imported for type safety across components.

## 🚀 Deployment

### Production Build

```bash
# Create optimized production build
npm run build

# The build folder contains the production-ready files
```

### AWS S3 Deployment

This project includes **GitHub Actions CI/CD** pipeline for automatic deployment to AWS S3:

1. **S3 Bucket Configuration**: Static website hosting enabled
2. **GitHub Actions**: Automated build and deploy on push
3. **Public Access**: Configured for web hosting

**Deployment URL**: [http://journey-of-a-click.s3-website-us-east-1.amazonaws.com](http://journey-of-a-click.s3-website-us-east-1.amazonaws.com)

### Manual S3 Deployment

```bash
# Build the application
npm run build

# Upload to S3 bucket (requires AWS CLI)
aws s3 sync build/ s3://your-bucket-name --delete
```

### Docker Deployment (Optional)

```dockerfile
# Example Dockerfile for containerized deployment
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```


## 🎨 Styling & Theme

### Grommet Theme
The application uses Grommet's default theme with:
- Clean, modern design
- Consistent spacing and typography
- Accessible color contrasts
- Responsive breakpoints

### Custom Styling
- Global CSS in `App.css` and `index.css`
- Component-specific styling with styled-components
- Responsive layout with CSS Grid and Flexbox

## 🔧 Configuration

### Environment Variables
The application uses a `.env` file for environment-specific configurations:

```env
REACT_APP_HOST=http://ec2-3-144-100-189.us-east-2.compute.amazonaws.com
```

**Environment Variable Reference:**
- `REACT_APP_HOST` - Backend API host URL for microservices

### Package.json Configuration
The project also includes a proxy configuration for development:
```json
"proxy": "http://ec2-18-119-122-189.us-east-2.compute.amazonaws.com"
```

### TypeScript Configuration
The project uses strict TypeScript settings in `tsconfig.json`:
- Strict type checking enabled
- ES2020 target
- Module resolution for React

## 🚀 Future Enhancements

- [ ] **Error Boundaries** - Better error handling and recovery
- [ ] **Unit Tests** - Component testing with React Testing Library
- [ ] **E2E Tests** - End-to-end testing with Cypress
- [ ] **Progressive Web App** - Enhanced PWA features
- [ ] **State Management** - Redux or Context API for complex state
- [ ] **Performance Optimization** - Code splitting and lazy loading
- [ ] **Accessibility** - Enhanced ARIA labels and keyboard navigation
- [ ] **Internationalization** - Multi-language support
- [ ] **Dark Mode** - Theme switching capability
- [ ] **Real-time Updates** - WebSocket integration for live data

## 🤝 Contributing

This application is part of the larger "Journey of a Click" project. Contributions are welcome!

### Development Guidelines

1. Follow React and TypeScript best practices
2. Use functional components with hooks
3. Maintain type safety with TypeScript
4. Follow the existing code style and structure
5. Test changes thoroughly before submitting

### Getting Started with Contributions

1. Fork the main repository
2. Create a feature branch
3. Make your changes in the `ui-app/` directory
4. Update environment variables as needed in `.env`
5. Test locally with `npm start`
6. Build successfully with `npm run build`
7. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the main project LICENSE file for details.

## 🌟 Feedback

We value your feedback! Please use the [feedback form](https://forms.gle/XW8PLFjzEEg2JPKj9) integrated in the application to share your thoughts and suggestions. 
