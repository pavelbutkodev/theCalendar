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