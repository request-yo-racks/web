FROM nginx:1.13.8-alpine
MAINTAINER Rémy Greinhofer <remy.greinhofer@gmail.com>

# Copy custom configuration file..
COPY docker/nginx/ /etc/nginx/

# Copy the bundled version of the site.
COPY build/es5-bundled /var/www/build/es5-bundled
