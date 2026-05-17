/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    type: "base",
    name: "invited",
    fields: [
      {
        type: "relation",
        name: "event_id",
        required: true,
        collectionId: app.findCollectionByNameOrId("event").id,
        cascadeDelete: true,
        maxSelect: 1,
      },
      {
        type: "relation",
        name: "user_id",
        required: true,
        collectionId: app.findCollectionByNameOrId("user").id,
        cascadeDelete: true,
        maxSelect: 1,
      },
    ],
  })

  app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("invited")

  app.delete(collection)
})
