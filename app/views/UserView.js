const User = require('../models/User');

class UserView {
  
    static createUser(payload){
       

       if(payload === null ) {
           return {error: "payload no existegit"};
       }

       if(payload.id === null || payload.name === null || payload.userName === null){
           return { error: "necesitan tener un valor válido" }
       }
       
       if(payload.id === undefined || payload.name === undefined || payload.userName === undefined){
           return { error: "necesitan tener un valor válido" }
       }

       return new User(payload.id, payload.userName, payload.name);
        
    }
}

module.exports = UserView;