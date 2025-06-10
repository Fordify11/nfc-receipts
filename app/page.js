export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
          Fordify Receipts
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Revolutionising the way receipts are delivered — seamlessly via NFC.
        </p>

        <div className="bg-gray-100 p-6 rounded-2xl shadow-md text-left">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">What we built</h2>
          <p className="text-gray-700 mb-4">
            This platform enables merchants to issue receipts using NFC taps.
            Customers simply tap their phone and instantly view a digital receipt — no paper, no fuss.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Key Features</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Instant digital receipts via NFC</li>
            <li>Email receipt delivery with one tap</li>
            <li>Secure, tokenized receipt links</li>
            <li>Reusable for demos and real use cases</li>
          </ul>

          <a
            href="/api/random-token"
            className="inline-block w-full text-center mt-4 bg-black text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-900 transition"
          >
            Try a Sample Receipt
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          &copy; {new Date().getFullYear()} Fordify Limited
        </p>
      </div>
    </main>
  );
}

