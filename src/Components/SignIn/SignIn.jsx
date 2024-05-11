import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEyeSlash, FaGoogle, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
// import signSideImg from "../../assets/images/login.svg";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInWithEmailAndPass, googleSignIn } = useContext(AuthContext)

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    //sign in with email and pass
    signInWithEmailAndPass(email, password)
      .then(res => {
        console.log(res.user)
        console.log('User Signed In with email & pass')
        // reset from
        e.target.reset()
      })
      .catch(err => {
        console.log(err.message)
      })
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(res => {
        console.log(res.user)
        console.log('User Signed In with google')
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  return (
    <>
      <Helmet>
        <title>Template | Sign In</title>
      </Helmet>

      <div className="flex gap-5 flex-col lg:flex-row justify-around items-center min-h-screen">
        <div className=" border rounded-xl w-[320px] md:w-[400px]  shadow-2xl bg-base-100 animate__animated animate__pulse">
          <h1 className="text-3xl font-bold text-center mt-3">
            Please Sign In
          </h1>
          <form onSubmit={handleFormSubmit} className=" py-1 px-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <div className="relative flex items-center justify-end">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="input input-bordered w-full"
                  required
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute mr-5"
                >
                  {showPassword ? <FaRegEye /> : <FaEyeSlash />}
                </div>
              </div>
              <label className="label mt-1">
                <a href="#" className="label-text-alt link link-hover text-blue-600">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <button className="rounded-lg bg-[#F97316] border-none text-white py-2">
                Sign In
              </button>
            </div>
          </form>

          <div className=" pt-0 ">
            <div className="flex justify-center items-center ">
              <hr className="border-gray-300 w-1/4" />
              <span className="mx-3 text-gray-500">Or</span>
              <hr className="border-gray-300 w-1/4" />
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-5 items-center px-5">
              <div onClick={handleGoogleSignIn} className="border border-blue-500 p-1 rounded-lg hover:bg-blue-100 flex justify-center items-center gap-1 w-full">
                <FaGoogle className="text-3xl text-blue-500" />
                <h1 className="font-bold text-sm text-blue-500">Google Sign In</h1>
              </div>
            </div>
          </div>

          <div className="text-center my-3">
            <p>
              New to Template? Please &nbsp;
              <Link to="/sign-up" className="text-blue-500">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
