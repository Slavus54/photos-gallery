const app = require('express')()
const PORT = 4000 || process.env.PORT

app.get('/api', (req, res) => {
    const data = [
        {
            name: 'Atmostas Baltia',
            author: 'Victor Zemgals'
        }
    ]

    res.send(data)
})

app.listen(PORT, () => console.log(`Server started on ${PORT} port`))