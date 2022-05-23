// Code your solution here
function findMatching(name, string) {
  return name.filter(
    (possibleMatch) => possibleMatch.toLowerCase() === string.toLowerCase()
  );
}

function fuzzyMatch(name, testString) {
  return name.filter(
    (possibleMatch) =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
  );
}

function matchName(name, soughtName) {
  return name.filter((record) => record.name === soughtName);
}