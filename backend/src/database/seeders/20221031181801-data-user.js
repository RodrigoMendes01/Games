module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [{
      name: 'Rodrigo Mendes',
      email: 'rodrigo@email.com',
      user_image: 'userimage.png',
      discord: 'Rodrigo#3645',
      password: '123456',
    },
    {
      name: 'Usuario Teste',
      email: 'teste@email.com',
      user_image: 'userimage.png',
      discord: 'Teste#3645',
      password: '123456',
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
