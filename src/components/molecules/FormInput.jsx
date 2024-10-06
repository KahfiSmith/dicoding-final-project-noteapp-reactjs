import { useState } from "react";
import Input from "../atoms/input";
import Description from "../atoms/description";
import Button from "../atoms/button";

const FormInput = ({ handleSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setInputDescription(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full justify-center items-center space-y-4"
    >
      <Input
        value={inputValue}
        onChange={handleChange}
        placeholder="Masukkan catatan"
      />
      <Description
        value={inputDescription}
        onChange={handleChangeDescription}
        placeholder="Masukkan deskripsi"
      />
      <Button />
    </form>
  );
};

export default FormInput;
