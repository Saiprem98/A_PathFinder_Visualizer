
const http = require('http');

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    // Set a response type of plain text for the response
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send back a response and end the connection
    res.end('Hello World!\n');
    
});

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');

var openSet = [];
var closedSet = [];
var start;
var end;

var cols = 5;
var rows =5;
var grid = new Array(cols)

function Spot(){
    this.f = 0;
    this.h = 0;
    this.g = 0;

}
function setup(){
    createCanvas(400,400);
    console.log('A*')

    for(var i =0; i<cols; i++){
        grid[i] = new Array(rows);
    }
    for(var i =0; i<cols; i++){
        for(var j =0; j<rows; j++){
            grid[i][j] = new Spot(); 
        }
    }

    start = grid[0][0];
    end = grid[cols-1][rows-1];

    openSet.push(start);
    console.log(grid); 
}

function draw() {
    background(0)
}