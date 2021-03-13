
var objetoDondeCargo = require("cool-ascii-faces");

var express = require("express");    //devuelve funcion constructora para construir apps

var app = express();
var port = 10000;
app.get("/cool", (request,response) => {
	response.send(objetoDondeCargo());
	console.log("New request has arrived");
});

app.listen(port, () => {
	console.log("Server ready listenting on port" +port);
} );
//console.log(objetoDondeCargo());
