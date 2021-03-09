import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Step01 from "./Step01";
import Step02 from "./Step02";
import Step03 from "./Step03";
import Step03Permanent from "./Step03Permanent";
import Step04 from "./Step04";
import Step04Permanent from "./Step04Permanent";
import SuccessTick from "../../../../../components/SuccessTick/SuccessTick";

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(1)
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  completed: {
    display: "inline-block",
    fontSize: 16,
    marginLeft: 10,
    color: "#4f4f4f"
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps() {
  return ["Your Details", "Select the Job Type", "Basic Details", "More Details"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Step01 />;
    case 1:
      return <Step02 />;
    case 2:
      return <Step03 />;
    case 3:
      return <Step04 />;
    default:
      return "Unknown step";
  }
}

export default function SubmitVacancyForm() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(new Set());
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  function totalSteps() {
    return getSteps().length;
  }

  function isStepOptional(step) {
    return step === 3;
  }

  function handleSkip() {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  }

  function skippedSteps() {
    return skipped.size;
  }

  function completedSteps() {
    return completed.size;
  }

  function allStepsCompleted() {
    return completedSteps() === totalSteps() - skippedSteps();
  }

  function isLastStep() {
    return activeStep === totalSteps() - 1;
  }

  function handleNext() {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed
          // find the first step that has been completed
          steps.findIndex((step, i) => !completed.has(i))
        : activeStep + 1;

    setActiveStep(newActiveStep);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  const handleStep = step => () => {
    setActiveStep(step);
  };

  function handleComplete() {
    const newCompleted = new Set(completed);
    newCompleted.add(activeStep);
    setCompleted(newCompleted);

    /**
     * Sigh... it would be much nicer to replace the following if conditional with
     * `if (!this.allStepsComplete())` however state is not set when we do this,
     * thus we have to resort to not being very DRY.
     */
    if (completed.size !== totalSteps() - skippedSteps()) {
      handleNext();
    }
  }

  function handleReset() {
    setActiveStep(0);
    setCompleted(new Set());
    setSkipped(new Set());
  }

  function isStepSkipped(step) {
    return skipped.has(step);
  }

  function isStepComplete(step) {
    return completed.has(step);
  }

  return (
    <div className="submit-vacancy__stepper">
      <Stepper alternativeLabel nonLinear activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const buttonProps = {};
          if (isStepOptional(index)) {
            buttonProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepButton
                onClick={handleStep(index)}
                completed={isStepComplete(index)}
                {...buttonProps}>
                {label}
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <div className="submit-vacancy__finished">
            <SuccessTick />
            <h2>All done!</h2>
            <p>
              Thank you! We've sent you an email for the vacancy detail.
              <br />
              Register to WhiteCollarBlue to manage your vacancies and access to our
              knowledge base.
            </p>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div className="flex-center steps__footer">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={`${classes.button} custom-button`}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={`${classes.button} custom-button`}
                type="submit">
                Next
              </Button>
              {isStepOptional(activeStep) && !completed.has(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  className={`${classes.button} custom-button`}>
                  Skip
                </Button>
              )}

              {activeStep !== steps.length &&
                (completed.has(activeStep) ? (
                  <Typography variant="caption" className={classes.completed}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleComplete}
                    className={`${classes.button} custom-button`}>
                    {completedSteps() === totalSteps() - 1
                      ? "Submit"
                      : "Complete Step"}
                  </Button>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
