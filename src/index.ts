import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {

  const clientes = await prisma.clientes.findMany();
  console.log(clientes);
}

main().then(()=>{console.log("query executada com sucesso, através do prisma")}).catch(e => {console.error(e)}).finally(async () => {await prisma.$disconnect();

});