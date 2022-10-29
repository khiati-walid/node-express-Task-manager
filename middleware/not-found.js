const NotFound = (req, res) => {
  res.status(404).send("Unknown, Route not found");
};

module.exports = NotFound;
