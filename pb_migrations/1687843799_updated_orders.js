migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ecwo2oddda4ia6g")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ecwo2oddda4ia6g")

  collection.listRule = null

  return dao.saveCollection(collection)
})
