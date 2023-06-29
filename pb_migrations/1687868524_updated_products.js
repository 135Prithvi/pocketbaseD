migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tfrg0e05t01tseb")

  collection.viewRule = "@request.auth.id != \"\""
  collection.createRule = "@request.auth.id != \"\""
  collection.updateRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tfrg0e05t01tseb")

  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = ""

  return dao.saveCollection(collection)
})
