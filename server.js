import app from "./src/app.js";

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
// //
// // We can now run the server with:
// // $ node server.js
// // Server listening on port 3000
// //
// // And test it with:
// // $ curl localhost:3000
// // {"status":true,"message":"Hello world, from /"}
// //
// // We can also test it with:
// // $ curl localhost:3000/api/echo
// // {"status":true,"message":"Hello world, from the API!"}
// //
