const express = require('express');
const app = express();
const port=3000;
app.use(express.json());

//Middleware d'analyse du JSON les requêtes
app.use(express.json());

let produits = [
    {id: 1, nom: "Thé Vert Matcha", prix: 12.99, quantite: 10 },
    {id: 2, nom: "Café arabica", prix: 12.99, quantite: 20 },
];

//Routes
// GET /produits
//liste de produits
app.get("/produits", (req,res) => {
    res.json (produits);
})

// POST

app.post('/produits', (req, res) => {
  const { id, nom, prix, quantite } = req.body

  const nouveauProduit = {
      id,
      nom,
      prix,
      quantite
  }

  produits.push(nouveauProduit)
    res.status(200).json(produits)

})

// PUT
app.put('/produits/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let produit = produits.find(produits => produits.id === id)
    produit.nom =req.body.nom,
        produit.prix =req.body.prix,
        produit.quantite =req.body.quantite,
        res.status(200).json(produits)})

// DELETE
app.delete('/produits/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let produit = produits.find(produits => produits.id === id)
    produits.splice(produits.indexOf(produit),1)
    res.status(200).json(produits)})


//Démarrage du serveur
app.listen(port, () => {
    console.log (`le serveur est démarré sur http://localhost:${port}`);
})