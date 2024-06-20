const jwt = require("jsonwebtoken");
const secret = "MkVn$$28105"
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