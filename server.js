const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const request = require('request')
const cors= require('cors')
app.use(cors())
app.use(express.static(path.join(__dirname, 'dist', 'service-demo')))

const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e06f5b3da2be4501af757078cf03a985`
const googlePLacesQueryUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+Sydney&key=AIzaSyCAyeUu_2vuF19YfZP_7LcWCpnvWBlMBrI"
app.get('/api/hello', (req, res) => res.send('Hello World!'))

app.get('/api/news', (req, res) => {
    request.get(googlePLacesQueryUrl)
    .pipe(res);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))