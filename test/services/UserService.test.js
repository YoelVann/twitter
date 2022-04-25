const UserService = require('../../app/services/UserService');

describe("Tests for UserService", () => {
    test('1. create a new user using the User Service', () => {
        const user = UserService.create(1, "YoelVann", "Joel");

        expect(user.userName).toBe("YoelVann");
        expect(user.name).toBe("Joel");
        expect(user.id).toBe(1);
        expect(user.bio).not.toBeUndefined();
    });
   
    test('2. Get all user data in a list', () => {
        const user = UserService.create(1, "YoelVann", "Joel");
        const userInfoInList = UserService.getInfo(user);

        expect(userInfoInList[0]).toBe(1);
        expect(userInfoInList[1]).toBe("YoelVann");
        expect(userInfoInList[2]).toBe("Joel");
        expect(userInfoInList[3]).toBe("Sin bio");
    });

    test('3. Update username', () => {
        const user = UserService.create(1, "YoelVann", "Joel");
        UserService.updateUserUsername(user, "Mustang");
        
        expect(user.userName).toBe("Mustang");
    });
});