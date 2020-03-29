const fs = require('fs');
module.exports = (app) => {
//requires and uses routes
  fs.readdirSync(__dirname+'/routes/').forEach(function(file) {
    if (file === "router.js" || file.substr(file.lastIndexOf('.') + 1) !== 'js')
      return;
   let name = file.substr(0, file.indexOf('.'));
    app.use(`/api/v1/${name}`,require('./routes/' + name));
  });

};
