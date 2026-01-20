const express = require("express");
const router = express.Router();
const services = require("../data/services");

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