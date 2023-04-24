exports.middlewareGlobal = (req, res, next) => {

  // injetando dados dentro de todas as respostas
  // está disponível em todas as páginas
  res.locals.errors = req.flash('errors');
  res.locals.success = req.flash('success');
  res.locals.user = req.session.user;
  next();
};

exports.outroMiddleware = (req, res, next) => {
  next();
};

exports.checkCsrfError = (erro, req, res, next) => {
  if (erro) {
    return res.render('403')
  }

  next();
}

exports.csrfMiddleware = (req, res, next) => {

  /* Setting a variable in the response object that can be used in the view. */
  res.locals.csrfToken = req.csrfToken();
  next();
}

exports.loginRequired = (req, res, next) => {
  if (!req.session.user) {
    req.flash('errors', 'Você precisa fazer login.');

    // save the session, then redirect to home
    req.session.save(() => res.redirect('/'));
    return;
  }

  next(); // go to next middleware
}