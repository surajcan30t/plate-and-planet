import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-zinc-50 text-red-500 flex flex-col justify-center items-center text-5xl h-screen">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="pt-40 animate-bounce text-blue-600">
        Return Home
      </Link>
    </div>
  );
}
