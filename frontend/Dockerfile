FROM node:14-alpine
# Create app directory
WORKDIR /src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN yarn install
#RUN yarn build 
# Bundle app source
COPY . .
CMD yarn build && yarn start
EXPOSE 3000