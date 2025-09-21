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
│  │           DemoPage/                 ││
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
├── public/                     # Static assets
│   ├── index.html             # HTML template
│   ├── favicon.ico            # App favicon
│   ├── manifest.json          # PWA manifest
│   └── robots.txt             # SEO robots file
├── src/                       # Source code
│   ├── App.tsx                # Main application component
│   ├── App.css                # Global styles
│   ├── index.tsx              # React entry point
│   ├── index.css              # Global CSS
│   ├── react-app-env.d.ts     # TypeScript declarations
│   └── DemoPage/              # Main demo component
│       └── index.tsx          # Demo page implementation
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
└── README.md                  # This documentation
```

## 📦 Dependencies

### Core Dependencies
- **react** (^18.2.0) - UI library
- **react-dom** (^18.2.0) - DOM rendering
- **typescript** (^4.9.5) - Type safety
- **axios** (^1.4.0) - HTTP client for API calls

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
- Feedback link integration

#### DemoPage Component (`DemoPage/index.tsx`)
- Split-panel layout for Books and Publishers
- State management for data and loading states
- API integration with error handling

### Interactive Features

1. **Data Fetching**
   - "Show books data" button to fetch books
   - "Show publishers data" button to fetch publishers
   - Refresh buttons to reload data

2. **Loading States**
   - Spinner animations during API calls
   - "Fetching..." text feedback

3. **Data Display**
   - Interactive DataTable components
   - Responsive columns (Name, Author/Revenue)
   - Clean, organized presentation

4. **User Experience**
   - Intuitive button placement
   - Visual feedback for all actions
   - Responsive design principles

## 🌐 API Integration

The application connects to backend microservices:

### Configuration
```typescript
const HOST = "http://ec2-3-144-100-189.us-east-2.compute.amazonaws.com"
```

### Endpoints
- **Books API**: `${HOST}/books`
- **Publishers API**: `${HOST}/publishers`

### Data Models

**Books Response:**
```typescript
interface IBooksResponse {
    items: Array<{
        id: string;
        name: string;
        author: string;
    }>;
    metadata: {
        title: string;
        source: string;
    };
}
```

**Publishers Response:**
```typescript
interface IPublishersResponse {
    items: Array<{
        id: string;
        name: string;
        revenue: string;
    }>;
    metadata: {
        title: string;
        source: string;
    };
}
```

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

## 🧪 Testing

### Manual Testing Checklist

- [ ] Application loads without errors
- [ ] "Show books data" button fetches and displays books
- [ ] "Show publishers data" button fetches and displays publishers
- [ ] Refresh buttons update the data
- [ ] Loading spinners appear during API calls
- [ ] Feedback link opens correctly
- [ ] Responsive design works on different screen sizes

### Future Testing Enhancements

```bash
# Install testing dependencies (when implemented)
npm install --save-dev @testing-library/react @testing-library/jest-dom

# Run tests (when implemented)
npm test
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
Create a `.env` file for environment-specific configurations:

```env
REACT_APP_API_HOST=http://localhost:8080
REACT_APP_ENVIRONMENT=development
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
4. Test locally with `npm start`
5. Build successfully with `npm run build`
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the main project LICENSE file for details.

## 🌟 Feedback

We value your feedback! Please use the [feedback form](https://forms.gle/XW8PLFjzEEg2JPKj9) integrated in the application to share your thoughts and suggestions. 
