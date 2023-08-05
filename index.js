const port = 3000;
const http = require("http");
const fs = require("fs");

const routeMap = {
	"/": "index.html",
	"/about": "about.html",
	"/contact-me": "contact-me.html",
};

server = http.createServer((request, response) => {
	response.writeHead(200, {
		"Content-Type": "text/html",
	});

	//Check first if the requested url exists then excutes fs.readfile()
	//If there exists no requested url then it runs response.end which runs fs.readFileSync
	if (routeMap[request.url]) {
		fs.readFile(routeMap[request.url], (error, data) => {
			response.write(data);
			response.end();
		});
	} else {
		response.end(fs.readFileSync("404.html"));
	}
});

// Start the server
server.listen(port);
console.log(`The server is listening on port: ${port}`);
