import mongoose from "mongoose";

// Ornament Schema for the Customer Ornaments
const OrnamentSchema = new mongoose.Schema({
  ornamentName: {
    type: String,
    require: true,
  },
  count: {
    type: Number,
    default: 1,
  },
  grossWeight: {
    type: Number,
    require: true,
  },
  stoneWeight: {
    type: Number,
    require: true,
    default: 0,
  },
  remarks: String,
});

// Customer Info with Ornament Details
const CustomerSchema = new mongoose.Schema(
  {
    customerId: {
      type: Number,
      unique: true,
    },
    customerName: {
      type: String,
      require: true,
    },
    mobile: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    aadhar: {
      type: String,
      require: true,
    },
    pincode: {
      type: String,
      require: true,
    },
    loanAmount: {
      type: Number,
      require: true,
    },
    interestRate: {
      type: Number,
      require: true,
    },
    processingFee: Number,
    interestAmount: Number,
    finalLoanAmount: {
      type: Number,
      require: true,
    },
    pledgeDate: {
      type: Date,
      default: Date.now(),
    },
    totalProfit: Number,
    status: {
      type: String,
      default: "pending",
    },
    scheme: {
      type: Number,
      require: true,
    },
    completedAt: Date,
    nominee: String,
    interestDue: String,
    maturity: String,
    customerPic: String,
    ornamentPic: String,
    ornaments: [OrnamentSchema],
  },
  { timestamps: true }
);

export const CustomerModel = mongoose.model("customer", CustomerSchema);
