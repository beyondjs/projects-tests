export /*bundle*/ function theFunction() {
    console.log('the function');
    return true;
}

interface ITheArrowFunctionResponse {
    response: boolean
}

export /*bundle*/ const theArrowFunction = (): ITheArrowFunctionResponse => {
    console.log('the arrow function');
    return {response: true};
}
