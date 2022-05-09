// GitHub: @AleGV258

const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Cors
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {  
  res.json({message: 'alive'});
});

// EXPLORERS

// Recibir explorers
app.get('/explorers', async (req, res) => {
    const allExplorers =  await prisma.explorer.findMany({});    
    res.json(allExplorers);
});

// Recibir explorers por ID
app.get('/explorers/:id', async (req, res) => {
    const id = req.params.id;
    const explorer = await prisma.explorer.findUnique({where: {id: parseInt(id)}});    
    res.json(explorer);
});

// Crear nuevos explorers con POST
app.post('/explorers/', async (req, res) => {
    const explorer = {
      name: req.body.name,
      username: req.body.username,
      mission: req.body.mission
     };
    const message = 'Explorer creado.';
    await prisma.explorer.create({data: explorer});    
    return res.json({message});
});

// Actualizar explorers con PUT
app.put('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.explorer.update({
		where: {
			id: id
		},
		data: {
			mission: req.body.mission
		}
	})
  
  return res.json({message: "Actualizado correctamente"});
});

// Borrar explorers
app.delete('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.explorer.delete({where: {id: id}});  
  return res.json({message: "Eliminado correctamente"});
});

// STUDENTS

// Recibir students
app.get('/students', async (req, res) => {
    const allStudents =  await prisma.student.findMany({});    
    res.json(allStudents);
});

// Recibir students por ID
app.get('/students/:id', async (req, res) => {
    const id = req.params.id;
    const student = await prisma.student.findUnique({where: {id: parseInt(id)}});    
    res.json(student);
});

// Crear nuevos students con POST
app.post('/students/', async (req, res) => {
    const student = {
      name: req.body.name,
      missionCommander: req.body.missionCommander,
      enrollments: req.body.enrollments
     };
    const message = 'Student creado.';
    await prisma.student.create({data: student});    
    return res.json({message});
});

// Actualizar students con PUT
app.put('/students/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.student.update({
		where: {
			id: id
		},
		data: {
      missionCommander: req.body.missionCommander,
      enrollments: req.body.enrollments
		}
	})
  
  return res.json({message: "Student actualizado correctamente"});
});

// Borrar students
app.delete('/students/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.student.delete({where: {id: id}});  
  return res.json({message: "Student eliminado correctamente"});
});

// MISSION COMMANDERS

// Recibir mission Commander
app.get('/missionCommander', async (req, res) => {
  const allMissionCommander =  await prisma.missionCommander.findMany({});    
  res.json(allMissionCommander);
});

// Recibir Mission Commander por ID
app.get('/missionCommander/:id', async (req, res) => {
  const id = req.params.id;
  const missionCommander = await prisma.missionCommander.findUnique({where: {id: parseInt(id)}});    
  res.json(missionCommander);
});

// Crear nuevos Mission Commanders con POST
app.post('/missionCommander', async (req, res) => {
  const missionCommander = {
    name: req.body.name,
    username: req.body.username,
    mainStack: req.body.mainStack
  };
  const message = 'Mission Commander creado.';
  await prisma.missionCommander.create({data: missionCommander});    
  return res.json({message});
});

// Actualizar Mission Commander con PUT
app.put('/missionCommander/:id', async (req, res) => {
  const id = parseInt(req.params.id);

  await prisma.missionCommander.update({
  where: {
    id: id
  },
  data: {
    username: req.body.username,
    mainStack: req.body.mainStack
  }
})

return res.json({message: "Mission Commander actualizado correctamente"});
});

// Borrar Mission Commander
app.delete('/missionCommander/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  await prisma.missionCommander.delete({where: {id: id}});  
  return res.json({message: "Mission Commander eliminado correctamente"});
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});