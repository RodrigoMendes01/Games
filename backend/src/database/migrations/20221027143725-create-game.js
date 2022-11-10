module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('games', {
      game_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      game_image: {
        type: Sequelize.STRING,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('games');
  },
};
