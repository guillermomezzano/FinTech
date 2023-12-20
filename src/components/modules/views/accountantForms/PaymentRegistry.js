import { Accordion, Button, Input } from "../../ui";

const PaymentRegistry = () => (
  <Accordion title="Registro de pagos">
    <div container className="grid grid-cols-3 gap-6">
      <Input
        uppercase
        containerStyle="grid-span-1"
        name="name"
        label="Método de pago"
      />
      <Input
        uppercase
        containerStyle="grid-span-1"
        name="lastName"
        label="Tiempo de pago"
      />
      <Input
        uppercase
        containerStyle="grid-span-1"
        name="company"
        label="Despacho"
      />
    </div>
      <div className="flex justify-between">
        <Button
          className="w-32 bg-secondary text-white font-bold mt-8"
          title="Guardar"
        />
        <Button
          className="w-44 text-secondary border border-secondary font-bold mt-8"
          title="Enviar a cobranza"
        />
      </div>
  </Accordion>
);

export default PaymentRegistry;
