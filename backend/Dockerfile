# specify the node base image with your desired version node:<version>
FROM node:13
# replace this with your application's default port
WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3333

#CMD ["npm","start"]
CMD ["npm","start"]