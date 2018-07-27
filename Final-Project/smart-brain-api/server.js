const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('app is running on port 3000');
})

app.get('/', (request, response) => {
    response.send('This is working');
})


/*

/ --> response = this is working
/signin --> POST = success/fail
/register --> POST = user
/profile/:userId --> GET = user
/img --> PUT --> user update

*/