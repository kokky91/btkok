import Image from "next/image";

export default function LayoutBTKOK({ children }: { children?: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Logo */}
      <header className="flex justify-center items-center py-4 bg-white shadow">
        <Image
          src="/logo-btkok.png" // Zet je logo bestand in /public/logo-btkok.png
          alt="BTKOK logo"
          width={120}
          height={120}
        />
      </header>

      {/* Titelbalk */}
      <div className="bg-white border m-4 p-4">
        <h1 className="text-2xl font-bold text-center">workflow/ stappenplan</h1>
      </div>

      {/* Main Content */}
      <main className="flex flex-1 px-4 pb-4 gap-4">
        {/* Linkerzijde */}
        <div className="flex flex-col w-1/6 items-center">
          {/* Afbeelding placeholder */}
          <div className="w-24 h-24 bg-gray-300 flex items-center justify-center mb-4">
            <span className="text-gray-600">Afbeelding</span>
          </div>
        </div>
        {/* Middenvlak (3D viewer & keuze menu) */}
        <div className="flex-1 flex flex-col border bg-white relative">
          <div className="absolute left-4 top-4 text-gray-600 text-xl">⟳<br/>3D</div>
          <div className="w-full flex justify-end mt-8 mr-12">
            <select className="border rounded p-2">
              <option>keuze menu</option>
            </select>
          </div>
          <div className="flex-grow flex items-center justify-center">
            <span className="text-2xl text-gray-500">3d viewer met watermerk</span>
          </div>
        </div>
        {/* Rechterzijde (sidebar) */}
        <aside className="w-1/4 flex flex-col gap-4">
          <div className="flex-1 bg-gray-500 p-4 flex items-center justify-center">
            <span className="text-xl font-bold text-white">ai wizard reactie</span>
          </div>
          <div className="flex-1 bg-gray-300 p-4 flex items-center justify-center">
            <span className="text-lg text-gray-700">instructie klant<br />ai ontwerpt</span>
          </div>
        </aside>
      </main>

      {/* Footer knoppenbalk */}
      <footer className="flex gap-4 justify-center p-4 bg-gray-200">
        {Array.from({ length: 7 }, (_, i) => (
          <button
            key={i}
            className="bg-gray-700 text-white px-6 py-2 rounded shadow"
          >
            Button
          </button>
        ))}
      </footer>
    </div>
  );
}
