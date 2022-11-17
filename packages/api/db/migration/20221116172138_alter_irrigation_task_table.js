export const up = function (knex) {
  return Promise.all([
    knex.schema.alterTable('irrigation_task', (table) => {
      table.string('type').references('irrigation_type_name').inTable('irrigation_type');
      table
        .string('measuring_type')
        .references('default_measuring_type')
        .inTable('irrigation_type');
      table.float('estimated_water_usage');
      table.string('estimated_water_usage_unit');
      table.float('flow_rate');
      table.jsonb('flow_rate_unit');
      table.float('application_depth');
      table.jsonb('application_depth_unit');
      table.string('location_id');
      table.string('notes');
      table.string('due_date');
      table.string('created_by_user_id').references('user_id').inTable('users').defaultTo('1');
      table.string('updated_by_user_id').references('user_id').inTable('users').defaultTo('1');
      table.dateTime('created_at').defaultTo(new Date('2000/1/1').toISOString()).notNullable();
      table.dateTime('updated_at').defaultTo(new Date('2000/1/1').toISOString()).notNullable();
    }),
  ]);
};

export const down = function (knex) {
  return Promise.all([knex.schema.dropTable('irrigation_task')]);
};
