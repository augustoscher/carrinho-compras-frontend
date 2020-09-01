.PHONY: help run stop rebuild test

.DEFAULT: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36mmake %-20s\033[0m\n\t%s\n", $$1, $$2}'

run:  ## starts app
	yarn start

test:  ## run tests
	yarn test
