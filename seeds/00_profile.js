exports.seed = async function(knex) {
  await knex('profile').del()
  await knex('profile').insert([
    {
      stageName: 'Audrey Hepburn',
      birthName: 'Audrey Kathleen Ruston',
      birthPlace: 'Ixelles, Belgium',
      birthDate: '04/05/1929',
      dDate: '20/01/1993'
    },
  ]);
};
