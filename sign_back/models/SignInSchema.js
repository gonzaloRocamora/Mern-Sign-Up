const mongoose = require('mongoose');

const SignInSchema = new mongoose.Schema ({
    email: {
        type: String,
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid mail."],
    },
    password: {
        type: String,
        require: true
    }

})

modules.export = mongoose.model('SignInSchema', SignInSchema)