module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('games', [{
      name: 'Counter Strike',
      game_image: 'https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-188x250.jpg',
    },
    {
      name: 'Call of Duty MW2',
      game_image: 'https://static-cdn.jtvnw.net/ttv-boxart/1678052513_IGDB-188x250.jpg',
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('games', null, {});
  },
};
