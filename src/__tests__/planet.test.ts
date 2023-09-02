import app from '../app';
import request from "supertest";

describe('show a planet from database - GET/planet/:id', () => {

  describe('given a valid id', () => {
    test('should respond with a 200 status code', async () => {
      const res = await request(app).get('/planet/5').send();
      expect(res.statusCode).toBe(200);
    })

    test('should respond with an Object', async () => {
      const res = await request(app).get('/planet/5').send();
      expect(res.body).toBeInstanceOf(Object);
    })
  })

  describe('given an invalid id', () => {
    test('should respond with a 500 status code', async () => {
      const res = await request(app).get('/planet/stringId').send();
      expect(res.statusCode).toBe(500);
    })
  })

})

describe('show all planets from database - GET/planet', () => {
  test('should respond with a 200 status code', async () => {
    const res = await request(app).get('/planet').send();
    expect(res.statusCode).toBe(200);
  })

  test('should respond with an array', async () => {
    const res = await request(app).get('/planet').send();
    expect(res.body.planets).toBeInstanceOf(Array);
  })
})

describe('save a planet - POST/planet', () => {
  describe('given all the fields', () => {
    const newPlanet = {
      nombre: "Mon Cala",
      periodo_rotacion: "21",
      periodo_orbita: "398",
      diametro: "11030",
      clima: "temperate",
      gravedad: "1",
      terreno: "oceans, reefs, islands",
      superficie_agua: "100",
      poblacion: "27000000000",
      url: "https://swapi.py4e.com/api/planets/31/",
      f_creacion: "2014-12-18T11:07:01.792000Z",
      f_edicion: "2014-12-20T20:58:18.471000Z"
    }

    test('should respond with a 200 status code', async () => {
      const res = await request(app).post('/planet').send(newPlanet);
      expect(res.statusCode).toBe(200);
    })

    test('should have a content-type: application/json in header', async () => {
      const res = await request(app).post('/planet').send(newPlanet);
      expect(res.headers['content-type']).toEqual(expect.stringContaining("json"));
    })

    test('should respond including the planet ID', async () => {
      const res = await request(app).post('/planet').send(newPlanet);
      expect(res.body.planet.id).toBeDefined();
    })
  })

  describe('when the required data is missing (nombre, url)', () => {
    test('should respond with a 500 status code', async () => {
      const fields = [
        {},
        {
          nombre: '',
          url: 'https://es.wikipedia.org/wiki/Tierra'
        },
        {
          nombre: 'Tierra',
          url: ''
        },
        {
          nombre: 'Tierra'
        },
        {
          url: 'https://es.wikipedia.org/wiki/Tierra'
        },
        {
          nombre: "",
          periodo_rotacion: "34",
          periodo_orbita: "365",
          diametro: "12742",
          clima: "temperate",
          gravedad: "1",
          terreno: "grasslands, mountains",
          superficie_agua: "70",
          poblacion: "7753000",
          url: ""
        }
      ]
      for (const field of fields) {
        const res = await request(app).post('/planet').send(field);
        expect(res.status).toBe(500);
      }
    })
  })


  describe('when created date or updated date is missing', () => {
    const fields = [
      {
        nombre: 'Tierra',
        url: 'https://es.wikipedia.org/wiki/Tierra'
      },
      {
        nombre: 'Tierra',
        url: 'https://es.wikipedia.org/wiki/Tierra',
        f_creacion: "2014-12-09T13:50:49.641000Z"
      },
      {
        nombre: 'Tierra',
        url: 'https://es.wikipedia.org/wiki/Tierra',
        f_edicion: "2014-12-09T13:50:49.641000Z"
      }
    ]

    test('should respond with a 200 status code', async () => {
      for (const field of fields) {
        const res = await request(app).post('/planet').send(field);
        expect(res.status).toBe(200);
      }
    })

    test('should complete the fields created date and updated date', async () => {
      for (const field of fields) {
        const res = await request(app).post('/planet').send(field);
        expect(res.body.planet.f_creacion).toBeDefined();
        expect(res.body.planet.f_edicion).toBeDefined();
      }
    })
  })
})

describe('get a planet from swapi - GET/swapi/planet/:id', () => {
  describe('given a valid id', () => {
    test('should respond with a 200 status code', async () => {
      const res = await request(app).get('/swapi/planet/1').send();
      expect(res.statusCode).toBe(200);
    });

    test('should respond with an Object', async () => {
      const res = await request(app).get('/swapi/planet/1').send();
      expect(res.body).toBeInstanceOf(Object);
    })
  })

  describe('given an invalid id', () => {
    test('should respond with a 500 status code', async () => {
      const res = await request(app).get(`/swapi/planet/stringID`);
      expect(res.status).toBe(500);
    })
  })
})

describe('get a planet from swapi and save it in the database - GET/dashboard/create-from-swapi/:id', () => {
  describe('given a valid id', () => {
    test('should respond with a 200 status code', async () => {
      const res = await request(app).get('/dashboard/create-from-swapi/1').send();
      expect(res.statusCode).toBe(200);
    });
  })

  describe('given an invalid id', () => {
    test('should respond with a 500 status code', async () => {
      const res = await request(app).get(`/dashboard/create-from-swapi/stringID`);
      expect(res.statusCode).toBe(500);
    });
  })
})
