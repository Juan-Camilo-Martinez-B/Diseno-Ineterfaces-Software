import Image from "next/image";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      {/* Contenedor principal*/}
      <div className="grid grid-cols-1 md:grid-cols-2 w-[900px] shadow-lg rounded-2xl overflow-hidden relative border-2 border-black">
        
        {/* Columna izquierda */}
        <div className="flex items-center justify-center bg-white relative shadow-2xl">
          {/* Recuadro interno */}
          <div className="relative w-80 h-80 border-2 border-gray-100 rounded-xl shadow-lg flex items-center justify-center bg-amber-50">
            {/* Icono */}
            <div className="absolute -right-10 md:-right-10 z-20">
              <Image 
                src="/Raptor.svg" 
                alt="Raptor Icon" 
                width={300} 
                height={300} 
                className="drop-shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Columna derecha*/}
        <div className="flex flex-col items-center justify-center px-10 py-12 bg-white relative z-10 w-full">
          <div className="absolute top-4 right-6 text-sm text-gray-600">
            Don’t have an account?{" "}
            <span className="font-semibold text-sky-500 hover:underline cursor-pointer">
              Sign Up
            </span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 drop-shadow-sm mb-2">
            Sign in
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Sign in with open account
          </p>

          {/* Botones de login*/}
          <div className="flex gap-4 mb-6 w-full justify-center">
            <button className="border rounded-lg px-6 py-2 w-32 shadow-sm hover:bg-gray-100 transition text-black">
              Google
            </button>
            <button className="border rounded-lg px-6 py-2 w-32 shadow-sm hover:bg-gray-100 transition text-black">
              Apple ID
            </button>
          </div>

          <div className="w-full mb-6">
            <hr className="border-t border-gray-500" />
          </div>

          {/* Formulario */}
          <form className="w-full flex flex-col gap-4 text-black">
            <input
              type="email"
              placeholder="Email"
              className="border rounded-lg px-4 py-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="border rounded-lg px-4 py-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-sky-400 hover:bg-sky-500 text-white font-medium rounded-lg py-2 mt-2 shadow-md transition"
            >
              Start training
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
