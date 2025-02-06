const { sayHello } = require("./utils/helper");

exports.handler = async function (context, event) {
    let name = event.body ? event.body.toString() : "Guest";
    context.logger.infoWith('Adding to now', {
        'request': request,
        'to': now.format()
    });
    context.callback({
        statusCode: 200,
        body: sayHello(name)
    })
};
