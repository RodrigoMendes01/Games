const { check } = require('express-validator');

module.exports = [
  check('nome').notEmpty().withMessage('deve inserir um nome'),
  check('email')
    .isEmail()
    .notEmpty()
    .withMessage('deve inserir um email válido'),
  check('discord')
    .notEmpty()
    .isLength({ min: 0, max: 20 })
    .withMessage('deve inserir um usuário discord'),
  check('password').notEmpty().withMessage('deve inserir uma senha'),
];
