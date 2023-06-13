import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./App.css";
import TabContent from "./components/TabContent";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Tabs className="Tabs">
        <TabList>
          <Tab>Your</Tab>
          <Tab>All</Tab>
          <Tab>Blocked</Tab>
        </TabList>

        <TabPanel>
          <TabContent />
        </TabPanel>
        <TabPanel>

        </TabPanel>
        <TabPanel>

        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;