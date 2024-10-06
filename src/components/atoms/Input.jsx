const Input = ({ value, onChange, placeholder, className }) => {
    return (
      <input
        type="text"
        name="judul"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className={`w-full p-3 border-[1.5px] border-slate-300 bg-white text-base font-normal rounded-md focus:ring-[1.5px] focus:ring-blue-300 focus:outline-none focus:border-none focus:bg-white text-slate-500 ${className}`}
      />  
    );
  };
  
  export default Input;
  