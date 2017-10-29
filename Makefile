# Misc.
TOPDIR = $(shell git rev-parse --show-toplevel)

# Docker.
DOCKER_NETWORK=ryr
DOCKER_WEB_TOOLS_IMAGE = loannister/web-devtools:1.2.1
DOCKER_RUN = docker run -t -v=$$(pwd):/code --rm

# Web tools.
DOCKER_RUN_BOWER = $(DOCKER_RUN) --entrypoint bower $(DOCKER_WEB_TOOLS_IMAGE)
DOCKER_RUN_POLYMER = $(DOCKER_RUN) --entrypoint "" $(DOCKER_WEB_TOOLS_IMAGE) polymer
DOCKER_RUN_XVFB = $(DOCKER_RUN) --privileged $(DOCKER_WEB_TOOLS_IMAGE)

default: setup

help: # Display help
	@awk -F ':|##' \
		'/^[^\t].+?:.*?##/ {\
			printf "\033[36m%-30s\033[0m %s\n", $$1, $$NF \
}' $(MAKEFILE_LIST) | sort

ci-coala: ## Run the static analyzers
	@find src -name '*.html' -print | xargs $(DOCKER_RUN_POLYMER) lint --input

ci-docs: ## Ensure the documentation builds
	@echo "Not implemented yet."

ci-tests: ## Run the unit tests
	$(DOCKER_RUN_XVFB) polymer test

clean: ## Remove unwanted files in project (!DESTRUCTIVE!)
	cd $(TOPDIR); git clean -ffdx && git reset --hard

docker-clean: ## Stop and remove containers, volumes, networks and images for this project
	@docker-compose down --rmi local -v
	@docker network prune -f

docker-network: ## Create a bridge network
	FOUND=$$(docker network ls -f name=$(DOCKER_NETWORK) -q); \
	if [ -z "$$FOUND" ]; then \
		docker network create --driver bridge $(DOCKER_NETWORK); \
	fi

docs: ## Build documentation
	@echo "Not implemented yet."

polymer-build: ## Build the polymer project
	$(DOCKER_RUN_POLYMER) build

bower-install: ## Install the dependencies using bower
	$(DOCKER_RUN_BOWER) install

setup: docker-network bower-install ## Setup the full environment (default)
	@docker-compose build
	@docker-compose pull

.PHONY: bower-install ci-coala ci-docs ci-tests clean docker-clean docker-network docs polymer-build setup
