import React from "react";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

const Job = ({ job, onClick }) => {
  return (
    <Paper onClick={onClick} className="job">
      <div>
        <Typography variant="h5">{job.title}</Typography>
        <Typography variant="h6">{job.company}</Typography>
        <Typography>{job.location}</Typography>
      </div>
      <div>
        <Typography>{job.created_at}</Typography>
      </div>
    </Paper>
  );
};

export default Job;
