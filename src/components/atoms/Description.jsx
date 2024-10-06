const Description = ({ value, onChange, placeholder }) => {
    return (
      <textarea
        name="deskripsi"
        value={value} 
        onChange={onChange} 
        placeholder={placeholder}
        className="w-full p-3 border-[1.5px] border-slate-300 bg-slate-50 font-normal rounded-md focus:ring-[1.5px] focus:ring-blue-300 focus:outline-none focus:border-none focus:bg-white text-slate-500 h-52 resize-none"
      />
    );
  };
  
  export default Description;
  