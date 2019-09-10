#!/usr/bin/env node

require("../lib/index").createAppGen({
    args: process.argv.slice(2)
}).run().catch(error => {
    console.error(error);
});
