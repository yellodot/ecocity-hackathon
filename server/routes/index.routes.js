const router = require("express").Router();
const villesRouter = require("./ville.routes");

router.use("villes", villesRouter);

module.exports = router;
