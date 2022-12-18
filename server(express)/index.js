const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.post('/add', (req, res) => {
	res.status(200).json({ ok: true })
	res.json(req.body);
})


app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})