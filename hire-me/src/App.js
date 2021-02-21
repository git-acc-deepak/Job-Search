import "./App.css";
import Jobs from "./Jobs";
import React, { useState, useEffect } from "react";

const JOB_API_URL = "http://localhost:4000/jobs";

async function fetchJobs(updateCallback) {
  const res = await fetch(JOB_API_URL);
  const json = await res.json();
  updateCallback(json);
}

function App() {
  const [jobList, setJobList] = useState([]);
  useEffect(() => {
    fetchJobs(setJobList);
  }, []);

  return (
    <div className="App">
      <Jobs jobs={jobList} />
    </div>
  );
}

export default App;
