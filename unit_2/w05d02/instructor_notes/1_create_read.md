# CRUD App with Mongoose - Create and Read


## Lesson Objectives

Build the new, create, index, and show routes of the fruits app, incorporating MongoDB as the database

## Review the flow of technology

![](https://imgur.com/qIlPRZV.png)

## Initialize a directory

1. Create a directory for the app in `student_examples` and `cd` into it
1. `npm init`
1. `npm install express`
1. `touch server.js`
1. Edit package.json to have `"main": "server.js",`

## Start express

```javascript
const express = require('express');
const app = express();

app.listen(3000, ()=>{
    console.log('listening');
});
```

## Create New Route

```javascript
app.get('/fruits/new', (req, res)=>{
    res.send('new');
});
```

1. `mkdir views`
1. `npm install ejs`
1. `touch views/new.ejs`
1. Create the view

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <h1>New Fruit page</h1>
        <form action="/fruits" method="POST">
            Name: <input type="text" name="name" /><br/>
            Color: <input type="text" name="color" /><br/>
            Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br/>
            <input type="submit" value="Create Fruit"/>
        </form>
    </body>
</html>
```

Render the view

```javascript
app.get('/fruits/new', (req, res)=>{
    res.render('new.ejs');
});
```

## Create Create Route

```javascript
app.post('/fruits/', (req, res)=>{
    res.send('received');
});
```

1. Use express.urlencoded() in server.js:

```javascript
app.use(express.urlencoded({extended: true}));
```

Check to see if req.body works:

```javascript
app.post('/fruits/', (req, res)=>{
    res.send(req.body);
});
```

Format data properly

```javascript
app.post('/fruits/', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    res.send(req.body);
});
```

## Connect Express to Mongo

1. `npm install mongoose`
1. Inside `server.js`:

```javascript
const mongoose = require('mongoose');

//... and then farther down the file
mongoose.connect('mongodb://localhost:27017/basiccrud', () => {
  console.log('The connection with mongod is established')
})
```

## Create Fruits Model

1. `mkdir models`
1. `touch models/fruits.js`
1. Create the fruit schema

```javascript
const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    color:  { type: String, required: true },
    readyToEat: Boolean
});

const fruitCollection = mongoose.model('Fruit', fruitSchema);

module.exports = fruitCollection;
```

## Have Create Route Create data in MongoDB

Inside server.js:

```javascript
const Fruit = require('./models/fruits.js');
//... and then farther down the file
app.post('/fruits/', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    Fruit.create(req.body, (error, createdFruit)=>{
        res.send(createdFruit);
    });
});
```

## Create Index Route

```javascript
app.get('/fruits', (req, res)=>{
    res.send('index');
});
```

`touch views/index.ejs`

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <h1>Fruits index page</h1>
    </body>
</html>
```

Render the ejs file

```javascript
app.get('/fruits', (req, res)=>{
    res.render('index.ejs');
});
```

## Have Index Route Render All Fruits

```javascript
app.get('/fruits', (req, res)=>{
    Fruit.find({}, (error, allFruits)=>{
        res.render('index.ejs', {
            fruits: allFruits
        });
    });
});
```

Update the ejs file:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <h1>Fruits index page</h1>
        <ul>
            <% for(let i = 0; i < fruits.length; i++){ %>
                <li><%=fruits[i].name; %></li>
            <% } %>
        </ul>
    </body>
</html>
```

Add a link to the create page:

```html
<nav>
    <a href="/fruits/new">Create a New Fruit</a>
</nav>
```

## Have Create Route redirect to Index After Fruit Creation

Inside the create route

```javascript
Fruit.create(req.body, (error, createdFruit)=>{
    res.redirect('/fruits');
});
```

## Have Index Page Link to Show Route

```html
<li>
    <a href="/fruits/<%=fruits[i].id; %>">
        <%=fruits[i].name; %>
    </a>
</li>
```

## Create Show Route

```javascript
app.get('/fruits/:id', (req, res)=>{
    Fruit.findById(req.params.id, (err, foundFruit)=>{
        res.send(foundFruit);
    });
});
```

## Create show.ejs

1. `touch views/show.ejs`
1. Add HTML

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <h1>Fruits show page</h1>
        The <%=fruit.name; %> is  <%=fruit.color; %>.
        <% if(fruit.readyToEat === true){ %>
            It is ready to eat
        <% } else { %>
            It is not ready to eat
        <% } %>
        <nav>
            <a href="/fruits">Back to Fruits Index</a>
        </nav>
    </body>
</html>
```

Render the ejs

```javascript
app.get('/fruits/:id', (req, res)=>{
    Fruit.findById(req.params.id, (err, foundFruit)=>{
        res.render('show.ejs', {
            fruit:foundFruit
        });
    });
});
```
