import React from "react";

import { BiLogOut } from "react-icons/bi";
import useLogOut from "../../hooks/useLogOut";
function LogoutBtn() {
  const { loading, logOut } = useLogOut();
  return (
    <div className="mt-auto">
      {!loading ? (
        <BiLogOut className="w-6 h-6 text-black cursor-pointer hover:text-white" onClick={logOut} />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
}

export default LogoutBtn;
