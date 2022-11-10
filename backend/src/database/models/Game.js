module.exports = (sequelize, DataType) => {
  const Game = sequelize.define(
    'Game',
    {
      game_id: {
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataType.STRING,
      },
      game_image: {
        type: DataType.STRING,
      },
    },
    {
      tableName: 'games',
      timestamps: false,
    },
  );

  Game.associate = (models) => {
    Game.hasMany(models.Rating, {
      foreignKey: 'rating_id',
      as: 'rating',
    });
  };

  return Game;
};
