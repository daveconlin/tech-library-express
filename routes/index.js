module.exports = {
    getHomePage: (req, res) => {
        let query = "SELECT * FROM `books` ORDER BY author ASC"; // query database to get all the players

        // execute query
        connection.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('index.ejs', {
                title: 'View Book'
                ,books: result
            });
        });
    },
};
