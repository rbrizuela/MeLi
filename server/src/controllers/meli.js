const axios = require("axios");
const { author, API } = require('../common')

async function getOne(id) {

	try {

		const responseItem = await axios.get(`${API.ITEMS}/${id}`);
		const responseDesc = await axios.get(`${API.ITEMS}/${id}/description`);

		var item = {
			id: responseItem.data.id,
			title: responseItem.data.title,
			price: {
				currency: responseItem.data.currency_id,
				amount: responseItem.data.price,
				decimals: 0
			},
			picture: responseItem.data.thumbnail,
			condition: responseItem.data.condition,
			free_shipping: responseItem.data.shipping.free_shipping,
			sold_quantity: responseItem.data.sold_quantity,
			description: responseDesc.data.plain_text
		}
        
		var categories = await getCategories(responseItem.data.category_id)

	} catch (err) {
		console.error(err);
		return null
	}

	var result = { 
		author, 
		categories,
		item 
	}

	return result

}

async function getAll(param) {

	try {
	
		const responseItems = await axios.get(API.SEARCH, {
			params: {
				"limit": 4,
				"q": param,
			}
		});

		var items = responseItems.data.results.map(item => {
			return {
				id:  item.id,
				title: item.title,
				price: {
					currency: item.currency_id,
					amount: item.price,
					decimals: 0
				},
				picture: item.thumbnail,
				condition: item.condition,
				free_shipping: item.shipping.free_shipping,
				location: item.address.state_name,
			}
        })

		var categories = await getCategories(responseItems.data.results[0].category_id)


	} catch (err) {
		console.error(err);
		return null
	}

	var result = {
		author,
		categories,
		items
	}

	return result

}

async function getCategories(id) {

	try {

		const response = await axios.get(`${API.CATEGORIES}/${id}`);
		var categories = response.data.path_from_root

	} catch (err) {
		console.error(err);
		return null
	}

	return categories

}

module.exports = {
	getOne: getOne,
	getAll: getAll
}