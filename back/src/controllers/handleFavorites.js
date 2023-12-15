let myFavorites = [];


const postFav = (req, res) => {
    const { id, name, gender, species, origin, image, status } = req.body;
    const character = { id, name, gender, species, origin, image, status };
    console.log(character)
    myFavorites.push(character);    
    console.log(myFavorites)
    res.status(200).send(myFavorites);
}

const deleteFav = (req, res) => {
    const { id } = req.params;
    myFavorites = myFavorites.filter(fav => fav.id !== id)
    res.status(200).send(myFavorites);
}

module.exports = {postFav, deleteFav}