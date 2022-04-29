import express from "express"

const app = express()
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/greeting', (req, res) => {
  res.json({ message: "Greeting" })
})

app.get('/goodbye', (req, res) => {
  res.json({ message: "GoodBye" })
})

app.listen(port, () => {
  console.log(`listening on *:${port}`)
})
