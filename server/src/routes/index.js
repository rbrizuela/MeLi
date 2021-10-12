const express = require("express");
const router = express.Router()   //requerimos express para crear las rutas

//-----------------------------------------------------------------------
//  Ruta inicial
//-----------------------------------------------------------------------
router.get('/', (req, res) => {
	res.status(200).json({ status: 'ok' })

})

module.exports = router
