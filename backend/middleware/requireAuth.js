const jwt = require('jsonwebtoken')
const User = require('../models/usermodel')

//async?
const requireAuth = async (req, res, next) => {

    //vertify user auth
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({ error: 'auth token required' })
    }

    //format header to remove junk
    const token = authorization.split(' ')[1]

    try {
        const { _id } = jwt.verify(token, process.env.SECRET)

        req.user = await User.findOne({ _id }).select('_id')
        next()

    } catch (error) {
        console.log(error)
        res.status(401).json({ error: 'req not authorised' })
    }
}

module.exports = requireAuth