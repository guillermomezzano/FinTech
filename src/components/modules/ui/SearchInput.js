import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
  return (
    <div className="relative">
      <input
        className="text-black border border-light-gray w-full pr-10"
        type="text"
        placeholder="Buscar acción rápida"
        // value={}
        // onChange={}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <SearchIcon sx={{ fontSize: 30, color: "#94a3b8" }} />
      </div>
    </div>
  );
};

export default SearchInput;
