
var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
    title: 'Article One',
    heading: 'Article One',
    date: 'Sep 20, 2016',
    content: `<p>Content for Article one </p>`
 
},
    'article-two': {
    title: "Article Two",
    heading: "Article Two",
    date: "Sep 20, 2016",
    content: `<p>Content for Article Two.</p>`
},
    'article-three': {
    title: "Article Three",
    heading: "Article OThree",
    date: "Sep 20, 2016",
    content: `<p>Content for Article Three/p>`}
};

function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate = `
    <html>
    <head>
        <title>This is title
            ${title}
        </title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div> <a href="/">Home </a> </div>
            <hr>
            <h3>This is heading ${heading}</h3>
            <div>Date ${date}</div>
            <div>Content ${content}</div>
        </div>
    </body>
    </html>
`;
return htmlTemplate;
}

var counter = 0;
app.get('/counter', function(req, res){
    counter = counter + 1;
    res.send(counter.toString());
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
