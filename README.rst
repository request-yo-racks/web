Request Yo Racks
================

Requesting bike racks to the city of Austin was never that easy.

Quickstart
----------

Setup the full environment::

  make

This will download all the project dependencies.

``make help`` will show you the available targets that will help you work on this project.

Setup the project
-----------------

The `full setup guide`_ provides instructions to help you set up the external services required by the project locally
(postgresql, rabbitmq, redis) and explains how to deploy this project on a local Kubernetes cluster (Minikube).

You can also refer to the ``kubernetes`` folder of the `infra`_ project for more details about the deployment
implementation.

Setup a directory to store the RYR projects::

  export RYR_PROJECT_DIR="${HOME}/projects/request-yo-racks"

Clone the project::

  mkdir -p "${RYR_PROJECT_DIR}"
  cd "${RYR_PROJECT_DIR}"
  git clone git@github.com:request-yo-racks/web.git

Create a ``config.js`` file to store the API key for Google Maps::

  cat << EOF > "${RYR_PROJECT_DIR}/web/src/config.js"
  var config = {"GOOGLE_WEB_MAPS_API_KEY": "<redacted>"};
  EOF

Prepare your developement environment::

  cd "${RYR_PROJECT_DIR}/web"
  make setup

Local development
-----------------

To serve the project locally::

  polymer serve


Using the web devtools
----------------------

The `loannister/web-devtools:1.1.0` image contains all the tools you need to start the project (`polymer-cli`, `bower` `gulp`, etc.). You do no necessaryly need to install any of them.

The unit test will run on `Firefox ESR 52`.

`make help` will show you the available targets.

.. _`docker`: https://docs.docker.com/engine/understanding-docker/
.. _`docker-compose`: https://docs.docker.com/compose/overview/
