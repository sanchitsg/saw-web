FROM node:20.15.0

COPY . /usr/src/saw-web

WORKDIR /usr/src/saw-web

RUN npm install

# Expose the port that the application listens on.
EXPOSE 8080

CMD ["npm", "run", "dev"]