const { User } = require("../DB_connection");

const login = async (req, res) => {
    try {
        const { email, password } = req.query;
        if(!email || !password ) return res.status(400).json(
            {message: "Faltan datos"}
        )
        const user = await User.findOne({where: { email }})
        if (!user) return res.status(404).json({message: 'Usuario no encontrado'})
        if (user.password !== password) return res.status(403).send({message: "Contraseña incorrecta"});
        return res.json({ access: true });
    } catch (error) {
        res.status(500).send({message: error.message});
    }
}

module.exports = login;


// const login = (req, res) => {
//     const { email, password } = req.query;
//     const user = users.find(
//         user => user.email === email && user.password === password
//     )
//     if (user) return res.status(200).send({access: true})
//     res.status(200).send({access: false})
// }
