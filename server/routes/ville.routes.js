const connection = require("../db-config");
const router = require("express").Router();

router.get("/", (req, res) => {
  connection.query("SELECT * FROM ville", (err, result) => {
    if (err) {
      res.status(500).send("Error retrieving villes from database");
    } else {
      res.json(result);
    }
  });
});

router.get("/:id", (req, res) => {
  const villeId = req.params.id;
  connection.query(
    "SELECT * FROM ville WHERE id=?",
    [villeId],
    (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving ville from database");
      } else {
        if (results.length) res.json(results[0]);
        else res.status(404).send("Ville not found");
      }
    }
  );
});
/*
router.post("/", (req, res) => {
  const { id, nom, image, traitement_dechet, espace_vert, qualite_eau, piste_cyclable, transports, budget, qualite_air, label, nb_habitant, bobo_compatible } =
    req.body;
  connection.query(
    "INSERT INTO ville (id, nom, image, traitement_dechet, espace_vert, qualite_eau, piste_cyclable, transports, budget, qualite_air, label, nb_habitant, bobo_compatible) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [id, nom, image, traitement_dechet, espace_vert, qualite_eau, piste_cyclable, transports, budget, qualite_air, label, nb_habitant, bobo_compatible],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error saving the town");
      } else {
        const id = result.insertId;
        const createdVille = {
          id,
          nom,
          image, 
          traitement_dechet, 
          espace_vert, 
          qualite_eau, 
          piste_cyclable, 
          transports, 
          budget, 
          qualite_air, 
          label, 
          nb_habitant, 
          bobo_compatible,
        };
        res.status(201).json(createdVille);
      }
    }
  );
});
*/
/*
  router.put("/:id", (req, res) => {
    const heroId = req.params.id;
    const db = connection.promise();
    let existingHero = null;
    db.query("SELECT * FROM hero WHERE id = ?", [heroId])
      .then(([results]) => {
        existingHero = results[0];
        if (!existingHero) return Promise.reject("RECORD_NOT_FOUND");
        return db.query("UPDATE hero SET ? WHERE id = ?", [req.body, heroId]);
      })
      .then(() => {
        res.status(200).json({ ...existingHero, ...req.body });
      })
      .catch((err) => {
        console.error(err);
        if (err === "RECORD_NOT_FOUND")
          res.status(404).send(`Hero with id ${heroId} not found.`);
        else res.status(500).send("Error updating an hero");
      });
  });

  router.delete("/:id", (req, res) => {
    connection.query(
      "DELETE FROM hero WHERE id = ?",
      [req.params.id],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error deleting an hero");
        } else {
          if (result.affectedRows) res.status(200).send("🎉 Hero deleted!");
          else res.status(404).send("Hero not found.");
        }
      }
    );
  });
});

*/
module.exports = router;
