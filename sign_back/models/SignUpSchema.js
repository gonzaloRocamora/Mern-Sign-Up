const mongoose = require('mongoose');

const signUpSchema = new mongoose.Schema({
    fullName: {
        type: String,
        trim: true
    },
    userName: {
        type: String,
        trim: true,
		minlength: 6,
		maxlength: 20
	},
	password: {
		type: String,
		minlength: 6,
		maxlength: 20,
		require: true		
	},
	email: {
		type: String,
		match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid mail."]
	},
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('signUpSchema', signUpSchema)