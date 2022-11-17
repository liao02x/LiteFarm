export const up = function (knex) {
  return Promise.all([
    knex.schema.alterTable('location', (t) => {
      t.string('irrigation_task_type');
      t.float('flow_rate');
      t.jsonb('flow_rate_unit');
      t.float('application_depth');
      t.jsonb('application_depth_unit');
    }),
  ]);
};

export const down = function (knex) {
  return Promise.all([knex.schema.dropTable('location')]);
};
