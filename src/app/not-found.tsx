import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#0a0e27] text-white flex flex-col items-center justify-center text-center px-4 bg-[url('/grid.svg')] bg-fixed bg-center">
            <div className="text-9xl mb-4">404</div>
            <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
            <p className="text-gray-400 max-w-md mb-8">
                The prompt you entered did not generate a valid page. It seems this path was not in our training data.
            </p>
            <Link
                href="/"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
            >
                Return Home
            </Link>
        </div>
    );
}
