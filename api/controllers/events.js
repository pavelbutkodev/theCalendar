const Events = require('../models/Events')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async (req, res) => {
	try {
		const events = await Events.find()
		res.status(200).json(events)
	} catch (e) {
		res.status(400).json(e)
	}
}

module.exports.create = async (req, res) => {
	try {
		const events = new Events({
			id: Date.now(),
			title: req.body.title,
			start: req.body.start,
			end: req.body.end,
		})
		await events.save()
		res.status(201).json(events)
	} catch (e) {
		res.status(400).json(e)
	}
}

module.exports.remove = async (req, res) => {
	try {
		await Events.deleteOne({
			id: req.params.id,
		})
		res.status(200)
	} catch (e) {
		errorHandler(res, e)
	}
}

module.exports.createElem = async (req, res) => {
	try {
		const updated = {
			title: req.body.title,
		}
		const event = await Events.findOneAndUpdate(
			{id: req.body.id},
			{$set: updated},
			{new: true}
		)
		res.status(201).json(event)
	} catch (e) {
		errorHandler(res, e);
	}
}