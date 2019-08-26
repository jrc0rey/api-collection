
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('api_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('api_list').insert([
        // {id: 1, name: 'homer', description:'father', link:'www.homer.com'},
// {id: 2, name: 'marge', description:'mother', link:'www.marge.com'},
// {id: 3, name: 'bart', description:'son', link:'www.bart.com'},
// {id: 4, name: 'barney', description:'drunk', link:'www.barney.com'},
// {id: 5, name: 'moe', description:'troll', link:'www.moe.com'},
// {id: 6, name: 'willy', description:'works at the school & has greese collection', link:'www.willy.com'}
      ]);
    });
};
