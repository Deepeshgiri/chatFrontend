import React from "react";

function GenderCheckBox() {
  return (
    <div className="flex">
        
      <div className="form-control">
        <label htmlFor="" className="label gap-2 cursor-pointer">
          <span className="label-text text-black">Male</span>
          <input type="checkbox" className="checkbox border-slate-900" />
        </label>
      </div>
      <div>
        <label htmlFor="" className="label gap-2 cursor-pointer">
          <span className="label-text text-black">Female</span>
          <input type="checkbox" className="checkbox border-slate-900" />
        </label>
      </div>
    </div>
  );
}

export default GenderCheckBox;
