// GitHub: @AleGV258

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    const woopa4 = await prisma.explorer.upsert({
      where: { name: 'Woopa 4' },
      update: {},
      create: {
        name: 'Woopa 4',
				username: 'ajolonauta4',
				mission: 'Java'
      },
    });

    const woopa5 = await prisma.explorer.upsert({
      where: { name: 'Woopa 5' },
      update: {},
      create: {
        name: 'Woopa 5',
				username: 'ajolonauta5',
				mission: 'Node'
      },
    });

    console.log('Create 5 explorers');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }

  try {
    const student = await prisma.student.upsert({
      where: { name: 'Student' },
      update: {},
      create: {
        name: 'Student',
        missionCommander: "carlogilmar",
        enrollments: "MissionNodeJS"
      },
    });

    const student1 = await prisma.student.upsert({
      where: { name: 'Student1' },
      update: {},
      create: {
        name: 'Student1',
        missionCommander: "carlogilmar",
        enrollments: "MissionNodeJS"
      },
    });

    const student2 = await prisma.student.upsert({
      where: { name: 'Student 2' },
      update: {},
      create: {
        name: 'Student 2',
        missionCommander: "carlogilmar",
        enrollments: "MissionNodeJS"
      },
    });

    const student3 = await prisma.student.upsert({
      where: { name: 'Student 3' },
      update: {},
      create: {
        name: 'Student 3',
        missionCommander: "carlogilmar",
        enrollments: "MissionNodeJS"
      },
    });

    const student4 = await prisma.student.upsert({
      where: { name: 'Student 4' },
      update: {},
      create: {
        name: 'Student 4',
        missionCommander: "carlogilmar",
        enrollments: "MissionNodeJS"
      },
    });

    console.log('Create 4 students');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();