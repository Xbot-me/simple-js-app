const express = require('express');
const cors = require('cors');

const app = express();

const port = 8000;

app.use(cors());

app.use(express.json());

app.get('/api', (req,res) => {
	res.json({message: 'Hello from the backend!'});
});

app.post('/api/echo', (req,res) => {
	
	res.json({message: req.body.message});
});

app.listen(port,() => {
	console.log(`Server listening at http://localhost:${port}`);
});

module.exports =app;
