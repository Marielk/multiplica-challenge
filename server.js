//Install express server
const express = require('express');
const path = require('path');
 
const app = express();
 
// Serve only the static files form the dist directory
// Replace the '/dist/<to_your_project_name>'
app.use(express.static('./color-tool-deploy/dist/'));
 
app.get('*', function(req,res) {
  // Replace the '/dist/<to_your_project_name>/index.html'
  res.sendFile(path.join('./color-tool-deploy/dist/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);