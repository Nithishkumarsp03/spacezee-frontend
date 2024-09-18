# Use Node.js LTS version for build
FROM node:18 as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Build the React app
RUN npm run build

# Use Nginx to serve the build
FROM nginx:alpine

COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
