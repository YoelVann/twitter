const UserService = require('../../app/services/UserService');

describe("Tests for UserService", () => {
    test('1. create a new user using the User Service', () => {
        const user = UserService.create(1, "YoelVann", "Joel");

        expect(user.userName).toBe("YoelVann");
        expect(user.name).toBe("Joel");
        expect(user.id).toBe(1);
        expect(user.bio).not.toBeUndefined();
    });
});