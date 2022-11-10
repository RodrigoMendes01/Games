module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('ratings', [{
      rating: 'O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.quando uma misturou os caracteres de um texto para criar um espécime de livro',
      user_id: 2,
      game_id: 1,
    },
    {
      rating: 'O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o livro',
      user_id: 1,
      game_id: 1,
    },
    {
      rating: 'O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. sjdshjshsdds',
      user_id: 1,
      game_id: 2,
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('ratings', null, {});
  },
};
