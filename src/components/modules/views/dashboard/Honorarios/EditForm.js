import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import GlobalContext from "../../../../../context/global-context";

//components
import Layout from "../../../../layouts/index";
import { Input, Title, Button } from "../../../ui/index";

//data
import {
  getLibroEspecifico,
  getCuentasSugeridas,
  getTodasCuentas,
  setCuenta,
} from "../../../../../api/list.api";

const IncomeUpdateForm = () => {
  const { id } = useParams();
  const { ui } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [compra, setCompra] = useState(null);
  const [cuentasSugeridas, setCuentasSugeridas] = useState(null);
  const [todasCuentas, setTodasCuentas] = useState(null);
  const [cuentaSeleccionada, setCuentaSeleccionada] = useState(null);
  // const [formValues, setFormValues] = useState({});
  const [editable, setEditable] = useState(false);

  const handleSelectChange = (event) => {
    setCuentaSeleccionada(event.target.value);

    console.log("cuentaSeleccionada", cuentaSeleccionada);
    // setFormValues({...formValues, cuentaSeleccionada});
  };

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleGuardarClick = async () => {
    ui.setLoader({ visible: true, text: "editando porfavor espera" });
    const PK = `${id}&${cuentaSeleccionada}`;
    setEditable(false);
    try {
      const { data } = await setCuenta(PK);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      ui.setLoader({ visible: false });
      navigate("/compras");
    }
  };

  const handleCerrarClick = () => {
    // Redirige a la ruta anterior
    navigate("/compras");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        ui.setLoader({ visible: true, text: "cargado datos porfavor espera" });
        const { data: compraData } = await getLibroEspecifico(id);
        const { data: cuentasSugeridasData } = await getCuentasSugeridas(id);
        const { data: todasCuentasData } = await getTodasCuentas();

        setCompra(compraData.data[0]);
        // setFormValues({ ...formValues, compraData });
        setCuentasSugeridas(cuentasSugeridasData);
        setTodasCuentas(todasCuentasData);
      } catch (error) {
        console.error(error);
      } finally {
        ui.setLoader({ visible: false });
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    console.log("compra", compra);
    console.log("cuentaSeleccionada", cuentaSeleccionada);
  }, [compra, cuentaSeleccionada]);

  return (
    <Layout>
      <div className="">
        <Title className="text-6xl py-4">Formulario de Actualizacion</Title>
        <div className="flex flex-col">
          <div className="grid grid-rows-4 grid-flow-col gap-4">
            <div>
              <Input
                label="Comprobante"
                disabled={true}
                placeholder={compra?.Comprobante}
              />
            </div>
            <div>
              <Input
                label="Proveedor"
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
              <Input label="Descripcion" disabled={true} placeholder="" />
            </div>
            <div>
              <Input label="Adjuntar" disabled={true} placeholder="" />
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
                placeholder={compra?.MontoNeto}
              />
              <div>
                <p className="text-lg font-bold">Cuentas</p>
                <select
                  name="cuentaSeleccionada"
                  onChange={handleSelectChange}
                  disabled={!editable}
                  value={cuentaSeleccionada}
                >
                  <optgroup label="Cuentas Sugeridas">
                    {cuentasSugeridas?.map((unCuentasSugeridas, index) => (
                      <option key={index} value={unCuentasSugeridas?.key}>
                        {unCuentasSugeridas?.data}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Otras Cuentas">
                    {todasCuentas?.map((unTodasCuentas, index) => (
                      <option key={index} value={unTodasCuentas?.key}>
                        {unTodasCuentas?.data}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>
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
            onClick={handleCerrarClick}
          />
        </div>
      </div>
    </Layout>
  );
};

export default IncomeUpdateForm;
