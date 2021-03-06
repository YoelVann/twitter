const UserView = require('../../app/views/UserView');

describe("Test for UserView class", () => {

    test('Return an error object when try to create a new user with an null payload', () => {
        
        const payload = null;
        const result = UserView.createUser(payload);
        
        expect(result.error).toMatch(/payload no existe/);
    });
    
    test('Return an error object when try to create a new user with a payload with invalid properties', () => {
        
        const payload = {userName: null, name: 12, id: "id"};
        const result = UserView.createUser(payload);

        expect(result.error).toMatch(/necesitan tener un valor válido/);
    });
  
    test('Return an error object when try to create a new user with a payload with missing properties', () => {
        
        const payload = {userName: "username"};
        const result = UserView.createUser(payload);

        expect(result.error).toMatch(/necesitan tener un valor válido/);
    });
  
    test('Create a user by a given valid payload', () => {
        
        const payload = {userName: "userName", id: 1, name: "name"};
        const result = UserView.createUser(payload);

        expect(result.name).toBe("name");
        expect(result.userName).toBe("userName");
        expect(result.id).toBe(1);
    });

});