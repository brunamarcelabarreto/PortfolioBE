import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma =  new PrismaClient();
const app = express();

app.use(express.json());

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.post('/users', async (req, res) => {
  const {name, email, password } = req.body;
  const user = await prisma.user.create({
    data: {
      name, 
      email,
      password,
    },
  });
  res.json(user);
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
})