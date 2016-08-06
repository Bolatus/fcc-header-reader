var express = require('express');
var app = express();


var getFirstNumPos = function(d){
  var da = d.split('');
  for (var i=0;i<da.length;i++){
    if (!isNaN(da[i])){
      return i;
    }
  }
  return 0;
}
app.get('/', function (req, res) {
  var ob = {
    "ipaddress":req.ip.substring(getFirstNumPos(req.ip)),
    "language":req.get('Accept-Language').substring(0,req.get('Accept-Language').indexOf(',')),
    "software":req.get('user-agent').substring(req.get('user-agent').indexOf('(')+1,req.get('user-agent').indexOf(')'))
  }
  res.send(ob);
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port '+process.env.PORT);
});
