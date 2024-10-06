import { Trash2 } from "lucide-react";
import { limitWords } from "../../utils/limitWords";

const CardNote = ({ title, date, description, icon }) => {
  return (
    <div className="flex flex-col p-4 ring-1 ring-slate-300 bg-white rounded-lg">
      <h2 className="text-xl font-bold mb-1">{title}</h2>
      <p className="mb-4 text-sm">{date}</p>
      <p className="mb-10">{limitWords(description, 20)}</p>
      <div className="flex justify-end space-x-4 text-slate-500">
        <Trash2 className="cursor-pointer" />
        {icon}
      </div>
    </div>
  );
};

export default CardNote;
