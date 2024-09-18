# Use Node.js LTS version for build
FROM node:18 as build

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy everything including the .env file
COPY . .

# Build the React app
RUN npm run build

# Use Nginx to serve the build
FROM nginx:alpine

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
