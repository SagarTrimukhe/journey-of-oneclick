# Publishers Service 🏢

A modern **Python FastAPI** microservice that provides an API to retrieve the top 10 largest publishing companies in the world with their revenue information. This service is part of the "Journey of a Click" project demonstrating microservices architecture with Kubernetes deployment.

## 🚀 Features

- **FastAPI framework** for high-performance async API
- **Automatic OpenAPI documentation** with Swagger UI
- **Containerized** with Docker for easy deployment
- **Kubernetes ready** with deployment manifests
- **CORS enabled** for cross-origin requests
- **Revenue data** showcasing industry leaders

## 📋 API Documentation

### Endpoints

#### GET `/publishers`
Returns a list of the top 10 largest publishing companies by revenue.

**Response Structure:**
```json
{
  "items": [
    {
      "id": "9d8dde26-b60a-40c6-8893-900e7a4ef8fc",
      "name": "Pearson Education",
      "revenue": "$6.070 billion"
    }
  ],
  "metadata": {
    "title": "The Ten Largest Publishing Companies in the World",
    "source": "https://www.tharawat-magazine.com/facts/ten-largest-publishing-companies/"
  }
}
```

**Response Codes:**
- `200 OK` - Successfully retrieved publishers data

### Interactive API Documentation

When running locally, access the auto-generated documentation:
- **Swagger UI**: `http://localhost:80/docs`
- **ReDoc**: `http://localhost:80/redoc`
- **OpenAPI JSON**: `http://localhost:80/openapi.json`

## 🛠️ Local Development

### Prerequisites
- Python 3.9 or higher
- pip (Python package installer)

### Setup & Run

1. **Install Dependencies**
   ```bash
   cd publishers-service
   pip install -r requirements.txt
   ```

2. **Start Development Server**
   ```bash
   uvicorn app.main:app --reload --host 0.0.0.0 --port 80
   ```

3. **Test the API**
   ```bash
   curl http://localhost:80/publishers
   ```

The service will be available at `http://localhost:80`

### Using Virtual Environment (Recommended)

```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# On macOS/Linux:
source venv/bin/activate
# On Windows:
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the application
uvicorn app.main:app --reload --host 0.0.0.0 --port 80
```

### Project Structure
```
publishers-service/
├── app/
│   ├── __init__.py             # Python package marker
│   └── main.py                 # FastAPI application
├── requirements.txt            # Python dependencies
├── Dockerfile                  # Container configuration
└── deployment-files/           # Kubernetes manifests
    ├── publisher-deployment.yaml  # Kubernetes deployment
    └── publisher-service.yaml     # Kubernetes service
```

## 🐳 Docker Deployment

### Build Docker Image

```bash
# Build the image
docker build -t publishers-service:latest .

# Run the container
docker run -p 80:80 publishers-service:latest
```

### Using Pre-built Image

```bash
# Pull from Docker Hub
docker pull sagardev/publishers:1.0

# Run the container
docker run -p 80:80 sagardev/publishers:1.0
```

### Push to Registry

```bash
# Tag the image
docker tag publishers-service:latest your-registry/publishers:1.0

# Push to registry
docker push your-registry/publishers:1.0
```

**Docker Hub Repository:** [sagardev/publishers](https://hub.docker.com/r/sagardev/publishers)

### Docker Configuration Details

- **Base Image**: `python:3.9`
- **Working Directory**: `/code`
- **Exposed Port**: `80`
- **Optimized**: Dependencies installed separately for better caching

## ☸️ Kubernetes Deployment

### Deploy to Kubernetes

1. **Apply Deployment**
   ```bash
   kubectl apply -f deployment-files/publisher-deployment.yaml
   ```

2. **Create Service**
   ```bash
   kubectl apply -f deployment-files/publisher-service.yaml
   ```

3. **Setup Ingress** (Use the main ingress file)
   ```bash
   kubectl apply -f ../books-service/deployment-files/ingress.yaml
   ```

### Configuration Details

- **Deployment**: 1 replica running on port 80
- **Service**: Exposes deployment on port 8082 (internal)
- **Ingress**: Routes `/publishers` path to the service
- **Docker Image**: `sagardev/publishers:1.0`

### Verify Deployment

```bash
# Check pod status
kubectl get pods -l app=publishers-service

# Check service
kubectl get service publishers-service

# Test the service (if using minikube)
kubectl port-forward service/publishers-service 8082:8082
curl http://localhost:8082/publishers
```

## 🔧 Configuration

### Environment Variables
Currently, the service uses static configuration. Future enhancements could include:
- `PORT` - Server port (default: 80)
- `ENVIRONMENT` - Environment mode (development/production)
- `DATABASE_URL` - External database connection
- `LOG_LEVEL` - Logging verbosity

### Dependencies

**Core Dependencies** (from `requirements.txt`):
- `fastapi>=0.68.0,<0.69.0` - Modern web framework
- `uvicorn>=0.15.0,<0.16.0` - ASGI server

**Additional Dependencies** (automatically installed):
- `pydantic` - Data validation and serialization
- `starlette` - ASGI framework (FastAPI dependency)

## 📊 Data Source

The publishers data is curated from [Tharawat Magazine](https://www.tharawat-magazine.com/facts/ten-largest-publishing-companies/) and includes:
- Global publishing giants
- Revenue figures in billions
- Educational and commercial publishers
- Diverse market segments

## 🧪 Testing

### Manual Testing
```bash
# Health check
curl -X GET http://localhost:80/publishers

# Check API documentation
curl -X GET http://localhost:80/docs

# Expected response should contain 10 publishers with id, name, and revenue fields
```

### Load Testing (Optional)
```bash
# Using Apache Bench
ab -n 1000 -c 10 http://localhost:80/publishers
```

### API Testing with HTTPie
```bash
# Install HTTPie (optional)
pip install httpie

# Test the endpoint
http GET localhost:80/publishers
```

## 🚀 Future Enhancements

- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] Authentication and authorization (JWT/OAuth2)
- [ ] Rate limiting and caching (Redis)
- [ ] Health check endpoints (`/health`, `/ready`)
- [ ] Structured logging and monitoring
- [ ] Unit and integration tests with pytest
- [ ] Input validation and error handling
- [ ] Background tasks and async operations
- [ ] Metrics and observability (Prometheus)

## 🧪 Testing Framework Setup

```bash
# Install testing dependencies
pip install pytest pytest-asyncio httpx

# Run tests (when implemented)
pytest tests/
```

## 🤝 Contributing

This service is part of the larger "Journey of a Click" project. Contributions are welcome!

1. Fork the main repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Ensure code follows PEP 8 standards
6. Submit a pull request

### Development Guidelines

- Follow PEP 8 for Python code style
- Use type hints where applicable
- Add docstrings for functions and classes
- Write tests for new features

## 📄 License

This project is licensed under the MIT License - see the main project LICENSE file for details.