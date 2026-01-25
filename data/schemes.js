// backend/data/schemes.js

const schemes = [

  /* =======================
     🎓 CITIZEN SCHEMES
     ======================= */

  {
    name: "Post Matric Scholarship",
    type: "citizen",
    conditions: {
      occupation: "student",
      category: ["SC", "ST", "OBC"],
      income: "below2"
    }
  },

  {
    name: "NSP Central Scholarship",
    type: "citizen",
    conditions: {
      occupation: "student",
      income: "below2"
    }
  },

  {
    name: "Old Age Pension Scheme",
    type: "citizen",
    conditions: {
      occupation: "senior",
      age: "above60"
    }
  },

  {
    name: "Disability Pension Scheme",
    type: "citizen",
    conditions: {
      disability: "yes"
    }
  },

  {
    name: "Minority Scholarship",
    type: "citizen",
    conditions: {
      occupation: "student",
      minority: "yes",
      income: "below2"
    }
  },

  /* =======================
     🚀 STARTUP SCHEMES
     ======================= */

  {
    name: "PMEGP (Prime Minister Employment Generation Programme)",
    type: "startup",
    conditions: {
      registration: ["msme", "both"],
      sector: ["manufacturing", "service"]
    }
  },

  {
    name: "Startup India Seed Fund Scheme",
    type: "startup",
    conditions: {
      registration: ["startup-india", "both"],
      stage: ["idea", "early"]
    }
  },

  {
    name: "Credit Guarantee Scheme for MSME",
    type: "startup",
    conditions: {
      registration: ["msme", "both"]
    }
  },

  {
    name: "Women Entrepreneur Scheme",
    type: "startup",
    conditions: {
      founder: "women"
    }
  },

  {
    name: "SC/ST Startup Support Scheme",
    type: "startup",
    conditions: {
      founder: "scst"
    }
  }
];

module.exports = schemes;
