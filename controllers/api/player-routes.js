const router = require("express").Router();
// commented out next line, don't know what it's for
// const res = require("express/lib/response");
// ??? Need to confirm names of models
//
const { Player } = require("../../models");

// ====================================================================================================
// get all players
// GET /api/players
// ====================================================================================================
router.get("/", (req, res) => {
	Player.findAll({
		attributes: { exclude: ["password"] },
	})
		.then((dbPlayerData) => res.json(dbPlayerData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// ====================================================================================================
// get a single player
// GET /api/players/:id
// ====================================================================================================
router.get("/:id", (req, res) => {
	Player.findOne({
		attributes: { exclude: ["password"] },
		where: {
			Player_ID: req.params.id,
		},
	})
		.then((dbPlayerData) => {
			if (!dbPlayerData) {
				res.status(404).json({ message: "No player found with this id." });
				return;
			}
			res.json(dbPlayerData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// ====================================================================================================
// create a player
// POST /api/players
// ====================================================================================================
router.post("/", (req, res) => {
	// expects {playerName: 'GoLakers', email: 'basketball4life@gmail.com', password: 'kobe24'}
	Player.create({
		playerName: req.body.playerName,
		email: req.body.email,
		password: req.body.password,
	});
});
// ====================================================================================================
// update a player's info
// PUT /api/players/:id
// ====================================================================================================
router.put("/:id", (req, res) => {
	// expects {playerName: 'GoLakers', email: 'basketball4life@gmail.com', password: 'kobe24'}

	// passing in req.body to only update what's passed through
	Player.update(req.body, {
		individualHooks: true,
		where: {
			id: req.params.id,
		},
	})
		.then((dbPlayerData) => {
			if (!dbPlayerData) {
				res.status(404).json({ message: "No player found with this id" });
				return;
			}
			res.json(dbPlayerData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// ====================================================================================================
// DELETE a player
// DELETE /api/players/:id
// ====================================================================================================

router.delete("/:id", (req, res) => {
	Player.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then((dbPlayerData) => {
			if (!dbPlayerData) {
				res.status(404).json({ message: "No player found with this id." });
				return;
			}
			res.json(dbPlayerData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
