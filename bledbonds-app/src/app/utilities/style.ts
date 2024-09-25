import { useState, Dispatch, SetStateAction } from "react";

const useStyle = (): [string, Dispatch<SetStateAction<string>>] => {
  const [style, setStyle] = useState<string>('');  

  return [style, setStyle]; 
};

export default useStyle;
