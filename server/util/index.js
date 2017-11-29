"use strict";

module.exports = function(imports) {

  // let fs = require("fs");
    let config = imports.config;
    let Promise = imports.modules.Promise;

    let util = {};

    util.handler = function(generator) {
        let func = Promise.coroutine(generator);
        return function (req, res, next) {
            return func
                .apply(null, arguments)
                .catch(function(err) {
                    console.error(err);
                    res.status(500).end("Internal server error");
                });
        };
    };

    return util;
}