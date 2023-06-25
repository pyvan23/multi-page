import Image from "next/image";
import { SideBar } from "../components/SideBar";

export default function PageOne() {
  return (
    <main
      className="flex flex-col sm:flex-row items-center justify-center p-3 m-5 bg-white rounded"
      style={{ borderRadius: "10px", margin: "30px" }}
    >
      <SideBar />
      <section className="flex-grow flex flex-col items-center justify-center sm:w-3/4">
        <h1 className="text-black">Información Personal</h1>

        <p className="text-gray-500 mt-1 mb-4">
          El panda se ha convertido en el símbolo del WWF. El conocido logo del
          panda de WWF se originó a partir de un panda llamado Chi Chi que fue
          trasladado del zoológico de Beijing al zoológico de Londres en el
          mismo año de la creación del WWF.
        </p>
        <form className="ml-4 mt-4">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="rounded border border-black px-2 py-1 w-full sm:w-auto"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correo Electrónico:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="rounded border border-black px-2 py-1 w-full sm:w-auto"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Teléfono:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="rounded border border-black px-2 py-1 w-full sm:w-auto"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Enviar
          </button>
        </form>
      </section>
    </main>
  );
}
