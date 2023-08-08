run:
	docker-compose up -d
build:
	docker-compose build
test:
	docker-compose -f docker-compose-test.yml build
	docker-compose -f docker-compose-test.yml up --abort-on-container-exit

kill:
	-docker-compose down