// components
import Layout from "../../../../layouts/index";
import { Input, Title } from "../../../ui/index";

// material

import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

//data

const data = [
  {
    name: "Compra",
    value: "dato de la db",
  },
  {
    name: "Cliente",
    value: "dato de la db",
  },
  {
    name: "N° de Documento",
    value: "dato de la db",
  },
  {
    name: "Monto",
    value: "dato de la db",
  },
  {
    name: "Fecha",
    value: "dato de la db",
  },
  {
    name: "Fecha de Caducidad",
    value: "dato de la db",
  },
  {
    name: "Descripcíon",
    value: "dato de la db",
  },
  {
    name: "Adjuntar",
    value: "dato de la db",
  },
];

const IncomeUpdateForm = () => {
  return (
    <>
      <Layout>
        <div className="">
          <Title className="text-6xl py-4">Formulario de Actualizacion</Title>
          <div className="flex flex-col">
            <div className="flex gap-5">
              {data.map((unData, index) => (
                <div key={index}>
                  <Input
                    label={unData.name}
                    disabled={true}
                    placeholder={unData.value}
                  />
                </div>
              ))}
            </div>
            <div>
              <div className="mt-6">
                <Typography variant="h6">Clasificacíon</Typography>
              </div>
              <div className="flex gap-5">
                <div className="flex-1">
                  <FormControl fullWidth>
                    <Typography variant="h6">Sucursal</Typography>
                    <Select disabled={true} />
                  </FormControl>
                </div>
                <div className="flex-1">
                  <FormControl fullWidth>
                    <Typography variant="h6">Centro de costos</Typography>
                    <Select disabled={true} />
                  </FormControl>
                </div>
                <div className="flex-1">
                  <FormControl fullWidth>
                    <Typography variant="h6">Clasificacíon</Typography>
                    <Select disabled={true} />
                  </FormControl>
                </div>
                <div className="flex-1">
                  <FormControl fullWidth>
                    <Typography variant="h6">Monto Neto</Typography>
                    <Select disabled={true} />
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-3">
            <Button
              variant="contained"
              style={{ backgroundColor: "#4b5563", color: "white" }}
            >
              Editar
            </Button>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default IncomeUpdateForm;
