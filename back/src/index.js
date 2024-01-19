const server = require('./app')
const PORT = 3001;
const { database } = require('./DB_connection');


database.sync({force: true}).then(()=>{
   server.listen(PORT, () => {
      console.log('Server raised in port: ' + PORT);
   });
})


/* --------------------------- */
// Node js puro
// const http = require('http');
// // const data = require('./utils/data')
// const getCharById =  require('./controllers/getCharById')

// const PORT = 3001

// http.createServer((req, res) => { // request || response 
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     const { url } = req
//     if(url.includes("/rickandmorty/character")){
//         const id = url.split('/').at(-1);
//         // const id = Number(url.split('/').pop())

//         // Web Server homework
//         // const  characterFound = data.find((character)=>character.id === Number(id))
//         // if (characterFound ) {
//         //     res.writeHead(200, {"Content-Type": "application./json"})
//         //     return res.end(JSON.stringify(characterFound))
//         // }
//         // res.writeHead(404, {'Content-Type': 'text/plain'})
//         // return res.end("Character not found")

//         // Promises Homework
//         getCharById(res, id)
//     }
// }).listen(PORT, () => {
//     console.log(`Server listening in port ${PORT}`)
// })