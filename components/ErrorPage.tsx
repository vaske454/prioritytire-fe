'use client';

export default function ErrorPage({ message }: { message: string }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>
        <h1>Error</h1>
        <p>{message}</p>
      </div>
    </main>
  );
}
