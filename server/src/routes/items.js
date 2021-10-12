const express = require("express");
const router = express.Router()   //requerimos express para crear las rutas
const meli = require("../controllers/meli");

//-----------------------------------------------------------------------
//  GET item
//-----------------------------------------------------------------------
router.get('/items/:id', async (req, res) => {

	const { id } = req.params

	var data = await meli.getOne(id)
	
	if (data) {
		res.status(200).json(data)
	} else {
		res.status(404).json({
			error: 404,
			message: "Error"
		})
	}

})

//-----------------------------------------------------------------------
//  GET items
//-----------------------------------------------------------------------
router.get('/items', async (req, res) => {

	const { search } = req.query

	var data = await meli.getAll(search)

	if (data) {
		res.status(200).json(data)
	} else {
		res.status(404).json({
			error: 404,
			message: "Error"
		})
	}

})

module.exports = router
