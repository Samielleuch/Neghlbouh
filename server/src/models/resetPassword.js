const mongoose = require("mongoose");

const ResetPasswordSchema = mongoose.Schema({
  resetPasswordToken: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("resetPassword", ResetPasswordSchema);
