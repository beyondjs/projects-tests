import {Sequelize} from "sequelize";

export /*bundle*/
class Provider {
    #bd;

    constructor() {
        this.#bd = new Sequelize('mysql://root:123456@localhost:3306/testing');
    }

    async get(id: number | boolean = false) {
        let query = `SELECT * FROM users`;
        id && (query += ` WHERE id=${id}`);

        const [results, metadata] = await this.#bd.query(query);

        return results && id ? results[0] : results;
    }

}
