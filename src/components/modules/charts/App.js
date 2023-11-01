import React, { useState } from 'react'

import BarraUnica from './BarraUnica'
import BarraApilada from './BarraApilada'
import BarraParalela from './BarraParalela'
import PieChartUnico from './PieChartUnico'
var k = "VentasMes";

//Barra Unica
export const ComparaClienteMesYearApp = () => {
  k = "ComparaCliente"
  const [selected, setSelected] = useState('y');
  const [counted, setContar] = useState('s');
  return (
    <>
    <select 
          value={selected}
          onChange={e => setSelected(e.target.value)}>
      <option value="y" selected>Año</option>
      <option value="m">Mes</option>
    </select>
    <select 
          value={counted}
          onChange={e => setContar(e.target.value)}>
      <option value="s" selected>Sumatoria</option>
      <option value="c">Cantidad</option>
    </select>
      <BarraUnica tempo={selected+counted+"&"+k} /> 
    </>
  );
}
export const VentasMesApp = () => {
  k = "VentasMes"
  const [selected, setSelected] = useState('5');
  return (
    <>
    <select 
          value={selected}
          onChange={e => setSelected(e.target.value)}>
      <option value="5" selected>5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
    </select>
    <h3>Ventas por Mes</h3>
      <BarraUnica tempo={selected+"&"+k}/> 
    </>
  );
}
//BarraParalela

export const VentasMesComparaApp = () => {
  k = "ComparaVenta"
  const [selected, setSelected] = useState('5');
  return (
    <>
    <select 
          value={selected}
          onChange={e => setSelected(e.target.value)}>
      <option value="5" selected>5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
    </select>
      <BarraParalela tempo={selected+"&"+k}/> 
    </>
  );
}
export const ComparaCompraVentaApp = () => {
  k = "CompraVenta"
  const [selected, setSelected] = useState('5');
  return (
    <>
    <select 
          value={selected}
          onChange={e => setSelected(e.target.value)}>
      <option value="5" selected>5</option>
      <option value="6">6</option>
      <option value="7" selected>7</option>
      <option value="8">8</option>
    </select>
      <BarraParalela tempo={selected+"&"+k}/> 
    </>
  );
}
export const ComparaVentaIVAApp = () => {
  k = "ComparaVentaIVA"
  const [selected, setSelected] = useState('5');
  return (
    <>
    <select 
          value={selected}
          onChange={e => setSelected(e.target.value)}>
      <option value="5" selected>5</option>
      <option value="6">6</option>
      <option value="7" selected>7</option>
      <option value="8">8</option>
    </select>
      <BarraParalela tempo={selected+"&"+k}/> 
    </>
  );
}
export const ComparaCompraIVAApp = () => {
  k = "ComparaCompraIVA"
  const [selected, setSelected] = useState('5');
  return (
    <>
    <select 
          value={selected}
          onChange={e => setSelected(e.target.value)}>
      <option value="5" selected>5</option>
      <option value="6">6</option>
      <option value="7" selected>7</option>
      <option value="8">8</option>
    </select>
      <BarraParalela tempo={selected+"&"+k}/> 
    </>
  );
}
//Barra Apilada

export const BarraApiladaApp = () => {
  k = "DeudasClientes"
  const [selected, setSelected] = useState('5');
  return (
    <>
    <select 
          value={selected}
          onChange={e => setSelected(e.target.value)}>
      <option value="5" selected>5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
    </select>
      <BarraApilada tempo={selected+"&"+k}/> 
    </>
  );
}
//Grafico de torta

export const ComparaDeudaClienteUnico = () => {
  console.log("ComparaDeudaClienteUnico");
  k = "ComparaCliente"
  const [selected, setSelected] = useState('y');
  const [counted, setContar] = useState('s');
  return (
    <>
    {/* <select 
          value={selected}
          onChange={e => setSelected(e.target.value)}>
      <option value="y" selected>Año</option>
      <option value="m">Mes</option>
    </select>
    <select 
          value={counted}
          onChange={e => setContar(e.target.value)}>
      <option value="s" selected>Sumatoria</option>
      <option value="c">Cantidad</option>
    </select> */}
      <PieChartUnico tempo={k} /> 
    </>
  );
}