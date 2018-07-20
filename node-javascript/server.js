const express = require('express');

const app = express();
app.use(express.static(__dirname + '/public'));

// app.get('/profile', (req, res) => {
//     const user = {
//         name: 'Chris',
//         hobby: 'weightlifting'
//     };
//     res.send(user)
// });
//
// app.get('/user', (req, res) => {
//     const user = {
//         name: 'Matt',
//         hobby: 'Bruh!...'
//     };
//     res.send(user)
// });
//
// app.get('/', (req, res) => {
//     res.send('Look on another page....')
// });

app.listen(3001);