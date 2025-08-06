# Use an official Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install ALL dependencies (including devDependencies like react-scripts)
RUN npm install

# Copy the rest of your source code
COPY . .

# Expose port used by React dev server
EXPOSE 3000

# Start the development server
CMD ["npm", "start"]
