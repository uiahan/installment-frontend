import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login Gagal!");
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex flex-col justify-center items-center">
      <div className="shadow-xl p-10 w-[33rem] bg-base-300 rounded-xl">
        <div className="flex justify-center flex-col text-center">
          <h1 className="text-4xl font-bold">Installment Cars</h1>
          <p className="mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae sequi impedit.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mt-5">
            <div>
              <label htmlFor="">ID Card</label>
            </div>
            <div className="mt-1">
              <input
               {...register("id_card_number", { required: true })}
               type="text" placeholder="Masukan email" autoComplete="off" className="border-gray border border-gray-700 w-full rounded-md py-1 px-3" />
            </div>
          </div>
          <div className="flex flex-col mt-3">
            <div>
              <label htmlFor="">Password</label>
            </div>
            <div className="mt-1">
              <input
               {...register("password", {required: true})} 
               type="password" placeholder="Masukan password" className="border-gray border border-gray-700 w-full rounded-md py-1 px-3" />
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <button type="submit" disabled={isSubmitting} className="btn btn-warning w-full font-bold">{isSubmitting ? "Memproses..." : "Login"}</button>
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
