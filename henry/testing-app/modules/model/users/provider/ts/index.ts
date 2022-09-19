export /*bundle*/
class StaticProvider {
    users = new Map([
        [1, {
            id: 1,
            name: 'Jean',
            lastname: 'Contreras'
        }],
        [2, {
            id: 2,
            name: 'Dayan',
            lastname: 'Gonzalez'
        }],
        [3, {
            id: 3,
            name: 'Juan',
            lastname: 'Guidi'
        }]
    ]);

    get(id) {
        return !this.users.has(id) ? 'User not exist' : this.users.get(id);
    }

    list() {
        const entries = [];
        this.users.forEach(user => entries.push(user));
        return entries;
    }
}