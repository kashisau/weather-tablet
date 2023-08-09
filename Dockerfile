# Stage 1: Build the Node.js app
FROM node:lts-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app source code
COPY . .

# Build the app and export static files
RUN npm run build
RUN npm run export

# Stage 2: Create the production image using NGINX
FROM nginx:alpine

# Copy the NGINX configuration file
COPY deployment/default.conf /etc/nginx/nginx.conf

# Copy the exported static files from the previous stage to the NGINX image
COPY --from=build /app/out /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]