# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all source code
COPY . .

# Fix permissions (optional, but helps inside Docker)
#RUN chmod -R 777 /app/node_modules

# Expose port 3000
#EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
