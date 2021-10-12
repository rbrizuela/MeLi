# Backend

_Backend construido con Node y Express_

_Permite recuperar data desde las APIs de Mercado Libre y servir a la aplicacion frontend apis personalizadas_ 

<br />
<br />



## 🚀 Informacion General 

_Consulta 3 apis de ML_

* **Search**: 

  https://api.mercadolibre.com/sites/MLA/search

* **Items**: 

  https://api.mercadolibre.com/items

* **Categories**: 

  https://api.mercadolibre.com/categories

_Retorna una Api al Front_


* **Items**: 

  http://localhost:8000/api/items

<br />
<br />




## ⚙️ Correr el proyecto 

Correr el Backend

_Inicia el proyecto de node, llamando al index.js_

```
npm start
```

Correr el Backend con nodemon

_Inicia el proyecto tambien pero con el server de nodemon_

_Cualquier cambio durante el desarrollo, cuando guardo, reinicia automáticamente el server de node_

```
npm run dev
```
<br />
<br />



## ⚙️ Request al Backend 
<br />


### (GET): Recuperar items 🔍
<br />

_Ejemplo: buscar "Celular"_

```
http://localhost:8000/api/items?search=celular
```

_Input:_ 

* search:  Query Params

_Output:_

```
{
  "author": {
    "name": String
    "lastname": String
  },
  "categories": [
    {
      "id": String,
      "name": String
    }, 
    {
      ...
    }
  ],
  "items": [
    {
      "id": String,
      "title": String,
      "price": {
        "currency": String,
        "amount": Number,
        "decimals": Number
      },
      “picture”: String,
      "condition": String,
      "free_shipping": Boolean,
      "location": String,
    }, 
    {
      ...
    }
  ]
}
```
<br />


### (GET): Recuperar item 🔍
<br />

_Ejemplo: buscar "MLA913261149"_

```
http://localhost:8000/api/items/MLA913261149
```

_Input:_ 

* :id

_Output:_

```
{
  "author": {
    "name": String
    "lastname": String
  },
  "categories": [
    {
      "id": String,
      "name": String
    }, 
    {
      ...
    }
  ],
  "item": {
      "id": String,
      "title": String,
      "price": {
        "currency": String,
        "amount": Number,
        "decimals": Number
      },
      “picture”: String,
      "condition": String,
      "free_shipping": Boolean,
      "sold_quantity": Number,
      "description": String,
    }, 
  ]
}
```



<br />
<br />



## 🛠️ Stack 

_Herramientas utilizadas para crear el proyecto_

* **Node**: *El server esta construido en Node* 
* **Npm**: *Manejador de dependencias*
* **Git**: *Control de versiones*
<br />
<br />


### 🔧 Dependencias 

* **Axios**: *Promise based HTTP client for the browser and Node.js.*
* **Cors**: *Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.*
* **Express**: *Web application framework for Node.js.*
* **Morgan**: *HTTP request logger middleware for Node.js.*
* **Nodemon**: *Utility that will monitor for any changes in your source and automatically restart your server (dev).*
<br />
<br />


## ✒️ Autor 

* **Roberto Brizuela** - *Desarrollo y documentación* - [rbrizuela](https://github.com/rbrizuela)
<br />
<br />

## 📄 Licencia 

[MIT](https://choosealicense.com/licenses/mit/)
