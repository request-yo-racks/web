FROM nginx:1.11.9
MAINTAINER Rémy Greinhofer <remy.greinhofer@gmail.com>

# Copy custom configuration file.
COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf
