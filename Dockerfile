# Build stage
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* /app/
RUN npm install
COPY server/package.json server/package-lock.json* /app/server/
COPY client/package.json client/package-lock.json* /app/client/
RUN npm --prefix server install && npm --prefix client install
COPY . /app
RUN npm --prefix client run build && npm --prefix server run build

# Runtime stage
FROM node:20-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
COPY server/package.json /app/server/package.json
RUN npm --prefix server install --omit=dev
COPY --from=build /app/server/dist /app/server/dist
COPY --from=build /app/client/dist /app/client/dist
EXPOSE 4000
CMD ["node", "server/dist/index.js"]