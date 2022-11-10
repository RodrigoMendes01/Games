module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ratings', {
      rating_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      rating: {
        type: Sequelize.STRING(300),
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
      game_id: {
        type: Sequelize.INTEGER,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('ratings');
  },
};
