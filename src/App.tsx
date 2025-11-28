import "./App.css";
import DataDisplay from "./pages/DataDisplay";
import Feedback from "./pages/Feedback";
import Input from "./pages/Input";
import Layout from "./pages/Layout";
import Sample from "./pages/Sample";
function App() {
  return (
    <>
      <Sample />
      <Input />
      <Layout />
      <DataDisplay />
      <Feedback />
    </>
  );
}

export default App;
// https://reactnative.dev/docs/testing-overview
