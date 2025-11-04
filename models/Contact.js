const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  formSection: {
    fields: [
      {
        label: { type: String, required: true },
        name: { type: String, required: true },
        type: { type: String, required: true },
        required: { type: Boolean, default: false }
      }
    ],
    buttons: [
      {
        id: { type: String },
        label: { type: String },
        type: { type: String }
      }
    ]
  },
  footer: {
    copyright: { type: String },
    quickLinks: [
      {
        name: { type: String },
        url: { type: String }
      }
    ],
    socialLinks: [
      {
        platform: { type: String },
        url: { type: String }
      }
    ],
    contactDetails: {
      email: { type: String },
      phone: { type: String },
      location: { type: String }
    }
  }
});

module.exports = mongoose.model("Contact", contactSchema);
