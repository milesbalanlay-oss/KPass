/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("users")

  const nameField = collection.fields.getByName("name")
  nameField.name = "first_name"
  collection.fields.add(nameField)

  collection.fields.add(new TextField({ name: "last_name", required: true }))
  collection.fields.add(new TextField({ name: "middle_name", required: false }))

  app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("users")

  const firstNameField = collection.fields.getByName("first_name")
  firstNameField.name = "name"
  collection.fields.add(firstNameField)

  collection.fields.removeByName("last_name")
  collection.fields.removeByName("middle_name")

  app.save(collection)
})
