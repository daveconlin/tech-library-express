module.exports = {
    getCheckout: (req, res) => {
        let query = "SELECT * FROM `users`"; // query database to get all the players

        // execute query
        connection.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('checkout.ejs', {
                title: 'Checkout Book'
                ,users: result
            });
        });
    },
};
