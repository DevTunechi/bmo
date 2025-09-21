import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#003DA5] text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to BMO Online Banking </h1>
      <p className="mb-8 text-lg text-blue-100">
        Secure • Simple • Modern Banking Experience
      </p>
      <div className="flex gap-4">
        <Link
          href="/auth/login"
          className="bg-white text-[#003DA5] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
        >
          Login
        </Link>
        <Link
          href="/auth/register"
          className="bg-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-900"
        >
          Register
        </Link>
      </div>
    </main>
  );
}
