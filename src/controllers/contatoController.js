const Contato = require('../models/ContatoModel');

exports.index = (req, res) => {
    res.render('contato', {
        contato: {}
    });
}

exports.register = async (req, res) => {
    try {
        const contato = new Contato(req.body);
        await contato.register();

        if (contato.errors.length > 0) {
            req.flash('errors', 'Você precisa fazer login.');
            req.session.save(() => res.redirect('back')); // redireciona para a pag anterior
            return;
        }

        req.flash('success', 'Contato registrado com sucesso.');
        req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
        return;
    } catch (erro) {
        console.log(erro);
        return res.render('404');
    }
}

exports.editIndex = async function (req, res) {
    if (!res.params.id) return res.render('404');

    const contato = await Contato.buscaPorId(req.params.id);
    if (!contato) return res.render('404');

    res.render('contato', { contato });
}