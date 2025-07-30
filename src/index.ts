import { create } from 'domain';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  
  // Criação das duas entidades em uma tacada só, somente para exemplo
  const movie = await prisma.movie.create({
    data: {
      title: 'Oppenheimer',
      description: 'A biografia de J. Robert Oppenheimer, o físico teórico que liderou o Projeto Manhattan durante a Segunda Guerra Mundial.',
      releaseDate: new Date('2023-07-21'),
      rating: 8.5,
      diretor: {
        create: {
          name: 'Christopher Nolan',
        }
      },
      details: {
        create: {
          duration: 180,
          genre: 'Drama',
          director: 'Christopher Nolan',
          language: 'English',
        },
      },
    },
  })
}










  // // Inserir os dados na tabela
  // console.log("Iniciando inserção de clientes...");


  // // Busca de Forma Ascendente os Clientes Cadastrados
  // console.log("\n--- Todos os clientes cadastrados ---");
  // const todosClientes = await prisma.clientes.findMany({
  //   orderBy: {
  //     id: 'asc'
  //   }
  // });

  // console.log(`Total de clientes: ${todosClientes.length}`);
  // todosClientes.forEach(cliente => {
  //   console.log(`ID: ${cliente.id} | Nome: ${cliente.nome} | Email: ${cliente.email} | Idade: ${cliente.age} | Nickname: ${cliente.nickname}`);
  // });

  // console.log("\n--- 2ª Forma de Buscar - Informações no Prompt ---");
  // console.log(todosClientes);

  // // Busca por Clientes com um Nome Específico
  // console.log("\n--- Buscando cliente específico: João Silva ---");
  // const joaoCliente = await prisma.clientes.findFirst({
  //   where: {
  //     nome: "João Silva"
  //   }
  // });

  // // Breve verificação caso clientes sejam encontrados
  // if (joaoCliente) {
  //   console.log(`Cliente encontrado: ${joaoCliente.nome} (ID: ${joaoCliente.id})`);
  // } else {
  //   console.log("Cliente não encontrado.");
  // }

  // // Para buscar colunas especificas usamos o select da forma abaixo
  // const users = await prisma.clientes.findMany({
  //   select: {
  //     nome: true,
  //     email: true,
  //   }
  // })

  // // Impressão no Console
  // console.log("\n--- Clientes com nome e email ---");
  // users.forEach(user => {
  //   console.log(`Nome: ${user.nome} | Email: ${user.email}`);
  // });


  // Uma forma de criar no banco de dados
  // const novoCliente = await prisma.clientes.create({
  //   data: {
  //     nome: "Novo Cliente",
  //     email: "novo.cliente@email.com",
  //     age: 30,
  //     nickname: "novo_cliente"
  //   }
  // });

  // console.log(`Novo cliente criado: ${novoCliente.nome} (ID: ${novoCliente.id})`);


  // Forma de Atualizar dados de um Cliente
  // const updateCliente = await prisma.clientes.update({
  //   data: {
  //     age: 35,
  //   },
  //   where: {
  //     email: "novo.cliente@email.com"
  //   }

  // })

  // if (updateCliente) {
  //   console.log(`Informação do cliente atualizado para: ${updateCliente.age} anos`)
  // } else {
  //   console.log("Cliente não encontrado para atualização.");
  // }


// Fim da função main

main()
  .then(() => {
    console.log("\n✅ Script executado com sucesso!");
  })
  .catch(e => {
    console.error("❌ Erro na execução:", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });