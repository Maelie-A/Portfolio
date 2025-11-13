/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text2676424750",
        "max": 0,
        "min": 0,
        "name": "Nom_projet",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text2670423551",
        "max": 0,
        "min": 0,
        "name": "Slogan",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "file420680506",
        "maxSelect": 1,
        "maxSize": 0,
        "mimeTypes": [],
        "name": "cd_ferme",
        "presentable": false,
        "protected": false,
        "required": false,
        "system": false,
        "thumbs": [],
        "type": "file"
      },
      {
        "hidden": false,
        "id": "file2153911354",
        "maxSelect": 1,
        "maxSize": 0,
        "mimeTypes": [],
        "name": "cd_ouvert",
        "presentable": false,
        "protected": false,
        "required": false,
        "system": false,
        "thumbs": [],
        "type": "file"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text398546678",
        "max": 0,
        "min": 0,
        "name": "description_courte",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "convertURLs": false,
        "hidden": false,
        "id": "editor4149490183",
        "maxSize": 0,
        "name": "description_complete",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "editor"
      },
      {
        "hidden": false,
        "id": "file2577077509",
        "maxSelect": 99,
        "maxSize": 0,
        "mimeTypes": [],
        "name": "gallerie_images",
        "presentable": false,
        "protected": false,
        "required": false,
        "system": false,
        "thumbs": [],
        "type": "file"
      },
      {
        "hidden": false,
        "id": "select1425678560",
        "maxSelect": 4,
        "name": "Technologies",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "Photoshop",
          "Illustrator",
          "Figma",
          "Canva"
        ]
      },
      {
        "hidden": false,
        "id": "select59357059",
        "maxSelect": 1,
        "name": "tag",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "Projet Scolaire (BUT MMI)",
          "Projet personnel"
        ]
      },
      {
        "exceptDomains": null,
        "hidden": false,
        "id": "url520109263",
        "name": "Lien_figma_siteweb_autre",
        "onlyDomains": null,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "url"
      },
      {
        "hidden": false,
        "id": "autodate2990389176",
        "name": "created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "hidden": false,
        "id": "autodate3332085495",
        "name": "updated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
      }
    ],
    "id": "pbc_3938092973",
    "indexes": [],
    "listRule": null,
    "name": "Projets",
    "system": false,
    "type": "base",
    "updateRule": null,
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3938092973");

  return app.delete(collection);
})
