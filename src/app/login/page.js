"use client";
import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginProgress, setLoginProgress] = useState(false);
  const [error, setError] = useState(false);

  async function handleFormSubmit(event) {
    event.preventDefault();
    setLoginProgress(true);

    await signIn("credentials", { email, password });

    setLoginProgress(false);
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          disabled={loginProgress}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          disabled={loginProgress}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit" disabled={loginProgress}>
          Login
        </button>
        <div className="text-center my-4 text-gray-500">
          or login with provider
        </div>
        <button className="flex gap-4 justify-center">
          <Image src="/google.png" alt="" width={24} height={24} />
          Login with google
        </button>
      </form>
    </section>
  );
}
