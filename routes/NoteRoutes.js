const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// Create Note
router.post('/', async (req, res) => {
    try {
        const note = await Note.create(req.body);
        res.status(201).json(note);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get All Notes
router.get('/', async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
});

// Get Single Note
router.get('/:id', async (req, res) => {
    const note = await Note.findById(req.params.id);
    if (!note) {
        return res.status(404).json({ message: 'Note not found' });
    }
    res.json(note);
});

module.exports = router;