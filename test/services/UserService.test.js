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
   
    test('4. Given a list a users give me the list of usernames', () => {
        const user1 = UserService.create(1, "YoelVann1", "Joel");
        const user2 = UserService.create(1, "YoelVann2", "Joel");
        const user3 = UserService.create(1, "YoelVann3", "Joel");
        const usernames = UserService.getAllUsernames([user1, user2, user3]);
        
        expect(usernames).toContain("YoelVann1");
        expect(usernames).toContain("YoelVann2");
        expect(usernames).toContain("YoelVann3");

    });
});