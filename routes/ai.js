const express = require("express");
const router = express.Router();
const services = require("../data/services");


router.post("/ask", (req, res) => {
  const { message } = req.body;
  const text = message.toLowerCase();

  let matchedService = null;

  for (const [serviceName, service] of Object.entries(services)) {
    if (text.includes(serviceName.toLowerCase())) {
      matchedService = serviceName;
      break;
    }

    if (service.keywords) {
      for (const key of service.keywords) {
        if (text.includes(key.toLowerCase())) {
          matchedService = serviceName;
          break;
        }
      }
    }

    if (matchedService) break;
  }

  if (!matchedService) {
    return res.json({
      reply: "❓ Kripya service select karein ya option par click karein."
    });
  }

  const service = services[matchedService];

  res.json({
    reply: `✔ ${matchedService} ke liye complete guidance niche di gayi hai.`,
    portal: service.portal,
    link: service.link,
    documents: service.documents,
    steps: service.steps.map(s => ({ text: s }))
  });
});

/* =========================
   🆕 RECOMMENDATION API
   ========================= */
router.post("/recommend", (req, res) => {

  const userProfile = {
    age: req.body.age,
    category: req.body.category,
    occupation: req.body.occupation,
    income: req.body.income,
    disability: req.body.disability,
    minority: req.body.minority,

    isStartup: req.body.isStartup,
    registration: req.body.registration,
    sector: req.body.sector,
    founder: req.body.founder,
    stage: req.body.stage
  };

  const eligibleSchemes = getEligibleSchemes(userProfile, schemes);

  if (eligibleSchemes.length === 0) {
    return res.json({
      reply: "❌ Aapke profile ke according koi scheme match nahi hui."
    });
  }

  res.json({
    reply: "✅ Aap in schemes ke liye eligible hain:",
    schemes: eligibleSchemes.map(s => s.name)
  });
});







router.post("/ask", (req, res) => {
  const { message } = req.body;
  const text = message.toLowerCase();

  let matchedService = null;

  for (const [serviceName, service] of Object.entries(services)) {
    // exact name match
    if (text.includes(serviceName.toLowerCase())) {
      matchedService = serviceName;
      break;
    }

    // keyword match
    if (service.keywords) {
      for (const key of service.keywords) {
        if (text.includes(key.toLowerCase())) {
          matchedService = serviceName;
          break;
        }
      }
    }

    if (matchedService) break;
  }

  if (!matchedService) {
    return res.json({
      reply: "❓ Kripya service select karein ya option par click karein."
    });
  }

  const service = services[matchedService];

  res.json({
    reply: `✔ ${matchedService} ke liye complete guidance yaha di gayi hai."Namaste! Agar aap is scheme ke liye apply karna chahte hain, toh ye rahe zaroori documents,Zyada jaankari yaa apply karne ke liye niche diye gaye Official Portal per click karein.`,
    portal: service.portal,
    link: service.link,
    documents: service.documents,
    steps: service.steps.map(s => ({ text: s }))
  });
});


module.exports = router;
