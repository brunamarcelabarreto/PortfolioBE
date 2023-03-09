FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install 


COPY . .

ENV DATABASE_URL="postgresql://user:password@localhost:5432/database?schema=public"
ENV PORT=3000

EXPOSE $PORT

CMD ["npm", "run", "start"]