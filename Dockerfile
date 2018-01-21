FROM node:8.9.4-alpine as builder
MAINTAINER Rémy Greinhofer <remy.greinhofer@gmail.com>

# Add Git (required by polymer-cli).
RUN apk add --update git

# Go to the directory holding the application and copy the source code.
WORKDIR /usr/src/app
COPY . .

# Install bower, polymer-cli and build the project.
RUN npm install -g bower polymer-cli \
  && polymer install \
  && polymer build --preset es5-bundled


# Create the release image by serving the project previously built using nginx.
FROM nginx:1.13.8-alpine
MAINTAINER Rémy Greinhofer <remy.greinhofer@gmail.com>

# Copy custom configuration file..
COPY docker/nginx/ /etc/nginx/

# Copy the bundled version of the site.
COPY --from=builder /usr/src/app/build/es5-bundled /var/www/build/es5-bundled
