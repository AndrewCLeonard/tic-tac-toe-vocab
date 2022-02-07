const router = require("express").Router();

const apiRoutes = require("./api");

const homeRoutes = require("./home-routes.js");

router.use("/", homeRoutes);
  
router.use("/api", apiRoutes);

router.use((req, res) => {
	res.status(404).json({ message: `404 error in controllers/index.js` }).end();
	// res.status(404).end(); // change back to this line once debugging complete
});

module.exports = router;
