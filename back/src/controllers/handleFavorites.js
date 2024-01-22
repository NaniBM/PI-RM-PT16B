const { Favorite, User } = require("../DB_connection");


const postFav = async (req, res) => {

    const { id, name, gender, species, origin, image, status, userID } = req.body;
    if (!id || !name || !origin || !status || !image || !species || !gender)
    return res.status(401).send({message: "Faltan datos"});
    try {
        const [newFav] = await Favorite.findOrCreate(
            {
                where: { id },
                defaults: {
                    name,
                    origin,
                    status,
                    image,
                    species,
                    gender
                },
            });
        const favs = await Favorite.findAll();

        // const user = await User.findOne(
        //     {where: {id: userID}}
        // )
        // // newFav.addUsers(user)
        // user.addFavorites(newFav)
        // const user = await User.findOne(
        //     {
        //         where: {id: userID},
        //         include: {
        //             model: Favorite, as: "favs"
        //         }
        //     },
        // )
        return res.json(favs);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const deleteFav = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Favorite.destroy({ where: { id } });
        //Si no se borro ningun fav:
        if (deleted === 0) return res.status(404).send("Id no valido");
    
        const favs = await Favorite.findAll();
        return res.json(favs);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
}

/*---------------------------------*/
// let myFavorites = [];


// const postFav = (req, res) => {
//     const { id, name, gender, species, origin, image, status } = req.body;
//     const character = { id, name, gender, species, origin, image, status };
//     console.log(character)
//     myFavorites.push(character);    
//     console.log(myFavorites)
//     res.status(200).send(myFavorites);
// }

// const deleteFav = (req, res) => {
//     const { id } = req.params;
//     myFavorites = myFavorites.filter(fav => fav.id !== id)
//     res.status(200).send(myFavorites);
// }

module.exports = {postFav, deleteFav}
