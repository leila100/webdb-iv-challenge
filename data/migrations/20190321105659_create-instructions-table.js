exports.up = function(knex, Promise) {
  return knex.schema.createTable("instructions", tbl => {
    tbl.increments()
    tbl.string("description").notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("instructions")
}
