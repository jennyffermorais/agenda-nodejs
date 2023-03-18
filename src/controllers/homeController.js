exports.paginaInicial = (req, res) => {
  res.render('index', { // com esse objeto já estamos injetando dados na pag index.ejs
    titulo: 'Título da página',
    numeros: [0, 1, 2, 3, 4, 5]
  });
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
