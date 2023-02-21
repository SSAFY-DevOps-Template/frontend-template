FROM node:16 AS build
WORKDIR /app
ENV REACT_APP_API_URL http://t7c17.p.ssafy.io/api/v1
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=build /app/build /usr/share/nginx/html
