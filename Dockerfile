FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Build
COPY . .
RUN npm run build

FROM nginx:stable-alpine

# add curl for healthcheck
RUN apk add --no-cache curl

# Replace default nginx config and copy built assets
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=10s --timeout=3s --start-period=5s --retries=3 \
	CMD curl -f http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
