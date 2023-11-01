import React from "react";
import { useParams } from "react-router-dom";

// components
import WidgetConteiner from "../components/modules/views/dashboard/WidgetConteiner";
import Layout from "../components/layouts/index";

const Home = () => {
  const { id } = useParams();

  return (
    <div>
      <Layout>
        <div>
          {id ? (
            <p>
              <WidgetConteiner />
            </p>
          ) : (
            <></>
          )}
        </div>
      </Layout>
    </div>
  );
};

export default Home;
