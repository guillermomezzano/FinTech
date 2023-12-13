import React from "react";

// components
import Layout from "../components/layouts/index";
import Empresa from "../components/modules/views/dashboard/Empresa";

const Home = () => {
  return (
    <div>
      <Layout>
        <Empresa />
      </Layout>
    </div>
  );
};

export default Home;
