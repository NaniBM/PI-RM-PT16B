
const users = require('../utils/users');

const login = (req, res) => {
    const { email, password } = req.query;
    const user = users.find(
        user => user.email === email && user.password === password
    )
    if (user) return res.status(200).send({access: true})
    res.status(200).send({access: false})
}

module.exports = login;