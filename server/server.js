import express from 'express';
import router from './routes/teams.js';
const app = express()

app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))
app.use("/teams",router)

// app.get('/', (req, res) => {
//     res.status(200).send('testing')
// })

const PORT = process.env.PORT || 3001
    
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})