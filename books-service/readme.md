# Books Service 📚

A lightweight **Node.js Express** microservice that provides an API to retrieve the top 10 most popular books of all time. This service is part of the "Journey of a Click" project demonstrating microservices architecture with Kubernetes deployment.

## 🚀 Features

- **RESTful API** with Express.js framework
- **Containerized** with Docker for easy deployment
- **Kubernetes ready** with deployment manifests
- **CORS enabled** for cross-origin requests
- **Static data** showcasing popular literature

## 📋 API Documentation

### Endpoints

#### GET `/books`
Returns a list of the top 10 most popular books of all time.

**Response Structure:**
```json
{
  "items": [
    {
      "id": "12a1873-1441-48cc-b3d1-d5e32455f15b",
      "name": "Don Quixote",
      "author": "Miguel de Cervantes"
    }
  ],
  "metadata": {
    "title": "10 Most Popular Books of All Time",
    "source": "https://earlybirdbooks.com/most-popular-books"
  }
}
```

**Response Codes:**
- `200 OK` - Successfully retrieved books data

## 🛠️ Local Development

### Prerequisites
- Node.js (v16 or higher)
- npm

### Setup & Run

1. **Install Dependencies**
   ```bash
   cd books-service
   npm install
   ```

2. **Start Development Server**
   ```bash
   node index.js
   ```

3. **Test the API**
   ```bash
   curl http://localhost:3000/books
   ```

The service will be available at `http://localhost:3000`

### Project Structure
```
books-service/
├── index.js                    # Main Express application
├── package.json                # Node.js dependencies
├── Dockerfile                  # Container configuration
├── .dockerignore               # Docker ignore rules
└── deployment-files/           # Kubernetes manifests
    ├── books-deployment.yaml   # Kubernetes deployment
    ├── books-service.yaml      # Kubernetes service
    └── ingress.yaml           # Ingress configuration
```

## 🐳 Docker Deployment

### Build Docker Image

```bash
# Build the image
docker build -t books-service:latest .

# Run the container
docker run -p 3000:3000 books-service:latest
```

### Using Pre-built Image

```bash
# Pull from Docker Hub
docker pull sagardev/books:1.0

# Run the container
docker run -p 3000:3000 sagardev/books:1.0
```

### Push to Registry

```bash
# Tag the image
docker tag books-service:latest your-registry/books:1.0

# Push to registry
docker push your-registry/books:1.0
```

**Docker Hub Repository:** [sagardev/books](https://hub.docker.com/r/sagardev/books)

## ☸️ Kubernetes Deployment

### Deploy to Kubernetes

1. **Apply Deployment**
   ```bash
   kubectl apply -f deployment-files/books-deployment.yaml
   ```

2. **Create Service**
   ```bash
   kubectl apply -f deployment-files/books-service.yaml
   ```

3. **Setup Ingress** (Optional)
   ```bash
   kubectl apply -f deployment-files/ingress.yaml
   ```

### Configuration Details

- **Deployment**: 1 replica running on port 3000
- **Service**: Exposes deployment on port 8081 (internal)
- **Ingress**: Routes `/books` path to the service
- **Docker Image**: `sagardev/books:1.0`

### Verify Deployment

```bash
# Check pod status
kubectl get pods -l app=books-service

# Check service
kubectl get service books-service

# Test the service (if using minikube)
kubectl port-forward service/books-service 8081:8081
curl http://localhost:8081/books
```

## 🔧 Configuration

### Environment Variables
Currently, the service uses static configuration. Future enhancements could include:
- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment mode
- `DATABASE_URL` - External database connection

### Docker Configuration
- **Base Image**: `node:20-alpine3.16`
- **Working Directory**: `/app`
- **Exposed Port**: `3000`
- **Health Check**: Not implemented (can be added)

## 📊 Data Source

The books data is curated from [Early Bird Books](https://earlybirdbooks.com/most-popular-books) and includes:
- Classic literature
- Modern bestsellers
- Internationally recognized titles
- Diverse authorship

## 🧪 Testing

### Manual Testing
```bash
# Health check
curl -X GET http://localhost:3000/books

# Expected response should contain 10 books with id, name, and author fields
```

### Load Testing (Optional)
```bash
# Using Apache Bench
ab -n 1000 -c 10 http://localhost:3000/books
```

## 🚀 Future Enhancements

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Authentication and authorization
- [ ] Rate limiting and caching
- [ ] Health check endpoints
- [ ] Logging and monitoring
- [ ] Unit and integration tests
- [ ] OpenAPI/Swagger documentation

## 🤝 Contributing

This service is part of the larger "Journey of a Click" project. Contributions are welcome!

1. Fork the main repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the main project LICENSE file for details.