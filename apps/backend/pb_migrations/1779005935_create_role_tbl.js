/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    type: "base",
    name: "role",
    fields: [
      { type: "text", name: "name", required: true },
      { type: "text", name: "value", required: true },
      { type: "text", name: "description", required: true },
    ],
    indexes: [
      "CREATE UNIQUE INDEX idx_role_value ON role (value)",
    ],
  })

  app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("role")

  app.delete(collection)
})
