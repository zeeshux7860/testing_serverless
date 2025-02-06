const { sayHello } = require("./utils/helper");

exports.handler = async function (context, event) {
    let name = "Guest";
    context.logger.infoWith('Adding to now', {
        // 'request': request,
        // 'to': now.format()
        "to" : "testing"
    });
    context.callback({
        statusCode: 200,
        body: sayHello(name)
    })
};


