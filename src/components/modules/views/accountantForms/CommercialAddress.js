import { Checkbox } from "@mui/material";
import { Accordion, Button, Input } from "../../ui";

const CommercialAddress = () => (
  <Accordion title="Dirección comercial">
    <div className="grid grid-cols-3 gap-6">
      <Input
        uppercase
        containerStyle="col-span-2"
        name="address"
        label="Dirección"
      />
      <Input
        uppercase
        containerStyle="col-span-1"
        name="number"
        label="Empresa"
      />
      <Input
        uppercase
        containerStyle="col-span-1"
        name="town"
        label="Comuna"
      />
      <Input
        uppercase
        containerStyle="col-span-1"
        name="state"
        label="Region"
      />
      <Input
        uppercase
        containerStyle="col-span-1"
        name="country"
        label="País"
      />
    </div>
    <div className="flex flex-row justify-between">
      <Button
        className="w-32 bg-primary text-white font-bold mt-8"
        title="Modificar"
      />
      <div className="flex items-center">
        <Checkbox className="mt-8" fontSize="large" defaultChecked />
        <span className="uppercase font-bold">Facturar a esta Dirección</span>
      </div>
    </div>
  </Accordion>
);

export default CommercialAddress;
