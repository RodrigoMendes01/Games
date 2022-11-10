module.exports = (sequelize, DataType) => {
  const Rating = sequelize.define('Rating', {
    rating_id: {
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    rating: {
      type: DataType.STRING(300),
    },
    user_id: {
      type: DataType.INTEGER,
    },
    game_id: {
      type: DataType.INTEGER,
    },
  }, {
    tableName: 'ratings',
    timestamps: false,
  });

  Rating.associate = (models) => {
    Rating.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
    Rating.belongsTo(models.Game, {
      foreignKey: 'game_id',
      as: 'game',
    });
  };

  return Rating;
};
