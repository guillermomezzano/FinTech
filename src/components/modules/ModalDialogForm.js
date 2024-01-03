import React, { useState, useEffect, useContext } from "react";
import GlobalContext from "../../context/global-context";
//api
import { postEmpresa } from "../../api/list.api";

//assets
import tituloLoginSII from "../../assets/tituloLoginSII.png";
import iconoLlaveSII from "../../assets/iconoLlaveSII.png";

//components
import { Input } from "../modules/ui/index";
import { Button } from "./ui/index";

//material
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

const ModalForm = ({ open, setShowForm }) => {
  const { ui } = useContext(GlobalContext);
  const [formData, setFormData] = useState({
    rut: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleSubmitForm = async () => {
    ui.setLoader({ visible: true, text: "agregando empresa porfavor espera" });
    try {
      // Llama a la función postEmpresa con los datos del formulario
      await postEmpresa(formData);
      console.log("Inserción exitosa!");
      handleCloseForm();
    } catch (error) {
      console.error("Error al intentar insertar en la base de datos:", error);
      // Puedes manejar el error según tus necesidades
    } finally {
      ui.setLoader({ visible: false });
      setShowForm(false);
    }
  };

  useEffect(() => {
    if (formData) {
      console.log(formData);
    }
  }, [formData]);

  return (
    <Dialog open={open} onClose={handleCloseForm}>
      <div className="flex flex-col items-center mb-5">
        <h1 className="text-[#002A46] font-bold text-3xl text-center p-4">
          Identificación de Contribuyentes
        </h1>
        <div className="flex flex-col m-2 border shadow-lg w-10/12">
          <div className="flex justify-center bg-[#002A46] h-24 py-5">
            <img src={tituloLoginSII} alt="tituloLoginSII" />
          </div>
          <DialogContent>
            <Input
              className="border-[#CCCCCC] border bg-white placeholder:font-semibold placeholder:opacity-50 placeholder:text-lg focus:shadow-4xl focus:shadow-[#cbe0f2]"
              labelStyle="px-[0px] text-[#002A46]"
              label="RUT"
              placeholder="Ej: 123456789"
              name="rut"
              value={formData.rut}
              onChange={handleInputChange}
            />
            <Input
              className="border-[#CCCCCC] border bg-white focus:shadow-4xl focus:shadow-[#cbe0f2]"
              label="Ingresa Clave Tributaria"
              labelStyle="px-[0px] pt-2.5 text-[#002A46]"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <DialogActions sx={{ padding: 0 }}>
              <Button
                onClick={handleSubmitForm}
                className="bg-[#002A46] text-white font-bold w-full uppercase
                mt-7 hover:bg-[#EB510D] cursor-pointer"
                title="ingresar"
                imageSrc={iconoLlaveSII}
              />
            </DialogActions>
          </DialogContent>
        </div>
      </div>
    </Dialog>
  );
};

export default ModalForm;
