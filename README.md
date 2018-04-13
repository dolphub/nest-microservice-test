## NestJS Microservice Example

### Docker
Make sure you have docker and docker-compose installed

Run the following command to start the redis container
```
docker-compose up
```

### Dependencies
Go into each service folder and run the following command
`npm install` or `yarn install`

### Start Microservices

Open two terminals and run 
```
yarn start
```
or
```
npm start
```
in both `Service1` and `Service2` directories

### How to test

###### With Browser
Open your browser and navigate to the Serivce 2's api `math` api i.e, `http://localhost:3000/math`

###### With Curl
Using curl you can test the api and microservice communication with `curl http://localhost:3000/math`

## Interesting Finds...
It seems when you spin up service1 and service2, both listening on the same pattern, whichever one was connected first is the one that publishes first... but having both services up doesn't mutate the data in any way, just an implicit understanding of which service is actually responding.
