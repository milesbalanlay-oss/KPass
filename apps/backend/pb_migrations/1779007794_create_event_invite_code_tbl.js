/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    type: "base",
    name: "event_invite_code",
    fields: [
      {
        type: "relation",
        name: "event_id",
        required: true,
        collectionId: app.findCollectionByNameOrId("event").id,
        cascadeDelete: true,
        maxSelect: 1,
      },
      { type: "text", name: "invite_code", required: true },
    ],
    indexes: [
      "CREATE UNIQUE INDEX idx_event_invite_code ON event_invite_code (invite_code)",
    ],
  })

  app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("event_invite_code")

  app.delete(collection)
})
