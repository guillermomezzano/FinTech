import { Tab } from "@mui/base/Tab";
import { TabsList } from "@mui/base/TabsList";
import { TabPanel } from "@mui/base/TabPanel";
import { Tabs as BaseTabs } from "@mui/base/Tabs";
import { useEffect, useRef, useState } from "react";

const Tabs = ({ tabs, ...restProps }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsRef = useRef([]);

  const handleTabChange = (e, newValue) => {
    e.preventDefault();
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
      {...restProps}
      defaultValue={0}
    >
      <TabsList
        slotProps={{
          root: {
            className: "flex relative",
          },
        }}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            ref={(el) => (tabsRef.current[index] = el)}
            value={index}
            slotProps={{
              root: { className: "pb-4 pt-1 px-4 font-bold text-lg" },
            }}
            onClick={() => handleTabChange(null, index)}
          >
            {tab.title}
          </Tab>
        ))}
        <div className="absolute bottom-0 left-0 w-full border-b-4 border-gray-200" />
        <span
          className="absolute bottom-0 border-b-4 border-secondary transition-all duration-200"
          style={indicatorStyle}
        />
      </TabsList>
      <TabPanel value={activeTab} slotProps={{ root: { className: "w-full" } }}>
        {tabs[activeTab].content}
      </TabPanel>
    </BaseTabs>
  );
};

export default Tabs;
