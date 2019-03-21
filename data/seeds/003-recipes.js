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
            "1- Cook chicken with onions. -- 2- Cook rice -- 3- Add salt, pepper, saffron. -- 4- Mix all"
        },
        {
          title: "From Lasagna Box",
          dish_id: 2,
          instructions:
            "1- Cook ground beef -- 2- Mix the cheeses with the eggs -- 3- Add salt, pepper to cheese mix -- 4- Layer lasagna pasta with cheese and then meet and repeat until all gone. -- 5- Bake in oven for 50 min temp. 375 degrees"
        },
        {
          title: "Classic",
          dish_id: 3,
          instructions:
            "1- Cook spaghetti. -- 2- Cook meat balls in tomato sauce. -- 3- Add sauce with meat to spaghetti"
        },
        {
          title: "Spanish Rice",
          dish_id: 1,
          instructions:
            "1- Heat oil in pan. -- 2- Add rice and cook until golden brown. -- 3- When rice is brown, add water, tomato sauce, salt. -- 4- Stir and cover pan."
        }
      ])
    })
}
