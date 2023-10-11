import React, { useState } from 'react'

import BarChart from './BarChart'
import BarraUnica from './BarraUnica'
import BarraParalela from './BarraParalela'
import '../App.css'
var k = "VentasMes";

export const App2 = () => {
  
  const [selected, setSelected] = useState('dia');
  return (
    <>
    {/* <select name="tiempo" id="tiempo" defaultValue={k}> */}
    <select 
          value={selected}
          onChange={e => setSelected(e.target.value)}>
      <option value="mes" selected>Mes</option>
      <option value="dia">Dia</option>
    </select>
      <BarChart tempo={selected}/> 
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
      <BarraUnica tempo={selected+"&"+k}/> 
    </>
  );
}
export const ComparaClienteApp = () => {
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
export const ComparaCVApp = () => {
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

export default App2
