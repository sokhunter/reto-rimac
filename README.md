# reto-rimac
Get and save planets with serverless, nodeJs, express, typescript and mysql

## Configuration
### Create database
Create a dabatase with the next table
```
| id | nombre    | diametro | periodo_rotacion | periodo_orbita | clima | gravedad   | terreno | superficie_agua | poblacion | url                                   | f_creacion                  | f_edicion                   |
| -- | --------- |----------|------------------|----------------|-------|------------|---------|-----------------|-----------|---------------------------------------|-----------------------------|-----------------------------|
| 1  | Alderaan  | 10465    | 23               | 360            | arid  | 1 standard | desert  | 40              | 200000    | https://swapi.py4e.com/api/planets/2/ | 2014-12-10T11:35:48.479000Z | 2014-12-20T20:58:18.420000Z |
| 2  | Tatooine  | 12500    | 24               | 304            | arid  | 1 standard | desert  | 1               | 20000000  | https://swapi.py4e.com/api/planets/1/ | 2014-12-09T13:50:49.641000Z | 2014-12-20T20:58:18.411000Z |
```
### Install dependencies 
```
npm install
```
### Environment
Create the environment file (.env) similar to .env.example
```
MYSQL_DB_HOST=
MYSQL_DB_USER=
MYSQL_DB_PASSWORD= 
MYSQL_DB_PORT=
MYSQL_DB_DATABASE=
MYSQL_DB_CONNECTION_LIMIT=

SWAPI_URL=https://swapi.py4e.com/api/
```

## Run test
```
npm run test
```

## Local deployment
### Transpile typescript to javascript 
```
npm run build
```

### Run serverless offline
```
sls offline start
```

You should see output similar to:
```
Running "serverless" from node_modules

Starting Offline at stage dev (eu-west-1)

Offline [http for lambda] listening on http://localhost:3002
Function names exposed for local invocation by aws-sdk:
           * app-swapi: app-swapi-dev-app-swapi
           * swaggerUI: app-swapi-dev-swagger-ui
           * swaggerJSON: app-swapi-dev-swagger-json

   ┌───────────────────────────────────────────────────────────────────────────────┐
   │                                                                               │
   │   GET | http://localhost:3000/dev/swagger                                     │
   │   POST | http://localhost:3000/2015-03-31/functions/swaggerUI/invocations     │
   │   GET | http://localhost:3000/dev/swagger.json                                │
   │   POST | http://localhost:3000/2015-03-31/functions/swaggerJSON/invocations   │
   │   ANY | http://localhost:3000/dev                                             │
   │   POST | http://localhost:3000/2015-03-31/functions/app/invocations           │
   │   ANY | http://localhost:3000/dev/{proxy*}                                    │
   │   POST | http://localhost:3000/2015-03-31/functions/app/invocations           │
   │                                                                               │
   └───────────────────────────────────────────────────────────────────────────────┘

Server ready: http://localhost:3000 🚀
```

### Consult the APIs
There are 5 APIs that you can use
```
GET/planet
POST/planet
GET/planet/{id}
GET/swapi/planet/{id}
GET/dashboard/create-from-swapi/{id}
```
You can see more about this APIs in the Swagger documentation

## Swagger documentation
After to execute `sls offline start` go to the link:
```
http://localhost:3000/dev/swagger
```
You should see a page similar to the image:

![Swagger documentarion](public/swagger.png?raw=true)



