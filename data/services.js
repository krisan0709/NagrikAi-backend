const services = {
  "Income Certificate": {
     keywords: ["income", 'Income','Income Certificate',"income cert", "aay",'Aay', "aay praman patra"],
    portal: "State e-District Portal",
    link: "https://services.india.gov.in/",
    documents: [
      "Aadhaar Card",
      "Address Proof",
      "Income Proof (Salary Slip / ITR)",
      "Passport Size Photo",
      "Processing Time: 7–15 days (state-wise vary karta hai)"
    ],
    steps: [
      "State government portal open karo",
      "Income Certificate option select karo",
      "Personal details bharo",
      "Documents upload karo",
      "Submit karke receipt save karo"
    ]
  },

  "Caste Certificate": {
     keywords: [
  "caste", "Caste",
  "caste certificate", "Caste Certificate",
  "jati", "Jati",
  "jaati", "Jaati",
  "jati praman", "jaati praman patra",
  "sc certificate", "st certificate", "obc certificate"
]
,
    portal: "State e-District Portal",
    link: "https://services.india.gov.in/",
    documents: [
      "Aadhaar Card",
      "Address Proof",
      "Caste Proof (Father/Mother)",
      "Passport Size Photo",
      "Processing Time:⏱️ 15–30 days"
    ],
    steps: [
      "State portal open karo",
      "Caste Certificate option select karo",
      "Category sahi choose karo",
      "Documents upload karo",
      "Application submit karo"
    ]
  },

  "Domicile Certificate": {
    keywords: [
  "domicile", "Domicile",
  "domicile certificate", "Domicile Certificate",
  "niwas", "Niwas",
  "residence", "Residence",
  "niwas praman", "permanent address"
],
 portal: "State e-District Portal",
    link: "https://services.india.gov.in/",
    documents: [
      "Aadhaar Card",
      "Address Proof",
      "Residence Proof",
      "Passport Size Photo",
      "Processing Time:⏱️ 15–30 days"
    ],
    steps: [
      "State portal open karo",
      "Domicile Certificate option select karo",
      "Residence details bharo",
      "Documents upload karo",
      "Submit karo"
    ]
  },

  "PAN Card": {
    keywords: [
  "pan", "PAN",'Pan',
  "pan card", "PAN Card",
  "income tax card",
  "nsdl pan", "new pan",
  "pan apply"
],
    portal: "Income Tax / NSDL Portal",
    link: "https://www.onlineservices.nsdl.com/",
    documents: [
      "Aadhaar Card",
      "Proof of Date of Birth",
      "Passport Size Photo",
      'Processing Time:⏱️ 10–20 days'
    ],
    steps: [
      "Official PAN portal open karo",
      "New PAN / Correction option lo",
      "Form bharo",
      "Documents upload karo",
      "Fee pay karke submit karo"
    ]
  },

  "Driving Licence": {
    keywords: [
  "dl", "DL",'Dl',
  "driving licence", "Driving Licence",
  "driving license", "Driving License",
  "licence", "license",
  "parivahan", "driver license"
],
    portal: "Parivahan Portal",
    link: "https://parivahan.gov.in/",
    documents: [
      "Aadhaar Card",
      "Age Proof",
      "Address Proof",
      "Learner Licence",
      "Processing Time: ⏱️ 15–30 days (test + verification)"
    ],
    steps: [
      "Parivahan.gov.in open karo",
      "DL services option select karo",
      "Slot book karo",
      "Documents verify karwao",
      "Driving test complete karo"
    ]
  },

  "Aadhaar Card": {
    keywords: [
  "aadhaar", "Aadhaar",
  "aadhar", "Aadhar",
  "adhar", "Adhar",
  "uidai", "UIDAI",
  "aadhaar card", "aadhar card"
],

    portal: "UIDAI Portal",
    link: "https://uidai.gov.in/",
    documents: [
      "Identity Proof",
      "Address Proof",
      "Date of Birth Proof",
      'Processing Time:⏱️ 15–30 days (test + verification)'
    ],
    steps: [
      "uidai.gov.in open karo",
      "Enrolment / Update option lo",
      "Appointment book karo",
      "Original documents le jao"
    ]
  },

  "Scholarship": {
    keywords: [
  "scholarship", "Scholarship",
  "student scholarship",
  "govt scholarship",
  "fee help",
  "financial aid",
  "nsp", "NSP"
],
    portal: "National Scholarship Portal",
    link: "https://scholarships.gov.in/",
    documents: [
      "Aadhaar Card",
      "Income Certificate",
      "Caste Certificate (if applicable)",
      "Bank Passbook",
      'Processing Time:⏱️ 30–90 days (scheme-wise)'
    ],
    steps: [
      "scholarships.gov.in open karo",
      "Student registration karo",
      "Scholarship select karo",
      "Documents upload karo",
      "Final submit karo"
    ]
  },

  "Pension": {
    keywords: [
  "pension", "Pension",
  "old age pension",
  "widow pension",
  "vriddha pension",
  "retirement pension"
],

    portal: "State / Central Pension Portal",
    link: "https://www.india.gov.in/",
    documents: [
      "Aadhaar Card",
      "Age Proof",
      "Bank Account Details",
      'Processing Time:⏱️ 30–90 days (scheme-wise)'
    ],
    steps: [
      "Pension portal open karo",
      "Scheme select karo",
      "Details bharo",
      "Documents upload karo",
      "Submit karo"
    ]
  },

  "Ration Card": {
    keywords: [
  "ration", "Ration",
  "ration card", "Ration Card",
  "rashan", "Rashan",
  "food card",
  "bpl card",
  "nfsa", "NFSA"
]
,
    portal: "State Food & Supply Portal",
    link: "https://nfsa.gov.in/",
    documents: [
      "Aadhaar Card",
      "Family Member Aadhaar",
      "Address Proof",
      "Income Proof"
      ,'Processing Time:⏱️ 30–60 days'
    ],
    steps: [
      "State ration portal open karo",
      "New / Update ration card option lo",
      "Family details bharo",
      "Documents upload karo",
      "Submit karo"
    ]
  },

  "Birth Certificate": {
    keywords: [
  "birth certificate", "Birth Certificate",
  "birth cert",
  "janam praman", "Janam Praman",
  "birth registration",
  "newborn certificate"
],
    portal: "Municipal Corporation Portal",
    link: "https://crsorgi.gov.in/",
    documents: [
      "Hospital Birth Slip",
      "Parent Aadhaar",
      "Address Proof",
      'Processing Time:⏱️ 15–30 days'
    ],
    steps: [
      "Municipal portal open karo",
      "Birth registration section lo",
      "Details verify karo",
      "Certificate download karo"
    ]
  },

  "Death Certificate": {
    keywords: [
  "death certificate", "Death Certificate",
  "death cert",
  "mrityu praman", "Mrityu Praman",
  "death registration"
]
,
    portal: "Municipal Corporation Portal",
    link: "https://crsorgi.gov.in/",
    documents: [
      "Hospital Death Slip",
      "Deceased Aadhaar",
      "Applicant ID Proof",
      'Processing Time:⏱️ 7–15 days'
    ],
    steps: [
      "Municipal portal open karo",
      "Death registration option lo",
      "Details verify karo",
      "Certificate download karo"
    ]
  },

  "Voter ID": {
    keywords: [
  "voter id", "Voter ID",
  "voter card",
  "epic card",
  "eci voter",
  "vote card"
]
,
    portal: "Election Commission Portal",
    link: "https://voters.eci.gov.in/",
    documents: [
      "Aadhaar Card",
      "Address Proof",
      "Age Proof",
      'Processing Time:⏱️ 7–15 days'
    ],
    steps: [
      "voters.eci.gov.in open karo",
      "New voter registration karo",
      "Details bharo",
      "Documents upload karo",
      "Submit karo"
    ]
  },

  "Passport": {
    keywords: [
  "passport", "Passport",
  "passport apply",
  "passport seva",'visa','Visa',
  "travel document"
]
,
    portal: "Passport Seva Portal",
    link: "https://www.passportindia.gov.in/",
    documents: [
      "Aadhaar Card",
      "Address Proof",
      "Date of Birth Proof",
      'Processing Time:⏱️ 15–30 days'
    ],
    steps: [
      "passportindia.gov.in open karo",
      "Register / Login karo",
      "Form bharo",
      "Appointment book karo",
      "Verification complete karo"
    ]
  },

  "Marriage Certificate": {
    keywords: [
  "marriage certificate", "Marriage Certificate",
  "vivah praman", "Vivah Praman",
  "shaadi certificate",
  "marriage registration",'saadi','Saadi','sadi','Sadi'
]
,
    portal: "State Marriage Registration Portal",
    link: "https://www.india.gov.in/",
    documents: [
      "Bride & Groom Aadhaar",
      "Marriage Proof",
      "Address Proof",
      'Processing Time:⏱️ 7–30 days'
    ],
    steps: [
      "Marriage portal open karo",
      "Registration form bharo",
      "Documents upload karo",
      "Submit karo"
    ]
  },

  "Disability Certificate": {
    keywords: [
  "disability certificate", "Disability Certificate",
  "divyang", "Divyang",
  "handicap certificate",
  "pwd certificate",
  "udid", "UDID"
]
,
    portal: "UDID Portal",
    link: "https://www.swavlambancard.gov.in/",
    documents: [
      "Aadhaar Card",
      "Medical Certificate",
      "Photograph",
      'Processing Time:⏱️ 30–45 days'
    ],
    steps: [
      "UDID portal open karo",
      "Registration karo",
      "Medical details bharo",
      "Documents upload karo",
      "Submit karo"
    ]
  }
};

module.exports = services;