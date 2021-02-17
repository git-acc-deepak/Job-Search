var fetch = require("node-fetch");

const baseURL = "https://jobs.github.com/positions.json";
async function fetchGithub() {
  let resCount = 1,
    onPage = 0;
  const allJobs = [];

  //fetch pages
  while (resCount > 0) {
    const res = await fetch(`${baseURL}?page=${onPage}`);
    const jobs = await res.json();
    allJobs.push(...jobs);
    resCount = jobs.length;
    console.log("got", resCount, "jobs");
    onPage++;
  }

  console.log("all jobs = " + allJobs.length);
}

fetchGithub();

module.exports = fetchGithub;
