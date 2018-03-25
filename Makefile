# Project configuration.
PROJECT_NAME = web

# Makefile parameters.
RUN ?= local
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
LOCAL_RUN_CMD =

# Determine whether running the command in a container or locally.
ifeq ($(RUN),docker)
  RUN_CMD = $(DOCKER_RUN_XVFB)
else
  RUN_CMD = $(LOCAL_RUN_CMD)
endif

default: setup

help: # Display help
	@awk -F ':|##' \
		'/^[^\t].+?:.*?##/ {\
			printf "\033[36m%-30s\033[0m %s\n", $$1, $$NF \
}' $(MAKEFILE_LIST) | sort

bootstrap: bootstrap-osx bootstrap-npm ## Install software globally

bootstrap-npm: ## Install NPM packages globally
	@bash tools/bootstrap-npm.sh

bootstrap-osx: ## Install software using Brew
	@bash tools/bootstrap-osx.sh

build-docker: init-config ## Build the docker image
	@docker build -t $(DOCKER_IMG) -f $(DOCKERFILE) .

ci: ci-linters ci-docs ci-tests ## Run all the CI tasks

ci-docs: ## Ensure the documentation builds
	@echo "Not implemented yet."

ci-linters: ## Run the static analyzers
	@find src -name '*.html' -print | xargs polymer lint --input

ci-tests: ## Run the unit tests
	$(RUN_CMD) polymer test -l chrome,firefox

clean: clean-repo clean-minikube clean-docker  ## Clean everything (!DESTRUCTIVE!)

clean-docker: ## Remove all docker artifacts for this project (!DESTRUCTIVE!)
	@docker image rm -f $(shell docker image ls --filter reference='$(DOCKER_REPO)' -q) || true

clean-minikube: ## Remove minikube deployment (!DESTRUCTIVE!)
	helm delete --purge $(PROJECT_NAME) || true

clean-repo: ## Remove unwanted files in project (!DESTRUCTIVE!)
	cd $(TOPDIR) && git clean -ffdx && git reset --hard

deploy-minikube:
	@kubectl config use-context minikube \
	&& helm upgrade $(PROJECT_NAME) $(CHART_NAME) \
	  	--install \
			-f charts/values.minikube.yaml \
	  	--set image.tag=$(TAG)

dist: ## Package the application
	polymer build --preset es5-bundled

docs: ## Build documentation
	@echo "Not implemented yet."

init-config: ## Setup the initial configuration
	@bash tools/config-js.sh

setup: init-config ## Setup the full environment (default)
	polymer install

.PHONY: bootstrap build-docker ci ci-linters ci-docs ci-tests clean clean-docker clean-minikube clean-repo deploy-minikube dist docs init-config setup
