const { sayHello } = require("./utils/helper");

exports.handler = async function (context, event) {
    let name = "Guest";
    context.callback({
        statusCode: 200,
        body: sayHello(name)
    })
};
