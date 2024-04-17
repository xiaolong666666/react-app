const sleep = (timer) =>
  new Promise((resolve) => global.setTimeout(resolve, timer));

module.exports = {
  sleep,
};
