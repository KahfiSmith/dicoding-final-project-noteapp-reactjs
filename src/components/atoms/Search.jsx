import { Search } from "lucide-react";
import Input from "./input";

const SearchNote = ({ filterSearch, setFilterSearch }) => {
  return (
    <div className="relative flex items-center w-96">
      <Search className="absolute left-2 text-slate-400" />
      <Input
        value={filterSearch}
        onChange={(e) => setFilterSearch(e.target.value)}
        placeholder="Cari catatan..."
        className="pl-10"
      />
    </div>
  );
};

export default SearchNote;
