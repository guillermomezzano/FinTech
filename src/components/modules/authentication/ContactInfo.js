import iconDialogo from "../../../assets/iconos/iconDialogo.png";
import iconCelu from "../../../assets/iconos/iconCelu.png";
import iconUbicacion from "../../../assets/iconos/iconUbicacion.png";

const ContactInfo = () => (
  <div className="flex flex-col gap-14 lg:w-[30%]">
    <div className="flex gap-10">
      <img className="w-[15%] h-[15%]" src={iconDialogo} alt="iconDialogo" />
      <p className="text-dark-blue">
        <span className="font-bold text-xl uppercase">hablemos</span>
        <br />
        <p className="text-2xl">contacto@tryluca.com</p>
      </p>
    </div>
    <div className="flex gap-10">
      <img className="w-[15%] h-[15%]" src={iconCelu} alt="iconCelu" />
      <p className="text-dark-blue">
        <span className="font-bold text-xl uppercase">llamanos</span>
        <br />
        <p className="text-2xl">+56 9 8662 5874</p>
      </p>
    </div>
    <div className="flex gap-10">
      <img
        className="w-[15%] h-[15%]"
        src={iconUbicacion}
        alt="iconUbicacion"
      />
      <p className="text-dark-blue">
        <span className="font-bold text-xl uppercase">visitanos</span>
        <br />
        <p className="text-2xl">
          Santa Magdalena 75, Providencia Santiago, Chile.
        </p>
      </p>
    </div>
  </div>
);

export default ContactInfo;
