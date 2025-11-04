// models/Home.js
const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
  title: { type: String, default: "Home – Tarun Kannadas" },
  
  heroSection: {
    heading: String,
    description: String,
    linkText: String,
    linkURL: String
  },

  whatIDoSection: {
    title: String,
    leftBlock: {
      image: String,
      heading: String,
      link: String
    },
    middleText: String,
    rightBlock: {
      image: String,
      heading: String,
      link: String
    }
  },

  experiencesSection: {
    title: String,
    projects: [
      {
        image: String,
        alt: String,
        link: String
      }
    ]
  },

  footer: {
    year: String,
    developerName: String,
    quickLinks: [String],
    socialLinks: {
      github: String,
      linkedin: String,
      instagram: String
    },
    contact: {
      email: String,
      phone: String,
      location: String
    }
  }
});

module.exports = mongoose.model('Home', homeSchema);
