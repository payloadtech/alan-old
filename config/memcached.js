var config = require("./config.js");
var memjs = require('memjs');

var client = memjs.Client.create(config.memcached.host, {
  username: config.memcached.user,
  password: config.memcached.pass
});
