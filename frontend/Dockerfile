# 阶段 1: 构建阶段
FROM node:23 AS builder
WORKDIR /app

RUN npm config set registry https://registry.npmmirror.com/

COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# 阶段 2: 部署阶段
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
