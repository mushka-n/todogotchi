import React from "react";

const Checkbox = ({ className, color, checked, ...props }) => {
  return (
    <div className="flex items-center justify-center  h-full">
      <label class="flex items-center justify-center h-full space-x-3">
        <input
          type="checkbox"
          name="checked-demo"
          checked={checked}
          class={`form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue checked:border-transparent focus:outline-none`}
        />
      </label>
    </div>
  );
};

export default Checkbox;
