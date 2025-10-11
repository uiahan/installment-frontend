import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col justify-center items-center">
      <div className="shadow p-5 w-[30rem] bg-base-300 rounded-xl">
        <div className="flex justify-center flex-col text-center">
          <h1 className="text-4xl font-bold">Installment Cars</h1>
          <p className="mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae sequi impedit.</p>
        </div>
        <form action="">
          <div className="flex flex-col mt-5">
            <div>
              <label htmlFor="" className="font-semibold">Email</label>
            </div>
            <div>
              <input type="text" placeholder="Masukan email" className="border-gray border border-gray-700 w-full rounded-md py-1 px-3" />
            </div>
          </div>
          <div className="flex flex-col mt-3">
            <div>
              <label htmlFor="" className="font-semibold">Password</label>
            </div>
            <div>
              <input type="password" placeholder="Masukan password" className="border-gray border border-gray-700 w-full rounded-md py-1 px-3" />
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <Link to="/dashboard" className="bg-blue-600 text-white px-7 py-2 rounded-lg hover:bg-blue-900 transition-colors">Login</Link>
          </div>
        </form>
      </div>
      <div className="mt-5">
        {/* <p className="text-black">Copyright © 2025 - LKSP Jabar Web Technologies</p> */}
      </div>
    </div>
  );
}

export default Login;
