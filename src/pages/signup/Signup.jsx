import React, { useState } from "react";
import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });
  const { loading, signup } = useSignup();
  const handleCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
    
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-lg bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-black">
          Sign Up
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-lg text-black label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            ></input>
          </div>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-lg text-black label-text">
                Unique user Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Unique user Name"
              className="w-full input input-bordered h-10"
              value={inputs.userName}
              onChange={(e) =>
                setInputs({ ...inputs, userName: e.target.value })
              }
            ></input>
          </div>

          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-lg text-black label-text">email</span>
            </label>
            <input
              type="text"
              placeholder="Enter email"
              className="w-full input input-bordered h-10"
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            ></input>
          </div>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-lg text-black label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            ></input>
          </div>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-lg text-black label-text">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder=" Confirm Password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            ></input>
          </div>
          <span className="text-lg text-black">Gender </span>
          <GenderCheckBox
            onCheckBoxChange={handleCheckBoxChange}
            selectedGender={inputs.gender}
          />
          <div >
            <button className="btn btn-block btn-sm  mt-2" disabled={loading}>{loading?<span className="loading loading-spinner"></span>:"Sign up"}</button>
          </div>
          <span className="text-lg text-black label-text mt-2 inline-block">
            Already have an account? click{" "}
            <Link
              to={"/login"}
              className="text-gray-600 hover:text-blue-600 inline-block"
            >
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;

//STARTER CODE
// import React from "react";
// import GenderCheckBox from "./GenderCheckBox";

// const Signup = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-lg bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-black">
//           Sign Up
//           <span className="text-blue-500"> ChatApp</span>
//         </h1>
//         <form>
//           <div>
//             <label htmlFor="" className="label p-2">
//               <span className="text-lg text-black label-text">Full Name</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Full Name"
//               className="w-full input input-bordered h-10"
//             ></input>
//           </div>
//           <div>
//             <label htmlFor="" className="label p-2">
//               <span className="text-lg text-black label-text">User Name</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter username"
//               className="w-full input input-bordered h-10"
//             ></input>
//           </div>
//           <div>
//             <label htmlFor="" className="label p-2">
//               <span className="text-lg text-black label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="w-full input input-bordered h-10"
//             ></input>
//           </div>
//           <div>
//             <label htmlFor="" className="label p-2">
//               <span className="text-lg text-black label-text">
//                 Confirm Password
//               </span>
//             </label>
//             <input
//               type="password"
//               placeholder=" Confirm Password"
//               className="w-full input input-bordered h-10"
//             ></input>
//           </div>
//           <span className="text-lg text-black">Gender </span>
//           <GenderCheckBox/>
//           <div className="btn btn-block btn-sm  mt-2">Sign up</div>
//           <span className="text-lg text-black label-text mt-2 inline-block">
//             Already have an account? click{" "}
//             <a
//               href="#"
//               className="text-gray-600 hover:text-blue-600 inline-block"
//             >
//               Login
//             </a>{" "}
//           </span>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;
