migrate((db) => {
  const snapshot = [
    {
      "id": "_pb_users_auth_",
      "created": "2023-06-20 12:18:35.937Z",
      "updated": "2023-06-21 11:55:13.975Z",
      "name": "users",
      "type": "auth",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "users_name",
          "name": "name",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "users_avatar",
          "name": "avatar",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [
              "image/jpg",
              "image/jpeg",
              "image/png",
              "image/svg+xml",
              "image/gif",
              "image/webp"
            ],
            "thumbs": null
          }
        }
      ],
      "listRule": null,
      "viewRule": null,
      "createRule": "",
      "updateRule": "id = @request.auth.id",
      "deleteRule": "id = @request.auth.id",
      "options": {
        "allowEmailAuth": true,
        "allowOAuth2Auth": true,
        "allowUsernameAuth": true,
        "exceptEmailDomains": null,
        "manageRule": null,
        "minPasswordLength": 8,
        "onlyEmailDomains": null,
        "requireEmail": false
      }
    },
    {
      "id": "tfrg0e05t01tseb",
      "created": "2023-06-20 12:45:13.012Z",
      "updated": "2023-06-23 12:15:04.209Z",
      "name": "products",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "bwwh7pc4",
          "name": "name",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": 5,
            "max": 300,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "ttw3mlss",
          "name": "description",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "qqvdjgpk",
          "name": "image",
          "type": "file",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [
              "image/jpg",
              "image/jpeg",
              "image/png",
              "image/svg+xml",
              "image/gif",
              "image/webp"
            ],
            "thumbs": []
          }
        },
        {
          "system": false,
          "id": "y6mif5or",
          "name": "reviews",
          "type": "number",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null
          }
        },
        {
          "system": false,
          "id": "dtccqhy3",
          "name": "avg_rating",
          "type": "number",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null
          }
        },
        {
          "system": false,
          "id": "q2xnyrsj",
          "name": "price",
          "type": "number",
          "required": true,
          "unique": false,
          "options": {
            "min": 50,
            "max": null
          }
        }
      ],
      "listRule": "",
      "viewRule": "",
      "createRule": "",
      "updateRule": "",
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "2ztgr2qnu02fy1n",
      "created": "2023-06-21 07:35:33.448Z",
      "updated": "2023-06-23 12:14:29.545Z",
      "name": "address",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "pkmrx6b4",
          "name": "line1",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": 10,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "ay7vvzxa",
          "name": "line2",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "hpmwfi0s",
          "name": "pincode",
          "type": "number",
          "required": true,
          "unique": false,
          "options": {
            "min": 0,
            "max": null
          }
        },
        {
          "system": false,
          "id": "9sgci93p",
          "name": "state",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "idofuywe",
          "name": "country",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "euf6h7mz",
          "name": "phone",
          "type": "number",
          "required": true,
          "unique": false,
          "options": {
            "min": 12,
            "max": null
          }
        },
        {
          "system": false,
          "id": "ivwvs0ux",
          "name": "city",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": 1,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "t8si7gfc",
          "name": "user",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "collectionId": "_pb_users_auth_",
            "cascadeDelete": true
          }
        }
      ],
      "listRule": "",
      "viewRule": "",
      "createRule": "",
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "ecwo2oddda4ia6g",
      "created": "2023-06-21 07:35:57.426Z",
      "updated": "2023-06-25 07:28:41.918Z",
      "name": "orders",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "bqhenuvq",
          "name": "orderStatus",
          "type": "select",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "values": [
              "confirmed",
              "pickedup",
              "coming-today",
              "delivered"
            ]
          }
        },
        {
          "system": false,
          "id": "iep611yy",
          "name": "address",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "collectionId": "2ztgr2qnu02fy1n",
            "cascadeDelete": false
          }
        },
        {
          "system": false,
          "id": "zhsi8jmg",
          "name": "product",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "collectionId": "tfrg0e05t01tseb",
            "cascadeDelete": false
          }
        },
        {
          "system": false,
          "id": "roj7ihe3",
          "name": "user",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "collectionId": "_pb_users_auth_",
            "cascadeDelete": true
          }
        },
        {
          "system": false,
          "id": "h1oank9m",
          "name": "expectedDate",
          "type": "date",
          "required": false,
          "unique": false,
          "options": {
            "min": "",
            "max": ""
          }
        }
      ],
      "listRule": null,
      "viewRule": null,
      "createRule": "",
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "h8lcg7qqd7piju3",
      "created": "2023-06-21 07:36:50.725Z",
      "updated": "2023-06-21 07:50:28.602Z",
      "name": "cart",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "flrm7zmw",
          "name": "cartItems",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": null,
            "collectionId": "tfrg0e05t01tseb",
            "cascadeDelete": true
          }
        },
        {
          "system": false,
          "id": "i4nnh9m0",
          "name": "user",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "collectionId": "_pb_users_auth_",
            "cascadeDelete": false
          }
        }
      ],
      "listRule": "",
      "viewRule": "",
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    }
  ];

  const collections = snapshot.map((item) => new Collection(item));

  return Dao(db).importCollections(collections, true, null);
}, (db) => {
  return null;
})
