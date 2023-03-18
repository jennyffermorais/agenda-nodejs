exports.middlewareGlobal = (req, res, next) => {

  // injetando dados dentro de todas as respostas
  // está disponível em todas as páginas
  res.locals.umaVariavelLocal = 'valor da variável local';
  next();
};

exports.outroMiddleware = (req, res, next) => {
  next();
};

exports.checkCsrfError = (erro, req, res, next) => {
  if (erro && erro.code === 'EBADCSRFTOKEN') {
    return res.render('403')
  }
}

exports.csrfMiddleware = (req, res, next) => {
  
  /* Setting a variable in the response object that can be used in the view. */
  res.locals.csrfToken = req.csrfToken();
  next();
}