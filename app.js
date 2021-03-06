var express = require('express'),
partials = require('express-partials'),
app = express(),
errorHandlers = require('./middleware/errorHandlers'),
routes = require('./routes'),
env = require('./env'),
config = require('./config/' + env.name);

app.set('view engine', 'ejs');
app.set('view options',{defaultLayout:'layout'});
// app.use(express.static(__dirname+'/static'));
app.use(express.static(__dirname + '/static'));
app.use(partials());

app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/contact', routes.contact);
app.get('/blog', routes.blog);
app.get('/faq', routes.faq);
app.get('/cost', routes.cost);




app.use(errorHandlers.error);
app.use(errorHandlers.notFound);

app.listen(config.port, function(){
	console.log('server running port '+ config.port);
});