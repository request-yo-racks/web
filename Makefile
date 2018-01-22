# Project configuration.
PROJECT_NAME = web

# Makefile parameters.
RUN ?= docker
SUFFIX ?=
TAG ?= $(shell git describe)$(SUFFIX)

# General.
SHELL = /bin/bash
TOPDIR = $(shell git rev-parse --show-toplevel)

# Docker.
DOCKERFILE = Dockerfile$(SUFFIX)
DOCKER_ORG = requestyoracks
DOCKER_REPO = $(DOCKER_ORG)/$(PROJECT_NAME)
DOCKER_IMG = $(DOCKER_REPO):$(TAG)
DOCKER_IMG_WEB_TOOLS = loannister/web-devtools:1.2.1

# Chart.
CHART_REPO = ryr
CHART_NAME = $(CHART_REPO)/$(PROJECT_NAME)

# Run commands.
DOCKER_RUN = docker run -t -v=$$(pwd):/code --rm
DOCKER_RUN_XVFB = $(DOCKER_RUN) --privileged $(DOCKER_IMG_WEB_TOOLS)

default: setup

help: # Display help
	@awk -F ':|##' \
		'/^[^\t].+?:.*?##/ {\
			printf "\033[36m%-30s\033[0m %s\n", $$1, $$NF \
}' $(MAKEFILE_LIST) | sort

build-docker: ## Build the docker image
	@docker build -t $(DOCKER_IMG) -f $(DOCKERFILE) .

ci: ci-linters ci-docs ci-tests ##

ci-docs: ## Ensure the documentation builds
	@echo "Not implemented yet."

ci-linters: ## Run the static analyzers
	@find src -name '*.html' -print | xargs polymer lint --input

ci-tests: ## Run the unit tests
	$(DOCKER_RUN_XVFB) polymer test

clean: clean-repo clean-minikube clean-docker  ## Clean everything (!DESTRUCTIVE!)

clean-docker: ## Remove all docker artifacts for this project (!DESTRUCTIVE!)
	@docker image rm -f $(shell docker image ls --filter reference='$(DOCKER_REPO)' -q)

clean-minikube: ## Remove minikube deployment (!DESTRUCTIVE!)
	helm delete --purge $(PROJECT_NAME)

clean-repo: ## Remove unwanted files in project (!DESTRUCTIVE!)
	cd $(TOPDIR) && git clean -ffdx && git reset --hard

deploy-minikube:
	@helm upgrade $(PROJECT_NAME) $(CHART_NAME) \
	  --install \
		-f charts/values.minikube.yaml \
	  --set image.tag=$(TAG)

dist: ## Package the application
	polymer build --preset es5-bundled

docs: ## Build documentation
	@echo "Not implemented yet."

setup: build-docker ## Setup the full environment (default)
	npm install -g bower polymer-cli && polymer install

.PHONY: build-docker ci ci-linters ci-docs ci-tests clean clean-docker clean-minikube clean-repo dist docs setup
