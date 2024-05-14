import LoginForm from "@/modules/auth/components/login-form";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Pagina do login</h1>
      <LoginForm/>

    </main>
  );
}
