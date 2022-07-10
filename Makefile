SHELL := /bin/bash # Use bash syntax

back:
	docker-compose run --rm backend bash

front:
	docker exec -it  main_frontend_1 bash

nt:
	docker-compose run test bash

up:
	docker-compose up

down:
	docker-compose down



