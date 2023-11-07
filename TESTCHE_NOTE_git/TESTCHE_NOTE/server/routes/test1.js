const express = require("express");
const router = express.Router();
const testController = require("../controllers/editorController");

//indexpage
router.get("/Testchem", testController.index);
//addpage
router.get("/Testchem/add", testController.displayAddnote);
//addsubmit
router.post("/Testchem/add", testController.addSubmit);
//read
router.get("/Testchem/item/:id", testController.ViewNote);
//update
router.patch("/Testchem/item/:id", testController.UpdateNote);
//delete
router.delete("/Testchem/item-delete/:id", testController.DeleteNote);
//search
router.get("/Testchem/search", testController.Search);
//searchsubmit
router.post("/Testchem/search", testController.SearchSubmit);

module.exports = router;
