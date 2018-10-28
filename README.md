# Request Yo Racks

Requesting bike racks to the city of Austin was never that easy.

## Quickstart

If you need to install tools that must be installed globally on your system (OSX only)
(most likely the first time you run this project):
```bash
bash tools/bootstrap-osx.sh
```

This will globally install tools like node.js.

Setup the local environment:
```bash
npm i
```

This will download all the project dependencies.


## Setup the project

The [full setup guide](https://request-yo-racks.github.io/docs/guides/setup-full-environment) provides instructions to
help you set up the external services required by the project locally (postgresql, rabbitmq, redis) and explains how to
deploy this project on a local Kubernetes cluster (Minikube).

You can also refer to the `kubernetes` folder of the
[infra](https://github.com/request-yo-racks/infra/tree/master/kubernetes)
project for more details about the deployment implementation.

Setup a directory to store the RYR projects:
```bash
export RYR_PROJECT_DIR="${HOME}/projects/request-yo-racks"
```

Clone the project:
```bash
  mkdir -p "${RYR_PROJECT_DIR}"
  cd "${RYR_PROJECT_DIR}"
  git clone git@github.com:request-yo-racks/web.git
```

Prepare your development environment:
```bash
cd "${RYR_PROJECT_DIR}/web"
npm i
```

## Local development

To serve the project locally:
```bash
npm run dev
```

To test the project locally (i.e. running the full list of ci-tasks):
```bash
npm run ci
```
The `scripts` section of the `package.json` file will show you all the available commands.
