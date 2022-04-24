const User = require('../../app/models/User');

describe("Unit tests for User class", () => {
    
    test('Create an User object', () => {
        const  user = new User(1, "YoelVann", "Joel", "Bio", "dateCreated", "lastUpdated");

        expect(user.id).toBe(1);
        expect(user.userName).toBe("YoelVann");
        expect(user.name).toBe("Joel");
        expect(user.bio).toBe("Bio");
        expect(user.dateCreated).toBe("dateCreated");
        expect(user.lastUpdated).toBe("lastUpdated");
    });
});