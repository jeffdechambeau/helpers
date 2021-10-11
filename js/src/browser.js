const parse = (url) => {
  const breakAt = url.indexOf("?"),
    tail = url.substring(breakAt + 1),
    chunks = tail.split("&");

  return chunks.map((chunk) => {
    const split = chunk.split("=");
    if (split.length < 2) split.push(true);
    return split;
  });
};

const format = (arr) => {
  const pairs = arr.map(([key, value]) => ({ [key]: value }));

  return pairs.reduce((result, current) => {
    for (const key in current) {
      result[key] = current[key];
    }
    return result;
  });
};

const getArgsFromURL = () => {
  const url = window.location.href;
  if (!url.includes("?")) return {};

  const parsed = parse(url);
  return format(parsed);
};

module.exports = { getArgsFromURL };
