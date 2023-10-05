import * as mongoose from 'mongoose';

export const CarSchema = new mongoose.Schema({
  brand: String,
  carname: String,
  price: Number,
  leasingrate: Number,
  availability: Boolean,
  ID: Number,
  count: Number,
});
