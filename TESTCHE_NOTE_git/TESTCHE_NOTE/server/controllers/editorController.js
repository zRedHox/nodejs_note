// Import the necessary modules and models
const Note = require("../models/editorNote");
const axios = require("axios");

exports.displayAddnote = async (req, res) => {
  const locals = {
    title: "Addnote",
    description: "test texteditor",
  };

  res.render("texteditor/bodyeditor", {
    locals,
    layout: "../views/layouts/mainpage_editor",
  });
};

// Function to retrieve all notes
exports.index = async (req, res) => {
  const perPage = 4;
  const page = req.query.page || 1;
  try {
    const response = await axios.get("http://172.17.20.27:4999/api/getAll");
    let notes = response.data;

    // Convert createdAt values to Date objects
    notes = notes.map((note) => ({
      ...note,
      createdAt: new Date(note.createdAt),
    }));

    // Sort the notes by createdAt field in descending order
    notes = notes.sort((a, b) => b.createdAt - a.createdAt);

    const count = notes.length;
    const totalPages = Math.ceil(count / perPage);
    const currentPage = parseInt(page);

    // Calculate the start and end indices for the current page
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;

    // Extract the notes for the current page
    const notesForPage = notes.slice(startIndex, endIndex);

    res.render("texteditor/index", {
      notes: notesForPage,
      layout: "../views/layouts/mainpage_editor",
      current: currentPage,
      pages: totalPages,
    });
  } catch (error) {
    console.log(error);
  }
};

//add
// POST route to save the editor content
exports.addSubmit = async (req, res) => {
  const { title, user, editorContent } = req.body;

  try {
    // Create a new Note instance
    const note = new Note({
      title,
      user,
      content: editorContent,
    });
    console.log(note);

    // Send a POST request to the API endpoint
    await axios.post("http://172.17.20.27:4999/api/post", note);

    // Redirect or send a success response
    res.redirect("/Testchem"); // Example redirect to a notes page
  } catch (error) {
    console.log(error);
    // Handle the error
    res.status(500).send("Internal Server Error");
  }
};

// GET
// View Specific Note
//
exports.ViewNote = async (req, res) => {
  try {
    const noteId = req.params.id;

    // Send a GET request to the API endpoint
    const response = await axios.get(
      `http://172.17.20.27:4999/api/getOne/${noteId}`
    );

    if (response.data) {
      const note = response.data;

      res.render("texteditor/editor_for_edit", {
        noteID: req.params.id,
        note,
        layout: "../views/layouts/mainpage_editor",
      });
    } else {
      res.send("Note not found.");
    }
  } catch (error) {
    console.log(error);
    res.send("Something went wrong.");
  }
};

// PATCH route to update a specific note
exports.UpdateNote = async (req, res) => {
  const noteId = req.params.id;
  const { editorContent } = req.body;

  try {
    // Send a PATCH request to the API endpoint
    await axios.patch(`http://172.17.20.27:4999/api/update/${noteId}`, {
      content: editorContent,
    });

    res.redirect("/Testchem");
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong.");
  }
};

/**
 * DELETE /
 * Delete Note
 */
exports.DeleteNote = async (req, res) => {
  try {
    const noteId = req.params.id;

    // Send a DELETE request to delete the note
    const response = await axios.delete(
      `http://172.17.20.27:4999/api/delete/${noteId}`
    );

    if (response.status === 200) {
      res.redirect("/Testchem");
    } else {
      res.redirect("/Testchem");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong" });
  }
};

/**
 * GET /
 * Search
 */
exports.Search = async (req, res) => {
  try {
    res.render("texteditor/search_display", {
      searchResults: "",
      layout: "../views/layouts/mainpage_editor",
    });
  } catch (error) {}
};

/**
 * POST /
 * Search For Notes
 */
exports.SearchSubmit = async (req, res) => {
  try {
    const searchTerm = req.body.searchTerm;

    // Send a POST request to search for notes
    const response = await axios.post("http://172.17.20.27:4999/api/search", {
      searchTerm,
    });

    const searchResults = response.data;

    res.render("texteditor/search_display", {
      searchResults,
      layout: "../views/layouts/mainpage_editor",
    });
  } catch (error) {
    console.log(error);
  }
};
