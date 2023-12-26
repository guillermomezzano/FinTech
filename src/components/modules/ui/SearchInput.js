//assets
import iconLupa from "../../../assets/iconos/iconLupa.png";

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
        <img className="w-[20px]" src={iconLupa} alt="iconLupa" />
      </div>
    </div>
  );
};

export default SearchInput;
