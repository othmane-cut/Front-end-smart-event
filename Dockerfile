# STEP 1 — Build Angular app
FROM node:20 AS build
WORKDIR /app

# Install dependencies first (takes advantage of Docker cache)
COPY package*.json ./
RUN npm install

# Copy the rest of the project
COPY . .

# Build Angular (Angular 17+ uses `browser` output folder)
RUN npm run build -- --configuration production

# STEP 2 — Serve with NGINX
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy built Angular app to Nginx web root
COPY --from=build /app/dist/*/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

