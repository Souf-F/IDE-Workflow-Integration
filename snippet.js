// snippet.js - a small function that needs cleanup
function checkUser(u) {
  // Compute simple named conditions to make the logic easier to read.
  const isAdult = u.age > 18;
  const isSubscribed = u.subscribed == true;
  const isNotFromFrance = u.country != "FR";

  // Return true only when all three conditions are met, otherwise false.
  if (isAdult && isSubscribed && isNotFromFrance) {
    return true;
  }
  return false;
}
function describeUser(u) {}