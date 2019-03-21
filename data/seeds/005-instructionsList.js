exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("instructionsList")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("instructionsList").insert([
        { stepNumber: 1, instruction_id: 5, recipe_id: 1 },
        { stepNumber: 2, instruction_id: 9, recipe_id: 1 },
        { stepNumber: 3, instruction_id: 6, recipe_id: 1 },
        { stepNumber: 4, instruction_id: 3, recipe_id: 1 },
        { stepNumber: 5, instruction_id: 4, recipe_id: 1 },
        { stepNumber: 6, instruction_id: 15, recipe_id: 1 },
        { stepNumber: 7, instruction_id: 1, recipe_id: 1 },
        { stepNumber: 1, instruction_id: 5, recipe_id: 2 },
        { stepNumber: 2, instruction_id: 2, recipe_id: 2 },
        { stepNumber: 3, instruction_id: 11, recipe_id: 2 },
        { stepNumber: 4, instruction_id: 8, recipe_id: 2 },
        { stepNumber: 5, instruction_id: 3, recipe_id: 2 },
        { stepNumber: 6, instruction_id: 4, recipe_id: 2 },
        { stepNumber: 7, instruction_id: 13, recipe_id: 2 },
        { stepNumber: 1, instruction_id: 7, recipe_id: 3 },
        { stepNumber: 2, instruction_id: 10, recipe_id: 3 },
        { stepNumber: 3, instruction_id: 11, recipe_id: 3 },
        { stepNumber: 1, instruction_id: 5, recipe_id: 4 },
        { stepNumber: 2, instruction_id: 6, recipe_id: 4 },
        { stepNumber: 3, instruction_id: 11, recipe_id: 4 },
        { stepNumber: 4, instruction_id: 3, recipe_id: 4 },
        { stepNumber: 5, instruction_id: 4, recipe_id: 4 },
        { stepNumber: 6, instruction_id: 15, recipe_id: 4 },
        { stepNumber: 7, instruction_id: 1, recipe_id: 4 }
      ])
    })
}
