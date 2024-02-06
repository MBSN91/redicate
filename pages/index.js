import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800 text-white">
      <Head>
        <title>Redicate - Coming Soon</title>
        <meta name="description" content="Coming Soon page for Redicate, a professional music artist" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Coming Soon
        </h1>
        <p className="mt-3 text-2xl">
          Get ready for something amazing!
        </p>
        <div className="mt-8">
          <Image src="/redicate-logo-.svg" alt="Music Artist Logo" width={200} height={200} className="object-cover" />
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t border-gray-700">
        Stay tuned for updates.
      </footer>
    </div>
  );
}
