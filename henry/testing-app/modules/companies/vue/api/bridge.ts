export class CompeniesBridge {
    async fetch() {
        await new Promise(resolve => setTimeout(resolve, 2000));

        return [{
            id: 1,
            name: 'Pepsi'
        }, {
            id: 2,
            name: 'Coca Cola'
        }];
    }
}
