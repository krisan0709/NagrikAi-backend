// backend/utils/matcher.js

function isEligible(user, scheme) {
  const conditions = scheme.conditions;

  for (let key in conditions) {
    const schemeValue = conditions[key];
    const userValue = user[key];

    // user ne detail hi nahi di
    if (!userValue) return false;

    // multiple allowed values
    if (Array.isArray(schemeValue)) {
      if (!schemeValue.includes(userValue)) return false;
    } 
    // single value
    else {
      if (schemeValue !== userValue) return false;
    }
  }

  return true;
}

function getEligibleSchemes(user, schemes) {
  return schemes.filter(scheme => {
    // startup scheme tabhi jab user startup ho
    if (scheme.type === "startup" && user.isStartup !== "yes") {
      return false;
    }

    return isEligible(user, scheme);
  });
}

module.exports = {
  getEligibleSchemes
};
