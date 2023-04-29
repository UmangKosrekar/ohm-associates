const orderIdGenerator = (oldId) => {
  let alpha = "A";
  let id = alpha + "11111";
  console.log("oldId", oldId);
  if (oldId) {
    const number = JSON.stringify(parseInt(oldId.orderId.slice(1)) + 1);
    id = alpha + JSON.stringify(parseInt(oldId.orderId.slice(1)) + 1);
  }
  return id;
};

module.exports = orderIdGenerator;
