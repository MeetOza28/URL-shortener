const jwt = require("jsonwebtoken");
const secret = "hbvfeustq8236r298q3qdhw1920-1-ie2edhwqdh"
// const sessionIdToUserMap = new Map();

function setUser(user) {
    // sessionIdToUserMap.set(id, user);
    // const payload = {
    //     ...user,
    // };
    return jwt.sign(
        {
            _id: user._id,
            email: user.email,
            role: user.role,
        },
        secret
    );
}

function getUser(token) {
    if(!token) return null;
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return null;
    }
}

module.exports = {
    setUser,
    getUser,
};