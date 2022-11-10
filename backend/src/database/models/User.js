module.exports = (sequelize, DataType) => {
  const User = sequelize.define('User', {
    user_id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataType.STRING,
    },
    email: {
      type: DataType.STRING,
      unique: true,
    },
    user_image: {
      type: DataType.STRING,
    },
    discord: {
      type: DataType.STRING,
    },
    password: {
      type: DataType.STRING,
    },
  }, {
    tableName: 'users',
    timestamps: false,
  });

  User.associate = (models) => {
    User.hasMany(models.Rating, {
      foreignKey: 'rating_id',
      as: 'rating',
    });
  };

  return User;
};
