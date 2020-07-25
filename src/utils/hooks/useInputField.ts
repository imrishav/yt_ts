import { useState } from 'react';

const useInputField = (
  values: any
): { value: string; setValue: any; onChange: any } => {
  const [value, setValue] = useState(values);

  const onChange = (e: { target: HTMLInputElement }) =>
    setValue(e.target.value);

  return { value, setValue, onChange };
};

export default useInputField;
