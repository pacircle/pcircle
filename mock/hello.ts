export default {

  ['GET /api/hello'](req, res) {
    res.json({hello: [1, 2]})
  }
}
