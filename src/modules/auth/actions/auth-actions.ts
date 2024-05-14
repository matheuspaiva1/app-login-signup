import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { redirect } from "next/navigation";

const prisma = new PrismaClient()

async function createAccount(formData: FormData) {
  'use server';

  try {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const hashPassword = await bcrypt.hash(password, 10)



    await prisma.user.create({
      data: {
        name,
        email,
        password: '',
      }
    })

    alert('cadastrado com Sucesso')

    redirect('/portal/login')
  } catch (e) {
    console.error(e)
    alert('Erro ao cadastrar')
  }
}

const AuthActions = {
  createAccount,
}

export default AuthActions;