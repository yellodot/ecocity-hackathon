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

router.post("/", (req, res) => {
  const { id, nom, img, traitement_dechet, espace_vert, qualite_eau, piste_cyclable, transports, budget, qualite_air, label, nb_habitant, bobo_compatible } =
    req.body;
  connection.query(
    "INSERT INTO ville (nom, img, traitement_dechet, espace_vert, qualite_eau, piste_cyclable, transports, budget, qualite_air, label, nb_habitant, bobo_compatible) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [nom, img, traitement_dechet, espace_vert, qualite_eau, piste_cyclable, transports, budget, qualite_air, label, nb_habitant, bobo_compatible],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error saving the town");
      } else {
        const id = result.insertId;
        const createdVille = {
          nom,
          img, 
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

/*
router.put("/:id", (req, res) => {
  const villeId = req.params.id;
  const db = connection.promise();
  let existingVille = null;
  db.query("SELECT * FROM ville WHERE id = ?", [villeId])
    .then(([results]) => {
      existingVille = results[0];
      if (!existingVille) return Promise.reject("RECORD_NOT_FOUND");
      return db.query("UPDATE ville SET ? WHERE id = ?", [req.body, villeId]);
    })
    .then(() => {
      res.status(200).json({ ...existingVille, ...req.body });
    })
    .catch((err) => {
      console.error(err);
      if (err === "RECORD_NOT_FOUND")
        res.status(404).send(`Ville with id ${villeId} not found.`);
      else res.status(500).send("Error updating a town");
    });
});
*/

/*
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
