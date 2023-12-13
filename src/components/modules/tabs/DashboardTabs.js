import { Tab } from "@mui/base/Tab";
import { TabsList } from "@mui/base/TabsList";
import { TabPanel } from "@mui/base/TabPanel";
import { Tabs as BaseTabs } from "@mui/base/Tabs";
import { useEffect, useRef, useState } from "react";
import Table from "../table/Table";

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsRef = useRef([]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  useEffect(() => {
    const currentTab = tabsRef.current[activeTab];
    if (currentTab) {
      setIndicatorStyle({
        left: `${currentTab.offsetLeft}px`,
        width: `${currentTab.clientWidth}px`,
      });
    }
  }, [activeTab]);

  return (
    <BaseTabs
      value={activeTab}
      onChange={handleTabChange}
      slotProps={{
        root: {
          className: "w-full",
        },
      }}
      {...props}
      defaultValue={0}
    >
      <TabsList
        slotProps={{
          root: {
            className: "flex relative",
          },
        }}
      >
        <Tab
          ref={(el) => (tabsRef.current[0] = el)}
          value={0}
          slotProps={{
            root: { className: "py-2 px-4 font-bold text-lg" },
          }}
          onClick={() => handleTabChange(null, 0)}
        >
          Acciones
        </Tab>
        <Tab
          ref={(el) => (tabsRef.current[1] = el)}
          value={1}
          slotProps={{
            root: { className: "py-2 px-4 font-bold text-lg" },
          }}
          onClick={() => handleTabChange(null, 1)}
        >
          Visión del negocio
        </Tab>
        <Tab
          ref={(el) => (tabsRef.current[2] = el)}
          value={2}
          slotProps={{
            root: { className: "py-2 px-4 font-bold text-lg" },
          }}
          onClick={() => handleTabChange(null, 2)}
        >
          Flujo de caja
        </Tab>
        <div className="absolute bottom-0 left-0 w-full border-b-4 border-gray-200" />
        <span
          className="absolute bottom-0 border-b-4 border-secondary transition-all duration-200"
          style={indicatorStyle}
        />
      </TabsList>
      <TabPanel value={0} slotProps={{ root: { className: "w-full" } }}>
        <Table />
      </TabPanel>
      <TabPanel value={1} slotProps={{ root: { className: "w-full" } }}>
        Tab 2
      </TabPanel>
      <TabPanel value={2} slotProps={{ root: { className: "w-full" } }}>
        Tab 3
      </TabPanel>
    </BaseTabs>
  );
};

export default Tabs;
