import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6">
      <div className="border border-gray-700 bg-gray-900/50 backdrop-blur-md rounded-2xl shadow-lg p-10 text-center max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-6">Faites un choix</h2>
        
        <div className="space-y-4">
          <a
            href="/login"
            className="inline-block bg-amber-100 hover:bg-amber-200 text-gray-700 font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Se Connecter
          </a>
          
          <p className="text-sm text-gray-400">Pas encore inscrit ?</p>
          <a
            href="/register"
            className="inline-block border border-amber-100 text-amber-100 hover:bg-amber-100 hover:text-gray-700 font-semibold px-6 py-3 rounded-full transition-all duration-300"
          >
            S'inscrire
          </a>
        </div>
      </div>
    </main>
  );
}
