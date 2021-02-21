import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Job from "./Job";
import JobModal from "./JobModal";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const Jobs = ({ jobs }) => {
  //pagingation
  const numJob = jobs.length;
  const numPage = Math.ceil(numJob / 50);
  const [activeStep, setActiveStep] = React.useState(0);
  const jobsOnPage = jobs.slice(activeStep * 50, activeStep * 50 + 50);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  //job details modal
  const [selectedJob, setSelectedJob] = useState({});
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="jobs">
      <Typography variant="h4" component="h1">
        Entry Level Software Jobs
      </Typography>
      <Typography variant="h6" component="h2">
        Found {numJob} Jobs
      </Typography>
      {jobsOnPage.map((job, index) => (
        <Job
          key={index}
          job={job}
          onClick={() => {
            handleClickOpen();
            setSelectedJob(job);
          }}
        />
      ))}
      <div>
        Page {activeStep + 1} of {numPage}
      </div>
      <MobileStepper
        variant="progress"
        steps={numPage}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
      <JobModal open={open} job={selectedJob} handleClose={handleClose} />
    </div>
  );
};

export default Jobs;
