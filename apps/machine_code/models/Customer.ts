import mongoose, { Schema, model, models } from 'mongoose';

// models/Customer.ts
const customerSchema = new Schema({
  name: String,
  email: String,
  loyaltyPoints: Number,
  feedbacks: [{ type: Schema.Types.ObjectId, ref: 'Feedback' }]
});


const Customer = models.Customer || model('Customer', customerSchema);
export default Customer;
