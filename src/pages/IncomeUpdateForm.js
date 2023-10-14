// components
import Sidebar from "../components/modules/ui/sideBar/SideBar";

// material
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

const IncomeUpdateForm = () => {
  return (
    <>
      <Sidebar />
      <div className="ml-[5%] p-[2%]">
        <div className="mb-6">
          <Typography variant="h4">Actualizar Ingreso</Typography>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-5">
            <FormControl fullWidth>
              <Typography variant="h6">Tipo</Typography>
              <Select>
                <MenuItem value={"Valor por Defecto"}></MenuItem>
              </Select>
              <Typography variant="h6">Monto</Typography>
              <Select disabled={true} value={"otro_valor_por_defecto"}>
                <MenuItem value={"valor_por_defecto"}>
                  Valor por Defecto
                </MenuItem>
              </Select>
              <Typography variant="h6">Descripcion</Typography>
              <Select disabled={true} value={"otro_valor_por_defecto"}>
                <MenuItem value={"valor_por_defecto"}>
                  Valor por Defecto
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <Typography variant="h6">Cliente</Typography>
              <Select disabled={true} />
              <Typography variant="h6">Fercha</Typography>
              <Select disabled={true} />
              <Typography variant="h6">Adjuntar</Typography>
              <Select disabled={true} />
            </FormControl>
            <FormControl fullWidth>
              <Typography variant="h6">Numero de documento</Typography>
              <Select disabled={true} />
              <Typography variant="h6">Fecha de caducidad</Typography>
              <Select disabled={true} />
            </FormControl>
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
    </>
  );
};
export default IncomeUpdateForm;
