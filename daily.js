// day34 ,2631. Group By

Array.prototype.groupBy = function(fn) {
  const result = {};

  for (const item of this) {
    const key = fn(item); // must return a string

    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(item);
  }

  return result;
};
