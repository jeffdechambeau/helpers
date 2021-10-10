const async_each = async (list, callback) => {
  if (!list || list == undefined) return;
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    await callback(item, i);
  }
};

const async_map = async (list, callback) => {
  if (!list || list == undefined) return null;

  let output = [];

  for (let i = 0; i < list.length; i++) {
    const item = list[i],
      result = await callback(item, i);
    output.push(result);
  }
  return output;
};

module.exports = { async_each, async_map };
