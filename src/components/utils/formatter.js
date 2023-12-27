export const formatRut = (rut) => {
  // Asegurarse de que el RUT sea un string
  let cleanRut = String(rut).replace(/[^0-9Kk-]+/g, "");

  // Separar dígito verificador si el guion no está presente
  if (!cleanRut.includes("-")) {
    cleanRut = cleanRut.slice(0, -1) + "-" + cleanRut.slice(-1);
  }

  // Invertir el RUT para facilitar la inserción de puntos
  let reversedRut = cleanRut.split("").reverse().join("");

  // Agregar puntos cada tres dígitos
  reversedRut = reversedRut.replace(/(\d{3})(?=\d)/g, "$1.");

  // Volver a invertir para obtener el formato correcto
  return reversedRut.split("").reverse().join("");
};

export const formatCurrency = (amount) => {
  const formatted = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    currencyDisplay: "symbol",
  }).format(amount);
  return formatted.replace("$", "$ ");
};
