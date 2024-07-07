import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Show disponiveis</h1>
      <div className="grid grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg">
          <img />
          <div className="p-4">
            <h2 className="text-xl text-black font-bold">Show do Belarmino</h2>
            <p className="text-grey-700 mt-2">Sab, 13/07/2024</p>
            <p className="text-grey-700 mt-2">Tem 1 lugar disponivel</p>
            <p className="text-grey-700 mt-2">R$ 100,00</p>
            <p>
              <button>Reservar lugar</button>
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg">
          <img />
          <div className="p-4">
            <h2 className="text-xl text-black font-bold">Show do Belarmino</h2>
            <p className="text-grey-700 mt-2">Sab, 13/07/2024</p>
            <p className="text-grey-700 mt-2">Tem 1 lugar disponivel</p>
            <p className="text-grey-700 mt-2">R$ 100,00</p>
            <p>
              <button>Reservar lugar</button>
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg">
          <img />
          <div className="p-4">
            <h2 className="text-xl text-black font-bold">Show do Belarmino</h2>
            <p className="text-grey-700 mt-2">Sab, 13/07/2024</p>
            <p className="text-grey-700 mt-2">Tem 1 lugar disponivel</p>
            <p className="text-grey-700 mt-2">R$ 100,00</p>
            <p>
              <button>Reservar lugar</button>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
