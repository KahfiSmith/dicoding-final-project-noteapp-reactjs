import { Archive, Trash2 } from "lucide-react";

const CardNote = ({ title, date, description }) => {
  return (
    <div className="flex flex-col p-4 ring-1 ring-slate-300 bg-white rounded-lg w-96">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mb-4 text-sm">{date}</p>
      <p className="mb-10">{description}</p>
      <div className="flex justify-end space-x-4 text-slate-500">
        <Trash2 className="cursor-pointer" />
        <Archive className="cursor-pointer" />
      </div>
    </div>
  );
};

export default CardNote;
