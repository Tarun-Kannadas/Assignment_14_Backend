import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
  // === SECTION 1: Basic Page Metadata ===
  pageTitle: {
    type: String,
    default: "About – Tarun Kannadas"
  },

  // === SECTION 2: About Me ===
  aboutMe: {
    heading: {
      type: String,
      default: "About Me"
    },
    content: {
      type: String,
      required: true
    }
  },

  // === SECTION 3: Skills ===
  skillsSection: {
    heading: {
      type: String,
      default: "Skills"
    },
    skillsList: {
      type: [String], // Array of strings
      default: []
    }
  },

  // === SECTION 4: Goals ===
  goalsSection: {
    heading: {
      type: String,
      default: "My Goals"
    },
    goalDescription: {
      type: String,
      required: true
    }
  },

  // === SECTION 5: Footer ===
  footer: {
    year: {
      type: Number,
      default: 2025
    },
    developerName: {
      type: String,
      default: "Tarun Kannadas"
    },
    quickLinks: {
      home: { type: String, default: "/" },
      about: { type: String, default: "/about" },
      contact: { type: String, default: "/contact" }
    },
    socialLinks: {
      github: { type: String, default: "https://github.com/tarun-kannadas" },
      linkedin: { type: String, default: "https://linkedin.com/in/tarun-kannadas-69ba93240/" },
      instagram: { type: String, default: "https://instagram.com/chikashidoto_2002" }
    },
    contactDetails: {
      email: { type: String, default: "tarunkannadas@gmail.com" },
      phone: { type: String, default: "+91-9072160041" },
      location: { type: String, default: "Kochi, India" }
    }
  }
});

export default mongoose.model("About", aboutSchema);
