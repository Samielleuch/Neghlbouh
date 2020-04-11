module.exports = {
  test(req, res) {
   res.send('hello world');
   console.log(new Date().getHours());
}
};
