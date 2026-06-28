import Link from 'next/link';

export const metadata = {
  title: '401 Unauthorized - Access Denied',
  description: 'You do not have permission to access this page.',
};

export default function Unauthorized() {
  return (
    <div className="flex h-[550px] items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center bg-white p-8 rounded-xl shadow-md border border-gray-100">
        <div className="text-6xl mb-4">🔒</div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">401 - Unauthorized</h1>
        <p className="text-gray-500 mb-6 text-sm sm:text-base leading-relaxed">
          Sorry, you do not have permission to view this page. Please log in with an authorized account to gain access.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link 
            href="/" 
            className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-2.5 rounded-lg transition-colors duration-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}