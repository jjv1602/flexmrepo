# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory for the backend
WORKDIR /app

# Copy backend package.json and package-lock.json to the backend directory
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Set the working directory for the frontend
WORKDIR /app/frontend

# Copy frontend package.json and package-lock.json to the frontend directory
COPY frontend/package*.json ./

# Install frontend dependencies
RUN npm install

COPY . .

# Copy the rest of the backend and frontend code to the appropriate directories
WORKDIR /app
COPY . .

WORKDIR /app

# Expose the port that the server will run on
EXPOSE 5173 5000

# Start the server
CMD ["npm", "run","dev"]
