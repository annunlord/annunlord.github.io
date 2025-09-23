# Stage 1: Build the Jekyll site
FROM jekyll/builder as builder
WORKDIR /usr/src/app
COPY . .
RUN bundle install
RUN jekyll build

# Stage 2: Serve the built site with Nginx
FROM nginx:alpine
COPY --from=builder /usr/src/app/_site /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
