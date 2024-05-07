const {Schema, model} = require('mongoose');

const userSchema = new Schema ({
  firstName: {
    type: String,
    required: [true, 'First name is required']
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  isOnline: {
    type: Boolean,
    default: false
  },
  messages: [{
    type: Schema.Types.ObjectId,
    ref: 'Message'
  }]
}, {
  timestamps: true
})

const User = model('User', userSchema);

module.exports = User;