try{
    throw exampleFunction();
}catch(error) {
    console.error(error);
}
const exampleFunction = () => {
    return true;
}
const sum = (a, b) => {
    return a+b;
}
exports.sum = sum;
exports.exampleFunction = exampleFunction