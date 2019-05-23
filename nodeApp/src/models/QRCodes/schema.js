import { Schema } from 'mongoose';

const schema = new Schema(
  {
    name: {
      type: String,
      unique: true
    },
    chain: [
      {
        item: { type: String },
        senderID: { type: String },
        receiverID: { type: String },
        message: { type: String }
      }
    ],
    createdBy: { type: String }
  },
  { timestamps: true }
);

export default schema;
