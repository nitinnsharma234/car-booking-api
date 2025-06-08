FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# ENV NODE_ENV=development
EXPOSE 4001
ENV SERVICE_NAME=user-service

CMD ["npm", "run", "dev"]
