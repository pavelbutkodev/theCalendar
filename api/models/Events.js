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
		default: ''
	},
	start: {
		type: String,
		default: ''
	},
	end: {
		type: String,
		default: ''
	}
})

module.exports = mongoose.model('events', productSchema);