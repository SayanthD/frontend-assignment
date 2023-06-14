import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Your from "./components/Your"
import All from "./components/All"
import Blocked from "./components/Blocked"

function App() {
  return (
    <div className="App">
      <h2>Cards</h2>
      <Tabs className="Tabs">
        <TabList>
          <Tab>Your</Tab>
          <Tab>All</Tab>
          <Tab>Blocked</Tab>
        </TabList>

            <TabPanel>
              <Your />
            </TabPanel>
            <TabPanel>
              <All />
            </TabPanel>
            <TabPanel>
              <Blocked />
            </TabPanel>

      </Tabs>
    </div>
  );
}

export default App;