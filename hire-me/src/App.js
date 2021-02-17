import "./App.css";
import Jobs from "./Jobs";

function App() {
  const mockJobs = [
    {
      title: "SME 1",
      company: "Google",
    },
    {
      title: "SME 1",
      company: "Facebook",
    },
    {
      title: "SME 1",
      company: "Apple",
    },
  ];
  return (
    <div className="App">
      <Jobs jobs={mockJobs} />
    </div>
  );
}

export default App;
