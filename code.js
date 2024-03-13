// Random auto code generate

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomString(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function generateRandomCode() {
  const codeLength = getRandomInt(50, 100);
  let code = "";
  for (let i = 0; i < codeLength; i++) {
    const randomNumber = getRandomInt(1, 3);
    switch (randomNumber) {
      case 1:
        code += generateRandomString(getRandomInt(3, 10)) + " ";
        break;
      case 2:
        code +=
          'console.log("' + generateRandomString(getRandomInt(5, 20)) + '"); ';
        break;
      case 3:
        code +=
          "if (" +
          generateRandomString(1) +
          " === " +
          getRandomInt(0, 1) +
          ") { ";
        break;
      default:
        break;
    }
  }
  return code;
}

const randomCode = generateRandomCode();
console.log(randomCode);
