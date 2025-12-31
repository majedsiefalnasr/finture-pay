FROM node:20.17.0 as build-stage

WORKDIR /app

COPY package*.json ./

# RUN npm install -g npm@11.6.3

# RUN npm install --force

COPY . .

# RUN yarn live_mode_build

FROM nginx:1.21.1-alpine as production-stage

RUN rm -rf /usr/share/nginx/html

COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build-stage /app/.output/public /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]






