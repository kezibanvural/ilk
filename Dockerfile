# Latest node image
FROM node:latest

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Clean npm cache and install dependencies
RUN npm cache clean --force
RUN npm install

# Copy application code
COPY . .

# Build the application
RUN npm run build

# Start the application
CMD ["npm", "start"]



