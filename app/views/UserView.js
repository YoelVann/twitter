const User = require('../models/User');

class UserView {
  
    static createUser(payload){
       

       if(payload === null ) {
           return {error: "payload no existe"};
       }

       return new User(payload.id, payload.userName, payload.name);
        
    }
}

module.exports = UserView;