const fs = require('fs');

module.exports = {
  log: function(action) {
    fs.appendFileSync('./logs.txt', `${action}
`);
  }
};