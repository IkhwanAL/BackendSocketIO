function authLogin(req, res, next) {
    if (req.body === null) {
        return res.status(400).json({
            message: 'Form Body Cannot Empty'
        });
    }
    next();
}

module.exports = { authLogin };