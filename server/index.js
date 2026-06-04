import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 4000;


app.use(express.json());
app.use(cors());

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});