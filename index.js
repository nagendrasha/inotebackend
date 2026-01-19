import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import itemRoutes from './routes/itemRoutes.js';
import noteRoutes from './routes/NoteRoutes.js';

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (_, res) => {
    res.send('MongoDB API Running');
});


app.use('/items', itemRoutes);
app.use('/notes', noteRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
