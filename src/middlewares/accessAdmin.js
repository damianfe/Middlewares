const admins = ['Greta', 'Ada', 'Vim', 'Tim'];
const accessAdmin = (req, res, next) => {
    const adminsLower = admins.map(admin => admin.toLowerCase())

    if (!req.query.user) {
        return res.redirect('/login')
    } else {
        if (adminsLower.includes(req.query.user.toLowerCase())) {
            next()
        } else {
            res.redirect('/no-entry')
        }
    }
}
module.exports = accessAdmin;