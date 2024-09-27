const LabelNote = ({ htmlFor, children, className, limitChar }) => {
  return (
    <div className="flex justify-between mb-2">
      <label
        htmlFor={htmlFor}
        className={`block text-xlfont-medium mb-2 ${className}`}
      >
        {children}
      </label>
      <p>{limitChar}</p>
    </div>
  );
};

export default LabelNote;
