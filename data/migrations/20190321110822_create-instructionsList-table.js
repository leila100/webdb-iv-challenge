exports.up = function(knex, Promise) {
  return knex.schema.createTable("instructionsList", tbl => {
    tbl.increments()
    tbl
      .integer("instruction_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("instructions")
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
    tbl.integer("stepNumber").notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("instructionsList")
}
