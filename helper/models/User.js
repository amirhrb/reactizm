import { models, model, Schema } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    default: function () {
      return this.email;
    },
  },
  password: {
    type: String,
    required: true,
  },
  joinedAt: {
    type: Date,
    default: Date.now,
    immutable: true,
    required: true,
  },
  name: {
    type: String,
  },
  lastname: {
    type: String,
  },
  avatar: {
    type: Buffer,
  },
  editdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = models.User || model("User", userSchema);

export default User;
