const movies = [{"title": "Jaws", "quality": "good"}, {"title": "Terminator 2: Judgement Day", "quality": "good"}, {"title": "Avengers: Endgame", "quality": "alright"} ]

module.exports = {
    getData: (req, res) => {
        res.status(200).send(movies)
    }
}