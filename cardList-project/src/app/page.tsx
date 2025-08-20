export default function Home() {
  return (
    <div className="flex items-center justify-center bg-indigo-200 w-screen h-screen">
      <main className="bg-white p-4 rounded-2xl w-96">

        <header className="flex justify-between text-sm text-gray-500">
          <time dateTime="2025-02-18">Tue Feb 18 2025</time>
          <time>9:31:25 p.m.</time>
        </header>

        <h1 className="text-lg font-semibold text-blue-900 mt-2">List Tailwind</h1>

        <section className="mt-3">
          <div className="grid grid-cols-7 text-center text-sm text-gray-500">
            <span>s</span>
            <span>m</span>
            <span>t</span>
            <span>w</span>
            <span>t</span>
            <span>f</span>
            <span>s</span>
          </div>
          <div className="grid grid-cols-7 text-center text-sm text-gray-700 mt-1">
            <span>24</span>
            <span>25</span>
            <span>26</span>
            <span>27</span>
            <span>28</span>
            <span>29</span>
            <span>30</span>
          </div>
        </section>

        <section className="mt-4">
          <ul className="flex flex-col gap-3">
            <li className="grid grid-cols-[1fr_auto] items-center bg-indigo-100 p-2 rounded-lg">
              
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 flex items-center justify-center bg-green-500 rounded-full text-white text-xs">✓</span>
                <span className="line-through text-gray-600 text-sm font-medium">take out the trash</span>
              </div>

              <time className="text-sm font-semibold text-gray-600 pl-4">9:00 AM</time>
            </li>

            <li className="grid grid-cols-[1fr_auto] items-center bg-indigo-100 p-2 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 flex items-center justify-center bg-green-500 rounded-full text-white text-xs">✓</span>
                <span className="line-through text-gray-600 text-sm font-medium">do homework</span>
              </div>
              <time className="text-sm font-semibold text-gray-600 pl-4">12:00 PM</time>
            </li>

            <li className="grid grid-cols-[1fr_auto] items-center bg-indigo-100 p-2 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 flex items-center justify-center border-2 border-gray-300 rounded-full"></span>
                <span className="text-gray-600 text-sm font-medium">go to grocery store</span>
              </div>
              <time className="text-sm font-semibold text-gray-600 pl-4">1:00 PM</time>
            </li>

            <li className="grid grid-cols-[1fr_auto] items-center bg-indigo-100 p-2 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 flex items-center justify-center border-2 border-gray-300 rounded-full"></span>
                <span className="text-gray-600 text-sm font-medium">run 5 kilometers</span>
              </div>
              <time className="text-sm font-semibold text-gray-600 pl-4">4:20 PM</time>
            </li>

            <li className="grid grid-cols-[1fr_auto] items-center bg-indigo-100 p-2 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 flex items-center justify-center border-2 border-gray-300 rounded-full"></span>
                <span className="text-gray-600 text-sm font-medium">load the dishwasher</span>
              </div>
              <time className="text-sm font-semibold text-gray-600 pl-4">9:00 PM</time>
            </li>

            <li className="grid grid-cols-[1fr_auto] items-center bg-indigo-100 p-2 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 flex items-center justify-center border-2 border-gray-300 rounded-full"></span>
                <span className="text-gray-600 text-sm font-medium">Take out the trash</span>
              </div>
              <time className="text-sm font-semibold text-gray-600 pl-4">9:00 AM</time>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
