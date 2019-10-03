module.exports = {
    getHomePage: (req, res) => {
        let query = "SELECT * FROM `books` LEFT JOIN `join_books_users` on join_books_users.book = books.id LEFT JOIN `users` ON join_books_users.user = users.id ORDER BY books.author ASC"; // query database to get all the players

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
