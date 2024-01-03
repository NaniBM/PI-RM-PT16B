const server = require('../src/app');
const session = require('supertest');
const agent = session(server);

describe("Test de RUTAS", () => {
    describe("GET /rickandmorty/character/:id", () => {
        it("Responde con status: 200", async () => {
            await agent.get('/rickandmorty/character/1').expect(200);
        })

        it(
            'Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"',
            async () => {
                const { body } = await agent.get('/rickandmorty/character/1')
                // const expectedProperties = ["id", "name", "species", "gender", "status", "origin", "image"];  
                // expectedProperties.forEach(property => {
                //     expect(body).toHaveProperty(property);
                // });
                expect(body).toHaveProperty(
                    "id"
                    &&  "name"
                    &&  "species"
                    &&  "gender"
                    &&  "status"
                    && "origin"
                    && "image"
                )
            }
        )

        it('Si hay un error responde con status: 404', async () => {
            await agent.get('/rickandmorty/character/1000').expect(404);
        })

        // it("Si hay un error responde con status: 500 o 404", async () => {
        //     const response = await agent.get("/rickandmorty/character/1000");
        //     expect([404, 500]).toContain(response.status);
        //   });

    })

    describe("GET /rickandmorty/login", () => {
        it("Login correcto devuelve una propiedad access=true", async () => {
            const { body } = await agent.get(
                '/rickandmorty/login/?email=yanina@mail.com&password=123456'
            )
            expect(body.access).toEqual(true)
        })
    
        it("Login incorrecto devuelve una propiedad access=false", async () => {
            const { body } = await agent.get(
                '/rickandmorty/login/?email=yanina@mail.com&password=12345'
            )
            expect(body.access).toBe(false)
        })
    })

    const obj = {
        id: 1,
        name: 'Rick'
    }
    const obj2 = {
        id: 2,
        name: 'Morty'
    }

    describe("POST /rickandmorty/fav", () => {
        it(
            "Lo que se envia por body debe ser devuelto en un arreglo",
            async () => {
                const { body } = await agent.post("/rickandmorty/fav").send(obj)
                expect(body).toEqual([obj])
            }
        )

        it(
            "Lo que se envia por body debe ser devuelto en un arreglo",
            async () => {
                const { body } = await agent.post("/rickandmorty/fav").send(obj2)
                expect(body).toContainEqual(obj, obj2)
            }
        )
    })

    describe("DELETE /rickandmorty/fav/:id", () => {
        it("Si el id no existe, devolver la lista sin modificar", async () => {
            const { body } = await agent.delete("/rickandmorty/fav/3")
            expect(body).toContainEqual(obj, obj2)
        })

        it("Si el id existe, devolver la lista sin el objeto que fue removido", async () => {
            const { body } = await agent.delete("/rickandmorty/fav/1")
            expect(body).toContainEqual(obj2)
        })
    })
})

