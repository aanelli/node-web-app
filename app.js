const express = require('express')
const app = express()
//adding comment so i can push something
app.get('/', function (req, res) {
  res.send('Hello World!')
})

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})
