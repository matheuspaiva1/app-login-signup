import SignUpForm from "@/modules/auth/components/sign-up-form";

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Pagina do Cadastro</h1>

      <SignUpForm/>
      

    </main>
  );
}
