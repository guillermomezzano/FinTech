import React from "react";

// data
import { cols, rows } from "../../../data/dataTablaVentas";

// components
import Card from "../../../card/Card";
import Table from "../../../table/Table";
// import inputFilterTable from "../../../ui/InputFilterTable";
import Input from "../../../ui/Input";
// material

const Clientes = () => {
  return (
    <div>
      <div className="py-10">
        <Card title="Clientes" type="tablas" idChart="" />
      </div>
      <div className="flex gap-2 ">
        <Input className="bg-white border-2" />
      </div>
      <Table data={{ cols, rows }} edit />
    </div>
  );
};

export default Clientes;
