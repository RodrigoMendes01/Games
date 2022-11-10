const bcrypt = require('bcrypt');
const { User } = require('../database/models');

module.exports = {
  getUsers: async (request, response) => {
    try {
      const users = await User.findAll();

      const status = users.length ? 200 : 204;

      response.status(status).json(users);
    } catch (err) {
      console.log(err);
    }
  },
  getUserById: async (request, response) => {
    try {
      const { id } = request.params;

      const user = await User.findByPk(id);

      response.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
  },
  createUser: async (request, response) => {
    try {
      const {
        name,
        email,
        discord,
        password,
        userImage,
      } = request.body;

      await User.create({
        name,
        email,
        discord,
        user_image: userImage,
        password: bcrypt.hashSync(password, 10),
      });

      response.status(201).json({ message: 'Usuário criado com sucesso' });
    } catch (err) {
      console.log(err);
    }
  },
};
