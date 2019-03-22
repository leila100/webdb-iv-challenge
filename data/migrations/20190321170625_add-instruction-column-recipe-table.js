exports.up = function(knex, Promise) {
  return knex.schema.table("recipes", tbl => {
    tbl
      .string("instructions")
      .notNullable()
      .defaultTo("Instructions")
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.table("recopes", tbl => {
    tbl.dropColumn("admin")
  })
}
