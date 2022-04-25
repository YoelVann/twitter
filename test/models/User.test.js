const User = require('../../app/models/User');

describe("Unit tests for User class", () => {
    
    test('Create an User object', () => {
        const  user = new User(1, "YoelVann", "Joel", "Bio");

        expect(user.id).toBe(1);
        expect(user.userName).toBe("YoelVann");
        expect(user.name).toBe("Joel");
        expect(user.bio).toBe("Bio");
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdated).not.toBeUndefined();
    });

    test('Add getters', () => {
        const  user = new User(1, "YoelVann", "Joel", "Bio");
        
        expect(user.id).toBe(1);
        expect(user.userName).toBe("YoelVann");
        expect(user.name).toBe("Joel");
        expect(user.bio).toBe("Bio");
        expect(user.getdateCreated).not.toBeUndefined();
        expect(user.getLastUpdated).not.toBeUndefined();
    });
});