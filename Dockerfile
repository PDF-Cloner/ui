# STAGE 1: Build static assets
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
COPY .npmrc* ./
RUN npm install
COPY . .
RUN npm run build

# STAGE 2: Nginx for static serve
FROM nginx:1.25-alpine AS serve
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist ./

# Optional: Custom Nginx config for SPA routes
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
