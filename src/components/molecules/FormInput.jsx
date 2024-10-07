import { useState, useEffect } from "react";
import Input from "../atoms/input";
import Description from "../atoms/description";
import Button from "../atoms/button";

const FormInput = ({ handleSubmit, resetTrigger }) => {
  const [inputValue, setInputValue] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [remainingChars, setRemainingChars] = useState(50);

  const handleChange = (e) => {
    const input = e.target.value;

    setRemainingChars(50 - input.length);

    if (input.length <= 50) {
      setInputValue(input);
    }
  };

  const handleChangeDescription = (e) => {
    setInputDescription(e.target.value);
  };

  useEffect(() => {
    if (resetTrigger) {
      setInputValue("");
      setInputDescription("");
      setRemainingChars(50);
    }
  }, [resetTrigger]);

  return (
    <form
      onSubmit={(e) => handleSubmit(e, inputValue, inputDescription)}
      className="flex flex-col w-full justify-center items-center space-y-4"
    >
      <div className="flex justify-end w-full -mb-2">
        <p>
          {remainingChars >= 0
            ? `${remainingChars} karakter tersisa`
            : "Karakter melebihi batas 50 karakter!"}
        </p>
      </div>
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
      <Button type="submit">Buat Catatan</Button>
    </form>
  );
};

export default FormInput;
