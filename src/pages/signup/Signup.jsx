import React from "react";
import GenderCheckBox from "./GenderCheckBox";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-lg bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-black">
          Sign Up
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-lg text-black label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full input input-bordered h-10"
            ></input>
          </div>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-lg text-black label-text">User Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
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
            ></input>
          </div>
          <span className="text-lg text-black">Gender </span>
          <GenderCheckBox/>
          <div className="btn btn-block btn-sm  mt-2">Sign up</div>
          <span className="text-lg text-black label-text mt-2 inline-block">
            Already have an account? click{" "}
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 inline-block"
            >
              Login
            </a>{" "}
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