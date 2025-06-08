FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# ENV NODE_ENV=development

ENV SERVICE_NAME=booking

CMD ["npm", "run", "dev"]
