# MERN Stack Portfolio

A full-stack portfolio application built with MongoDB, Express, React, and Node.js.

## Project Structure

```
PORTFOLIO/
├── client/          # React frontend (Vite)
├── server/          # Express backend
└── package.json     # Root scripts
```

## Prerequisites

Before running this project, make sure you have:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **MongoDB** - Either:
  - **Local MongoDB** - [Install MongoDB Community Edition](https://www.mongodb.com/try/download/community)
  - **MongoDB Atlas** (Cloud) - [Free tier available](https://www.mongodb.com/cloud/atlas)

## Setup Instructions

### Step 1: Install Dependencies

Install all dependencies for root, server, and client:

```bash
npm run install-all
```

Or install them separately:

```bash
# Root dependencies (concurrently)
npm install

# Server dependencies
cd server && npm install && cd ..

# Client dependencies
cd client && npm install && cd ..
```

### Step 2: Set Up MongoDB

#### Option A: MongoDB Atlas (Cloud - Recommended for beginners)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account and cluster
3. Create a database user (username/password)
4. Whitelist your IP address (or use `0.0.0.0/0` for all IPs)
5. Get your connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/portfolio`)

#### Option B: Local MongoDB

1. Install MongoDB Community Edition
2. Start MongoDB service:
   ```bash
   # Linux
   sudo systemctl start mongod
   
   # macOS (if installed via Homebrew)
   brew services start mongodb-community
   
   # Windows
   # MongoDB should start automatically as a service
   ```

### Step 3: Configure Environment Variables

1. Create a `.env` file in the `server/` directory:

```bash
cd server
cp .env.example .env
```

2. Edit `server/.env` and add your MongoDB connection string:

```env
# For MongoDB Atlas (Cloud)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority

# For Local MongoDB
MONGODB_URI=mongodb://localhost:27017/portfolio

# Server Port
PORT=5000

# JWT Secret (use a random string in production)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

3. (Optional) Create `client/.env` for API URL:

```bash
cd client
echo "VITE_API_URL=http://localhost:5000/api" > .env
```

### Step 4: Run the Project

#### Run Both Client and Server Together (Recommended)

From the root directory:

```bash
npm run dev
```

This will start:
- **Backend Server** on `http://localhost:5000`
- **Frontend Client** on `http://localhost:5173` (or another port if 5173 is busy)

#### Run Separately

**Terminal 1 - Backend:**
```bash
npm run server
# or
cd server && npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm run client
# or
cd client && npm run dev
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Blog Posts
- `GET /api/blog` - Get all posts
- `GET /api/blog/:id` - Get single post
- `POST /api/blog` - Create new post (protected)
- `PUT /api/blog/:id` - Update post (protected)
- `DELETE /api/blog/:id` - Delete post (protected)

### Health Check
- `GET /api/health` - Check if server is running

## Testing the Setup

1. **Check if server is running:**
   ```bash
   curl http://localhost:5000/api/health
   ```
   Should return: `{"status":"OK","message":"Server is running"}`

2. **Register a new admin user:**
   ```bash
   curl -X POST http://localhost:5000/api/auth/register \
     -H "Content-Type: application/json" \
     -d '{"username":"admin","password":"admin123"}'
   ```

3. **Login:**
   ```bash
   curl -X POST http://localhost:5000/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{"username":"admin","password":"admin123"}'
   ```

## Troubleshooting

### MongoDB Connection Issues

- **"MongoServerError: Authentication failed"**
  - Check your MongoDB username and password in the connection string
  - Make sure your IP is whitelisted (for Atlas)

- **"MongooseServerSelectionError: connect ECONNREFUSED"**
  - Make sure MongoDB is running locally
  - Check if the connection string is correct

### Port Already in Use

- If port 5000 is busy, change `PORT` in `server/.env`
- If port 5173 is busy, Vite will automatically use the next available port

### Module Not Found Errors

- Make sure you've run `npm install` in all directories
- Delete `node_modules` and `package-lock.json`, then reinstall

## Production Build

Build the client for production:

```bash
npm run build
```

The built files will be in `client/dist/`

## Next Steps

1. Update the frontend to connect to the backend API
2. Install `axios` in the client: `cd client && npm install axios`
3. Create API utility files in the client
4. Update `AuthContext.jsx` to use the backend API

## License

ISC

