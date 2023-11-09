import React, { useEffect, useState } from "react";

// data
import { getLibroDiario } from "../api/table.api";

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
  const [titular, setTitular] = useState("Titulo");
  const [sqlDatos, setSqlDatos] = useState([]);
  const [textoCabeza, setTextoCabeza] = useState([]);
  useEffect(() => {
    const fetchApiComparaCliente = async () => {
      const { data } = await getLibroDiario();
      console.log("data es: ", data.data);
      setSqlDatos(data.data);
      setTextoCabeza(data.titulos);
      setTitular(data.tituloSuperior);
    };

    fetchApiComparaCliente();
  }, []);

  const listItems = textoCabeza?.map((opcion) => <th>{opcion}</th>);

  return (
    <>
      <Layout>
        <div className="ml-[5%] p-[2%]">
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
