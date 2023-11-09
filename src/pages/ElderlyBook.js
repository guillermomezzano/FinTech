import React, { useEffect, useState } from "react";

// data
import { getListaCuentas } from "../api/list.api";
import { getLibroMayor } from "../api/table.api";

// components
import Layout from "../components/layouts/index";

// material
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const ReactTableSelect = () => {
  const [selected, setSelected] = useState("0");
  const [titular, setTitular] = useState("Titulo");
  const [optionJson, setOptionJson] = useState([]);
  const [sqlDatos, setSqlDatos] = useState([]);
  const [textoCabeza, setTextoCabeza] = useState([]);
  useEffect(() => {
    const fetchApiComparaCliente = async () => {
      if (selected == 0) {
        const dataoption = await getListaCuentas(); //cuando {dataoption} no funcionaba
        console.log("dataoption es: ", dataoption);
        setSelected(dataoption.data[0].key); //FUNCIONO NO SE QUE PASA!
        setOptionJson(dataoption.data);
      } else {
        const { data } = await getLibroMayor(selected);
        console.log("data es: ", data.data);
        setSqlDatos(data.data);
        setTextoCabeza(data.titulos);
        setTitular(data.tituloSuperior);
      }
    };

    fetchApiComparaCliente();
  }, [selected]);

  const listItems = textoCabeza?.map((opcion) => <th>{opcion}</th>);
  const listOptions = optionJson?.map((opcion) => (
    <option value={opcion.key}>{opcion.data}</option>
  ));
  return (
    <>
      <Layout>
        <div className="ml-[5%] p-[2%]">
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            {listOptions}
          </select>
          <h1>{titular}</h1>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow className="uppercase">{listItems}</TableRow>
              </TableHead>
              <TableBody>
                {sqlDatos?.map((val, i) => (
                  <TableRow key={i}>
                    {val.map((colm) => (
                      <TableCell style={{ padding: "20px" }}>{colm}</TableCell>
                    ))}

                    {/* <td>{val[i]}</td> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Layout>
    </>
  );
};

export default ReactTableSelect;
