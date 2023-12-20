import { Accordion, Button, Input } from "../../ui";

const ContactInfo = () => (
  <Accordion title="Datos de contacto">
    <div container className="grid grid-cols-3 gap-6">
        <Input
          uppercase
          containerStyle="grid-span-1"
          name="name"
          label="Nombre"
        />
        <Input
          uppercase
          containerStyle="grid-span-1"
          name="lastName"
          label="Apellido"
        />
        <Input
          uppercase
          containerStyle="grid-span-1"
          name="company"
          label="Empresa"
        />
        <Input
          uppercase
          containerStyle="grid-span-1"
          name="town"
          label="Comuna"
        />
        <Input
          uppercase
          containerStyle="grid-span-1"
          name="state"
          label="Region"
        />
        <Input
          uppercase
          containerStyle="grid-span-1"
          name="country"
          label="País"
        />
    </div>
    <div>
      <Button
        className="w-32 bg-secondary text-white font-bold mt-8"
        title="Guardar"
      />
    </div>
  </Accordion>
);

export default ContactInfo;
