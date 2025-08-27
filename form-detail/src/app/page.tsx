export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <main className="w-full max-w-md bg-white shadow-md rounded-2xl p-6 flex flex-col gap-3">

        {/* Encabezado */}
        <header className="flex flex-col gap-3">
          <h1 className="text-lg font-semibold text-black">Appearance</h1>
          <p className="text-xs text-gray-500">
            Set or customize your preferences for the system
          </p>
          <hr className="my-4 text-black" />
        </header>

        {/* Idioma */}
        <section className="flex justify-between items-center pb-4">
          <section className="grid gap-3">
            <label htmlFor="language" className="text-sm font-medium text-black">
              Language
            </label>
            <p className="text-gray-500 text-xs">Select the language of the platform</p>
          </section>
          <select
            id="language"
            className="border rounded-lg text-black px-2 py-1"
          >
            <option>English</option>
            <option>Español</option>
          </select>
        </section>
        <hr className="my-4 text-black" />

        {/* Tema de interfaz */}
        <section className="grid gap-3 pb-4">
          <header>
            <h2 className="text-sm font-medium text-black">Interface theme</h2>
            <p className="text-xs text-gray-500">
              Customize your application appearence
            </p>
          </header>

          <section className="grid grid-cols-3 gap-4">
            <button className="flex flex-col items-center border rounded-lg p-3 cursor-pointer hover:shadow">
              <figure className="w-12 h-8 bg-gradient-to-r from-purple-200 to-white rounded-md" />
              <figcaption className="text-xs text-black mt-1">Auto</figcaption>
            </button>

            <button className="flex flex-col items-center border-2 border-purple-500 rounded-lg p-3 cursor-pointer hover:shadow">
              <figure className="w-12 h-8 bg-white border rounded-md" />
              <figcaption className="text-xs  mt-1 text-purple-600 font-medium">Light</figcaption>
            </button>

            <button className="flex flex-col items-center border rounded-lg p-3 cursor-pointer hover:shadow">
              <figure className="w-12 h-8 bg-purple-700 rounded-md" />
              <figcaption className="text-xs text-black mt-1">Dark</figcaption>
            </button>
          </section>
          <hr className="my-4 text-black" />
        </section>

        {/* Colores de acento */}
        <section className="flex justify-between pb-4">
          <section className="grid gap-3">
            <h2 className="text-sm font-medium text-black">Accent color</h2>
            <p className="text-xs text-gray-500">
              Pick your platform&apos;s main color
            </p>
          </section>

          <section className="flex gap-3">
            <button className="w-6 h-6 rounded-full bg-red-400" />
            <button className="w-6 h-6 rounded-full bg-yellow-400" />
            <button className="w-6 h-6 rounded-full bg-green-400" />
            <button className="w-6 h-6 rounded-full bg-blue-400" />
            <button className="w-6 h-6 rounded-full bg-purple-400" />
            <button className="w-6 h-6 rounded-full bg-pink-400" />
          </section>
        </section>
        <hr className="my-4 text-black" />

        {/* Botonoes */}
        <section className="grid gap-4">
          <label className="flex items-center justify-between">
            <span className="text-sm text-black">◴ Reduce motion</span>
            <input type="checkbox" className="appearance-none w-14 h-7 rounded-full bg-gray-300 checked:bg-indigo-500 relative transition duration-300 cursor-pointer before:content-[''] before:absolute before:w-6 before:h-6 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 before:transition-all checked:before:translate-x-7" defaultChecked />
          </label>
          <hr className="my-4 text-black" />

          <label className="flex items-center justify-between">
            <span className="text-sm text-black">▶Auto play</span>
            <input type="checkbox" className="appearance-none w-14 h-7 rounded-full bg-gray-300 checked:bg-indigo-500 relative transition duration-300 cursor-pointer before:content-[''] before:absolute before:w-6 before:h-6 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 before:transition-all checked:before:translate-x-7" defaultChecked />
          </label>
          <hr className="my-4 text-black" />

          <label className="flex items-center justify-between">
            <span className="text-sm text-black">◳ High quality photo</span>
            <input type="checkbox" className="appearance-none w-14 h-7 rounded-full bg-gray-300 checked:bg-indigo-500 relative transition duration-300 cursor-pointer before:content-[''] before:absolute before:w-6 before:h-6 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 before:transition-all checked:before:translate-x-7" defaultChecked />
          </label>
          <hr className="my-4 text-black" />
        </section>

        {/* Pie de página */}
        <footer className="flex justify-between pt-4">
          <button className="text-sm text-gray-500 hover:underline">
            Reset to default
          </button>
          <nav className="flex gap-2">
            <button className="text-sm px-4 py-2 rounded-lg bg-white text-black hover:bg-black hover:text-white transition-colors">
              Cancel
            </button>
            <button className="text-sm px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700">
              Save Preferences
            </button>
          </nav>
        </footer>
      </main>
    </div>
  );
}
