const { Game, Rating } = require('../database/models');

module.exports = {
  getGames: async (request, response) => {
    try {
      const games = await Game.findAll({
        include: {
          model: Rating,
          as: 'rating',
          required: true,
        },
      });

      const status = games.length ? 200 : 204;
      response.status(status).json(games);
    } catch (err) {
      console.log(err);
    }
  },
  gameDetail: async (request, response) => {
    try {
      const { id } = request.params;

      const gameById = await Game.findByPk(id, {
        include: {
          model: Rating,
          as: 'rating',
          required: true,
        },
      });

      const status = gameById.length ? 200 : 204;
      response.status(status).json(gameById);
    } catch (err) {
      console.log(err);
    }
  },
};
