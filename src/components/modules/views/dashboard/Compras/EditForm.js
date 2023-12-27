import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../../../layouts/index";
import { Input, Title, Button } from "../../../ui/index";
import {
  getLibroEspecifico,
  getCuentasSugeridas,
  getTodasCuentas,
} from "../../../../../api/list.api";

const IncomeUpdateForm = () => {
  const { id } = useParams();
  const [compra, setCompra] = useState(null);
  const [cuentasSugeridas, setCuentasSugeridas] = useState(null);
  const [todasCuentas, setTodasCuentas] = useState(null);
  const [selectedCuentaSugerida, setSelectedCuentaSugerida] = useState("");
  const [selectedOtrasCuentas, setSelectedOtrasCuentas] = useState("");
  const [editable, setEditable] = useState(false);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    const selectorName = event.target.name;

    if (selectorName === "CuentaSugerida") {
      setSelectedCuentaSugerida(selectedValue);
      setSelectedOtrasCuentas("");
    } else if (selectorName === "otrasCuentas") {
      setSelectedOtrasCuentas(selectedValue);
      setSelectedCuentaSugerida("");
    }
  };

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleGuardarClick = () => {
    setEditable(false);
    // Aquí puedes realizar acciones adicionales al guardar
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: compraData } = await getLibroEspecifico(id);
        const { data: cuentasSugeridasData } = await getCuentasSugeridas(id);
        const { data: todasCuentasData } = await getTodasCuentas();

        setCompra(compraData.data[0]);
        setCuentasSugeridas(cuentasSugeridasData);
        setTodasCuentas(todasCuentasData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    console.log("selectedCuentaSugerida", selectedCuentaSugerida);
    console.log("selectedOtrasCuentas", selectedOtrasCuentas);
  }, [selectedCuentaSugerida, selectedOtrasCuentas]);

  return (
    <Layout>
      <div className="">
        <Title className="text-6xl py-4">Formulario de Actualizacion</Title>
        <div className="flex flex-col">
          <div className="grid grid-rows-4 grid-flow-col gap-4">
            <div>
              <Input
                label="Compra"
                disabled={true}
                placeholder={compra?.Comprobante}
              />
            </div>
            <div>
              <Input
                label="Cliente"
                disabled={true}
                placeholder={compra?.Proveedor}
              />
            </div>
            <div>
              <Input
                label="N° de Documento"
                disabled={true}
                placeholder={compra?.Folio}
              />
            </div>
            <div>
              <Input
                label="Monto"
                disabled={true}
                placeholder={compra?.MontoTotal}
              />
            </div>
            <div>
              <Input
                label="Fecha"
                disabled={true}
                placeholder={compra?.Fecha}
              />
            </div>
            <div>
              <Input
                label="Fecha de Caducidad"
                disabled={true}
                placeholder={compra?.Fecha}
              />
            </div>
            <div>
              <Input
                label="Descripcion"
                disabled={true}
                placeholder={compra?.Fecha}
              />
            </div>
            <div>
              <Input
                label="Adjuntar"
                disabled={true}
                placeholder={compra?.Fecha}
              />
            </div>
          </div>
          <div>
            <div className="mt-6">
              <Title>Clasificacíon</Title>
            </div>
            <div className="flex gap-5">
              <Input
                label="Sucursal"
                disabled={true}
                placeholder={compra?.Sucursal ? compra?.Sucursal : ""}
              />
              <Input
                label="Centro de costos"
                disabled={true}
                placeholder={compra?.CentroCostos ? compra?.CentroCostos : ""}
              />
              <Input
                label="Monto neto"
                disabled={true}
                placeholder={compra?.Monto}
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <p className="text-lg font-bold">Cuentas sugeridas</p>
              <select
                name="CuentaSugerida"
                onChange={handleSelectChange}
                disabled={!editable}
                value={selectedCuentaSugerida}
              >
                <option value="">Selecciona una cuenta</option>
                {cuentasSugeridas?.map((unCuentasSugeridas, index) => (
                  <option key={index} value={unCuentasSugeridas?.key}>
                    {unCuentasSugeridas?.data}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <p className="text-lg font-bold">Otras Cuentas</p>
              <select
                name="otrasCuentas"
                onChange={handleSelectChange}
                disabled={!editable}
                value={selectedOtrasCuentas}
              >
                <option value="">Selecciona una cuenta</option>
                {todasCuentas?.map((unTodasCuentas, index) => (
                  <option key={index} value={unTodasCuentas?.key}>
                    {unTodasCuentas?.data}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-3 gap-4">
          <Button
            className={`bg-aqua-green text-white font-bold px-6 ${
              !editable ? "hidden" : ""
            }`}
            title="Guardar"
            onClick={handleGuardarClick}
          />
          <Button
            className={`bg-aqua-green text-white font-bold px-6 ${
              editable ? "hidden" : ""
            }`}
            title="Editar"
            onClick={handleEditClick}
          />
          <Button
            className="bg-[#dc2626] text-white font-bold px-6"
            title="Cerrar"
          />
        </div>
      </div>
    </Layout>
  );
};

export default IncomeUpdateForm;
