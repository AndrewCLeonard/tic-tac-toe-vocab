const router = require("express").Router();
// ??? Need to confirm names of models
const { Player, Picture, Word, Game, Game_Board } = require("../../models");

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
// GET /api/players/1
// ====================================================================================================
router.get("/:id", (req, res) => {
	Player.findOne({
		attributes: { exclude: ["password"] },
        where: {
            id: req.params.id,
        },
        // `include` in sequelize = `join` in SQL
        include: [
            {
                model: 
            },
            {
                model: 
            },
        ]
	})
		.then((dbPlayerData) => res.json(dbPlayerData))
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
// PUT /api/players/1
router.put("/:id", (req, res) => {});

// DELETE /api/players/1
router.delete("/:id", (req, res) => {});

module.exports = router;
