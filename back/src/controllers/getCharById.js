const axios = require("axios");
const API_KEY = "henrystaff";

// Express

const getCharById = (req, res) => {
  const { id } = req.params;
  axios(`https://rym2.up.railway.app/api/character/${id}?key=${API_KEY}`)
    .then(({ data }) => {
      if (!data) {
        res.status(404).send('Not found')
      } else {
        const { name, gender, species, origin, image, status } = data;
        const character = { id, name, gender, species, origin, image, status };
        // res.writeHead(200, { "Content-type": "application/json" });
        // return res.end(JSON.stringify(character));
  
        res.json(character);
        // res.status(200).send(character);
      }
    })
    .catch((err) => {
      // res.writeHead(500, { "Content-type ": "text/plain" });
      // return res.end(err.message);
      res.status(500).send(err.message)
    });
}


//
// const getCharById = (req, res) => {
//   const { id } = req.params;
//   const URL = `https://rym2.up.railway.app/api/character/${id}?key=${API_KEY}`;
//   let char = {};
//   axios(URL)
//     .then(({ data }) => {
//       char = {
//         id: data?.id,
//         name: data?.name,
//         gender: data?.gender,
//         species: data?.species,
//         origin: data?.origin?.name,
//         image: data?.image,
//         status: data?.status,
//       };
//       if (char.name) {
//         res.json(char);
//       } else {
//         res.status(404).send("Not Found");
//       }
//     })
//     .catch((error) => res.status(500).send(error.message));
// };

/* -------------- */
// Node js puro
// const getCharById = (res, id) => {

  // axios(`https://rym2.up.railway.app/api/character/${id}?key=${API_KEY}`)
  //   .then(({ data }) => {
  //     const { name, gender, species, origin, image, status } = data;
  //     const character = { id, name, gender, species, origin, image, status };
  //     res.writeHead(200, { "Content-type": "application/json" });
  //     return res.end(JSON.stringify(character));
  //   })
  //   .catch((err) => {
  //     res.writeHead(500, { "Content-type ": "text/plain" });
  //     return res.end(err.message);
  //   });
// };

module.exports = getCharById;