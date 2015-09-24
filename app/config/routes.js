var express             = require( 'express' ),
    apiRouter           = express.Router(),
    articlesController  = require( '../controller/artilces' ),
    Article             = require( '../controllers/articles' )
;

apiRouter.route('/articles')
  .get()
  .post();
