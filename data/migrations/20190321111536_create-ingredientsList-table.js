exports.up = function(knex, Promise) {
  return knex.schema.createTable("ingredientsList", tbl => {
    tbl.increments()
    tbl
      .integer("ingredient_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("ingredients")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    tbl
      .integer("recipe_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    tbl.float("qtyValue").notNullable()
    tbl.string("qtyUnit").notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("ingredientsList")
}
