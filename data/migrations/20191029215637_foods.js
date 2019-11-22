exports.up = function(knex) {
  //all fatsecret data-fields (excluding things like id's) must be nullable because we have to
  //refresh the data to satisfy FatSecret's API's ToS
  return knex.schema.createTable("foods", tbl => {
    tbl.increments();
    tbl
      .integer("fatsecret_food_id")
      .unsigned()
      .notNullable();
    tbl.text("food_name");
    tbl
      .integer("serving_id")
      .unsigned()
      .notNullable();
    tbl.text("serving_desc");
    tbl.text("serving_unit");
    tbl.decimal("serving_qty");
    tbl.datetime("retrieved_at").notNullable();
    tbl.decimal("calories_kcal");
    tbl.decimal("fat_g");
    tbl.decimal("saturated_fat_g");
    tbl.decimal("monounsaturated_fat_g");
    tbl.decimal("polyunsaturated_fat_g");
    tbl.decimal("trans_fat_g");
    tbl.decimal("protein_g");
    tbl.decimal("carbs_g");
    tbl.decimal("fiber_g");
    tbl.decimal("sugar_g");
    tbl.decimal("sodium_mg");
    tbl.decimal("iron_mg");
    tbl.decimal("calcium_mg");
    tbl.decimal("potassium_mg");
    tbl.decimal("cholesterol_mg");
    tbl.decimal("vitamin_a_iu");
    tbl.decimal("vitamin_c_iu");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("foods");
};
