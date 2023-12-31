// this file was generated by serverless-auto-swagger
module.exports = {
  "swagger": "2.0",
  "info": {
    "title": "reto-rimac",
    "version": "1"
  },
  "paths": {
    "/planet": {
      "get": {
        "summary": "app",
        "description": "Show all planets from database",
        "operationId": "app.get./planet",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          },
          "400": {
            "description": "400 response"
          }
        }
      },
      "post": {
        "summary": "app",
        "description": "Save a planet to database",
        "operationId": "app.post./planet/{id}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "Body required in the request",
            "required": true,
            "schema": {
              "$ref": "#/definitions/Planet"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "200 response"
          },
          "400": {
            "description": "400 response"
          }
        }
      }
    },
    "/planet/{id}": {
      "get": {
        "summary": "app",
        "description": "Show a planet from database",
        "operationId": "app.get./planet/{id}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "200 response"
          },
          "400": {
            "description": "400 response"
          }
        }
      }
    },
    "/swapi/planet/{id}": {
      "get": {
        "summary": "app",
        "description": "Show a planet from swapi",
        "operationId": "app.get./planet/{id}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "200 response"
          },
          "400": {
            "description": "400 response"
          }
        }
      }
    },
    "/dashboard/create-from-swapi/{id}": {
      "get": {
        "summary": "app",
        "description": "Get a planet from swapi and save it to database",
        "operationId": "app.get./planet/{id}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "200 response"
          },
          "400": {
            "description": "400 response"
          }
        }
      }
    },
  },
  "definitions": {
    "Planet": {
      "properties": {
        "id": {
          "title": "Planet.id",
          "type": "string"
        },
        "nombre": {
          "title": "Planet.nombre",
          "type": "string"
        },
        "periodo_rotacion": {
          "title": "Planet.periodo_rotacion",
          "type": "string"
        },
        "periodo_orbita": {
          "title": "Planet.periodo_orbita",
          "type": "string"
        },
        "diametro": {
          "title": "Planet.diametro",
          "type": "string"
        },
        "clima": {
          "title": "Planet.clima",
          "type": "string"
        },
        "gravedad": {
          "title": "Planet.gravedad",
          "type": "string"
        },
        "terreno": {
          "title": "Planet.terreno",
          "type": "string"
        },
        "superficie_agua": {
          "title": "Planet.superficie_agua",
          "type": "string"
        },
        "poblacion": {
          "title": "Planet.poblacion",
          "type": "string"
        },
        "url": {
          "title": "Planet.url",
          "type": "string"
        },
        "f_creacion": {
          "title": "Planet.f_creacion",
          "type": "string"
        },
        "f_edicion": {
          "title": "Planet.f_edicion",
          "type": "string"
        },
        "swapi_id": {
          "title": "Planet.swapi_id",
          "type": "string"
        }
      },
      "required": [
        "nombre",
        "url"
      ],
      "additionalProperties": false,
      "title": "Planet",
      "type": "object"
    }
  },
  "securityDefinitions": {},
  "basePath": "/dev"
};