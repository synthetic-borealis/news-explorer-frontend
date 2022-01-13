import domainBlacklist from "./domainBlacklist";

function isThrowawayEmail(email) {
  const emailDomain = email.split("@")[1];

  return domainBlacklist.includes(emailDomain);
}

export { isThrowawayEmail };
