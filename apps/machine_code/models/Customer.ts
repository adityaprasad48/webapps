import mongoose, { Schema, model, models } from 'mongoose';

const customerSchema = new Schema({
  name: String,
  email: String,
  loyaltyPoints: Number,
});

const Customer = models.Customer || model('Customer', customerSchema);
export default Customer;
