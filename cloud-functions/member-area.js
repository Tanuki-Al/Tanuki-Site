exports.handler = functions(event, context, callback) {
    callback(null, {
        statusCode: 200,
        body: "Welcome to that Tanuki Member Area"
    })
}