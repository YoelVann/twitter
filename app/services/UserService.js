const User = require('./../../app/models/User');

class UserService {
    static create(id, userName, name){
        return  new User(id, userName, name, "Sin bio");
    }

    static getInfo(user){
        return [user.id, user.userName, user.name, user.bio];
    }

    static updateUserUsername(user, newUsername){
        return user.setUserName = newUsername;
    }
}

module.exports = UserService;