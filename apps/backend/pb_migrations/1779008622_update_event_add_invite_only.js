/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("event")

  collection.fields.add(new BoolField({
    name: "invite_only",
    required: false,
    defaultValue: false,
  }))

  app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("event")

  collection.fields.removeByName("invite_only")

  app.save(collection)
})
