# Stage 1: Build the React application
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /demomypc

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:stable-alpine

# Remove the contents of /usr/share/nginx/html to ensure a clean directory
RUN rm -rf /usr/share/nginx/html/*

# Copy the built files from the previous stage to the Nginx default HTML directory
COPY --from=build /demomypc/build /usr/share/nginx/html

# Expose port 80 for the application
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
