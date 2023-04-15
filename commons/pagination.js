const pagination = (page = 1, limit = 10, key = "_id", desc = false) => {
  const sort = { key: desc ? -1 : 1 };
  console.log("sort page", sort);
  const skip = limit * (page - 1);
  console.log("limit page", limit);
  console.log("skip page", skip);

  return skip, sort, limit;
};

module.exports = pagination;
