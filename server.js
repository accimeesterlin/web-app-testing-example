var express = require('express');
var app = express();
var path = require('path');

// static files
    // html
    // javascript
    // css
    // images
    // documents

app.use(express.static('public')); // express

// Routing
app.get('/', function(req, res) {

    // res.cookie
    res.cookie('name', 'accimeesterlin').sendFile(path.join(__dirname, 'views/index.html'));
});


app.get('/accimeesterlin', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/about.html'));
});

app.get('/expressjs', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/dashboard.html'));
});

app.get('/api', function(req, res) {
    var data = {
        username: 'accimeesterling'
    };
    
    res.json(data); // res.json
});


app.get('/hire', function(req, res) {
    res.download(path.join(__dirname, 'docs/doc.text'));
});


app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/404.html'));
});


app.listen(9001, function() {
    console.log('Server is starting at PORT ', 9001);
});












// JSON and AJax
// NO


/*

    Back End Languages
    

        - Python
        - C#
        - Node.js
        - Java


        - Things
            - Automation
            - Scraping
            - Bots
            - Process Payment
            - Integrations
            - Web Application - Express


        - Web Application Framework  
            - Express
            - Hapijs

        - Controlls the browser url
        - Send Files
        - Builds API
        - Authentication
        
*/
