# build
FROM node:12.22.0-alpine as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock

RUN npm install -g yarn --force
RUN yarn

COPY . /app

RUN yarn build


# serve
FROM nginx:1.16.0-alpine

COPY --from=build /app/dist /usr/share/nginx/html
# COPY /etc/nginx/nginx.conf  ./t.conf
COPY ./nginx.conf /etc/nginx/nginx.conf 

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]