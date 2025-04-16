// models/Feedback.ts
import mongoose, { Schema, model, models } from 'mongoose';

const feedbackSchema = new Schema({
  customerId: { type: Schema.Types.ObjectId, ref: 'Customer' },
  message: String,
  rating: Number,
  createdAt: { type: Date, default: Date.now },
});

const Feedback = models.Feedback || model('Feedback', feedbackSchema);
export default Feedback;
