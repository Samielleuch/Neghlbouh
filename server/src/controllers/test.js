module.exports = {
  test(req, res) {
   console.log(req.params.text);
   res.send({msg:"cbn"})
}
};
