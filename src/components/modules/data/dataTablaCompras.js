const createData = (Fecha, Tipo, Cliente, Monto, Status, Factura, Editar) => {
  return { Fecha, Tipo, Cliente, Monto, Status, Factura, Editar };
};

const data = (index) => ({
  Fecha: "03-12-2023",
  Proveedor: "Factura " + index,
  Folio: "Nombre " + index,
  Comprobante: "$49.901",
  Monto: "Pagado",
  Cuenta: "#012" + index,
  Documento: "#012" + index,
});

export const rows = [
  data(1),
  data(2),
  data(3),
  data(4),
  data(5),
  data(6),
  data(7),
].sort((a, b) => (a.Fecha < b.Fecha ? -1 : 1));

export const cols = [
  "Fecha",
  "Proveedor",
  "Folio",
  "Comprobante",
  "Monto",
  "Cuenta",
  "ID",
];
