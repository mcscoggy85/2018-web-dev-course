const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const database = {
    users: [
        {
            id: '123',
            name: 'John',
            email: 'john@gmail.com',
            password: 'cookies',
            entries: 0,
            joined: new Date()
        },
        {
          id: '124',
          name: 'Sally',
          email: 'sally@gmail.com',
          password: 'cooky',
          entries: 0,
          joined: new Date()
      }
    ]
}

const findUsers = (request, response) => {
  const { id } = request
  let found = false;

  database.users.forEach((user) => {
    if (user.id === id) {
      found = true 
      return response.json(user)
    } 
  });
  
  if (!found) {
    response.status(400).json('user does not exist');
  }

}

const addEntries = (request, response) => {
  const { id } = request
  let found = false;
  
  database.users.forEach((user) => {
    if (user.id === id) {
      found = true
      user.entries++ 
      return response.json(user.entries)
    } 
  });
  
  if (!found) {
    response.status(400).json('user does not exist');
  }

}

app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('app is running on port 3000');
})

app.get('/', (request, response) => {
    response.json(database.users);
})

app.post('/signin', (request, response) => {
  if (request.body.email === database.users[0].email &&
  request.body.password === database.users[0].password) {
    response.json('Success!!');
  }  else {
    response.status(400).json('WRONG!!!!....Try again mf');
  }

})

app.post('/register', (request, response) => {
  const { email, name, password } = request.body
  database.users.push({
    id: '125',
    name: name,
    email: email,
    password: password,
    entries: 0,
    joined: new Date()
  });
  response.json(database.users[database.users.length -1]);
})

app.get('/profile/:id', (request, response) => {
  findUsers(request.params, response);
});

app.put('/image', (request, response) => {
  addEntries(request.body, response)
})


/*

/ --> response = this is working
/signin --> POST = success/fail
/register --> POST = user
/profile/:userId --> GET = user
/img --> PUT --> user update

*/