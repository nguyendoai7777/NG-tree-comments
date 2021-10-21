FROM node:16-alpine as builder

WORKDIR /tree-app

COPY package.json package-lock.json ./

RUN npm install
####RUN npx ngcc es2015 --create-ivy-entry-points

COPY . .

# Build the project and copy the files
RUN npm run ng build

# Stage 2
FROM nginx:alpine

COPY ./nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /var/www/tree-comment/*

# Copy from the stage 1
COPY --from=builder /tree-app/dist/tree-comment /var/www/tree-comment

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
