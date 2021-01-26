const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
	user: {
		ref: 'users',
		type: Schema.Types.ObjectId
	},
	id: {
		type: Number,
	},
	title: {
		type: String,
		required: true,
	},
	start: {
		type: Number,
		required: true,
	},
	end: {
		type: Number,
		required: true,
	}
})

module.exports = mongoose.model('events', productSchema);