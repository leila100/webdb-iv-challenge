exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          title: "Mima",
          dish_id: 1,
          instructions:
            "1- Cook chicken with onions. \n 2- Cook rice \n 3- Add salt, pepper, saffron. \n 4- Mix all"
        },
        {
          title: "From Lasagna Box",
          dish_id: 2,
          instructions:
            "1- Cook ground beef \n 2- Mix the cheeses with the eggs \n 3- Add salt, pepper to cheese mix \n 4- Layer lasagna pasta with cheese and then meet and repeat until all gone. \n 5- Bake in oven for 50 min temp. 375 degrees"
        },
        {
          title: "Classic",
          dish_id: 3,
          instructions:
            "1- Cook spaghetti. \n 2- Cook meat balls in tomato sauce. \n 3- Add sauce with meat to spaghetti"
        },
        {
          title: "Spanish Rice",
          dish_id: 1,
          instructions:
            "1- Heat oil in pan. \n 2- Add rice and cook until golden brown. \n 3- When rice is brown, add water, tomato sauce, salt. \n 4- Stir and cover pan."
        }
      ])
    })
}
