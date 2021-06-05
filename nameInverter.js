const isHonorific = (name) => {
  return name.includes(".") ? true : false;
};

const nameInverter = function (name) {
  let result = "";
  name = name.trim();
  let splittedArray = [];
  splittedArray = name.split(" ");

  if (name === undefined) {
    throw new Error("Name is undefined...");
  } else if ((splittedArray.length === 1, !isHonorific(name))) {
    return name;
  } else if (splittedArray.length === 2 && splittedArray[0].includes(".")) {
    // Return honorific first-name when passed honorific first-name
    result = splittedArray[0] + " " + splittedArray[1];
    return result;
  } else if (splittedArray.length === 2) {
    // return a last-name, first-name when passed a first and last-name
    result = splittedArray[1] + ", " + splittedArray[0];
    return result;
  } else if (splittedArray.length === 3 && isHonorific(name)) {
    //return a honorific last-name, first-name when passed honorific first-name last-name
    result =
      splittedArray[0] + " " + splittedArray[2] + ", " + splittedArray[1];
    return result;
  } else if (splittedArray.length === 1 && splittedArray[0].includes(".")) {
    // return an empty string when passed a single honorific
    return "";
  } else if (name === "") {
    //return an empty string when passed an empty string
    return "";
  }
};

module.exports = nameInverter;
