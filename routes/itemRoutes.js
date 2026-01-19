import express from 'express';
const router = express.Router();
import Item from '../models/Item.js';



// Create Item
router.post('/', async (req, res) => {
    try {
        const item = await Item.create(req.body);
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get All Items
router.get('/', async (_, res) => {
    const items = await Item.find();
    res.json(items);
});

// Get Single Item
router.get('/:id', async (req, res) => {
    const item = await Item.findById(req.params.id);
    if (!item) {
        return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
});

export default router;
