const quadOut = (t) => t * (2 - t);

const no = (e) => {
  if (Array.isArray(e) && !e.length) return true;
  if (!e || e == undefined || e == null) return true;
  if (typeof e == "object" && !Object.keys(e).length) return true;
  return false;
};

const has = (e) => !no(e);

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

module.exports = { quadOut, no, has, shuffle };
