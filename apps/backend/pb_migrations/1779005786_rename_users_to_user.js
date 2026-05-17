/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("users")

  collection.name = "user"

  app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("user")

  collection.name = "users"

  app.save(collection)
})
