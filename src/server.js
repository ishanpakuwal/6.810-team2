const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const bodyParser = require('body-parser')

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var student = null;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
})

app.get('/students', async function callback(req, res) {
	console.log(req.body);
	student = req.body;
	res.send('Done')
	// addStudentToTable({name: name, id: id, requestType: requestType}, res);
})


app.post('/addStudent', function(req, res){
		console.log("Received");
		var name = student.name;
		var id = student.id;
		var requestType = student.requestType;
		res.send({name: name, id: id, requestType: requestType });
})

function addStudentToTable(studentRequest, response) {
	console.log("Received Here")
	
	
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})