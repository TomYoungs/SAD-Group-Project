# syntax=docker/dockerfile:1

# pull official base image
FROM node:alpine
ENV NODE_ENV=production
# set working directory
WORKDIR /app

# install app dependencies
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production

# add app
COPY . .

# start app
CMD ["npm", "start"]
