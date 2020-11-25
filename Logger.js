const path = require("path");
const bunyan = require("bunyan");

const level = process.env.NODE_LOGGIN_LEVEL || "info";

const log = bunyan.createLogger({
    name: "ReqLog",
    streams: [
        {
            level,
            stream : process.stdout
        },
        {
            path: path.resolve("server.log")
        }
    ]
})

module.exports = log;