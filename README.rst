Request Yo Racks
================

Requesting bike racks to the city of Austin was never that easy.

Quickstart
----------

Install `docker`_ and `docker-compose`_.

Setup the full environment::

  make

Start the services::

  docker-compose up [-d]

The `-d` switch allows you to start the services in the background. Without it, the logs would be printed on the
console, and you would need to press `CTRL-C` to stop the services.

Using the web devtools
----------------------

The `loannister/web-devtools:1.1.0` image contains all the tools you need to start the project (`polymer-cli`, `bower` `gulp`, etc.). You do no necessaryly need to install any of them.

The unit test will run on `Firefox ESR 52`.

`make help` will show you the available targets.

.. _`docker`: https://docs.docker.com/engine/understanding-docker/
.. _`docker-compose`: https://docs.docker.com/compose/overview/
