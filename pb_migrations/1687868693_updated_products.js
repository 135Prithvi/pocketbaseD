migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tfrg0e05t01tseb")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tfrg0e05t01tseb")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
