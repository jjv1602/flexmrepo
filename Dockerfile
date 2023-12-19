# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory for the backend
WORKDIR /app/backend

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

# Copy the rest of the backend and frontend code to the appropriate directories
WORKDIR /app
COPY . .

# Build the frontend
WORKDIR /app/frontend
RUN npm run build

# Expose the port that the server will run on
EXPOSE 5000

# Set environment variables for the backend
ENV NODE_ENV production

# Start the server
CMD ["npm", "run","dev"]
