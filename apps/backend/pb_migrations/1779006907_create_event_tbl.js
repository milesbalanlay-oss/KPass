/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    type: "base",
    name: "event",
    fields: [
      { type: "text", name: "title", required: true },
      { type: "text", name: "description", required: false },
      { type: "date", name: "date", required: true },
      { type: "text", name: "location", required: false },
      {
        type: "relation",
        name: "facilitator_id",
        required: true,
        collectionId: app.findCollectionByNameOrId("user").id,
        cascadeDelete: false,
        maxSelect: 1,
      },
    ],
  })

  app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("event")

  app.delete(collection)
})
