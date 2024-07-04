import express from "express";
import axios from "axios";
import cors from "cors";

const PORT = 8000;

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, console.log(`SERVER STARTED ON PORT ${PORT}`));

app.get('/', (req, res) => {
  res.status(200).json('Сервер работает');
});

app.get('/wabulabudabdab', async (req, res) => {
  const response = await axios.get('https://rickandmortyapi.com/api/character');

  const { results } = response.data;

  const chars = [];

  results.forEach(item => chars.push({name: item.name, image: item.image}));

  res.status(200).send(chars);
});


