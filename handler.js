const { sayHello } = require("./utils/helper");

module.exports = async function (context, event) {
    let name = event.body ? event.body.toString() : "Guest";
    return {
        statusCode: 200,
        body: sayHello(name)
    };
};
