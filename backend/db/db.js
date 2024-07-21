const mongoose = require('mongoose');

const {MONGO_URL} = require("../config/config");

mongoose.connect(MONGO_URL);

const Schema = mongoose.Schema;

const UserSchema = Schema({
    username: String,
    password: String,
})

const TodoSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'completed'],
        default: 'pending',
    },
    created_at: {
        type: Date,
        default: Date.now,
      },
});

const User = mongoose.model('User',UserSchema);
const Todo = mongoose.model('Todo',TodoSchema);

module.exports = {
    User,
    Todo
}
