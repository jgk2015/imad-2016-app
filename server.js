var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
    title: "Article One| Jery George",
    heading: "Article ONe",
    date: "Sep 20, 2016",
    content: `  <p>
                    This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.
                </p>
`
 
},
    'article-two': {
    title: "Article Two| Jery George",
    heading: "Article Two",
    date: "Sep 20, 2016",
    content: `<p>
                    This is the content of my first article.This is the content of my first article.This is the content o
                </p>`
},
    'article-three': {
    title: "Article Three| Jery George",
    heading: "Article OThree",
    date: "Sep 20, 2016",
    content: `<p>
                    This is the content of my first article.This is the content of my first article.This is the content o
                </p>`
}
};


function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate = `
    <html>
    <head>
        <title>$(title)</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div> <a href="/">Home </a> </div>
            <hr>
            <h3>$(heading)</h3>
            <div>$(date)</div>
            <div>$(content)</div>
        </div>
    </body>
    </html>
`;
return htmlTemplate;
}








app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/article-one', function (req, res) {
  res.send(createTemplate(articles.article-one));
});

app.get('/article-two', function (req, res) {
  res.send(createTemplate(articles.article-two));
});
app.get('/article-three', function (req, res) {
  res.send(createTemplate(articles.article-three));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
