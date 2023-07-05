interface IData {
    user: string;
    password: string;
}

const data: IData = {
    user: 'beyondjs',
    password: 'B3yondJS'
}
export /*actions*//*bundle*/
class Auth {
    async login(user :string, password: string) {
        if (user !== data.user || password !== data.password) {
            return {status: true, error: "Invalid data" };
        }

        return {status: true, data: {valid: true} }

    }
}

