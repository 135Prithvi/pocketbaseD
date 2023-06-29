migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h8lcg7qqd7piju3")

  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h8lcg7qqd7piju3")

  collection.updateRule = null

  return dao.saveCollection(collection)
})
