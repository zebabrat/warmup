module.exports = function warmup(temperature) {
  return temperature * (Math.round(( 9 / 5 ) * 100 ) / 100) + 32;
};
