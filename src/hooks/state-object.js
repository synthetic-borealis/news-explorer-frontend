import React from "react";

function useStateObject(initialValue) {
  const [value, setValue] = React.useState(initialValue);

  return {value, setValue};
}

export { useStateObject };
