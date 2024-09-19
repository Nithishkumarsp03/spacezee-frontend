# Stage 1: Build the Vite app
FROM node:18 as build

WORKDIR /usr/src/app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the app files
COPY . .

# Build the Vite app
RUN npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:alpine

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Expose the port that Nginx runs on
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
