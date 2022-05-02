var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('express-handlebars');
const fileUpload=require('express-fileupload')
let session=require('express-session')



var userRouter = require('./routes/user');
var adminRouter = require('./routes/admin');
var loginRouter=require('./routes/login')
var app = express();
let db=require('./config/connection') 
// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs',hbs.engine({extname:'hbs',defaultLayout:'layout',layoutsDir:__dirname+'/views/layout/',partialDir:__dirname+'/views/partials/'}))
app.use(session({secret:"kjdnvjnvioernvierngiuefijwegojrdngijdngisdbvhsdbiofjweufhiwe",cookie:{maxAge:60000}}))
app.use((req,res,next)=>{
  res.set('Cache-Control','no-store')
  next()
})
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

db.connect((err)=> {
if(err) console.log("connection error"+err)
else console.log("database connected to port 27017")
})

app.use('/', loginRouter);
app.use('/admin', adminRouter);
app.use('/user',userRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
