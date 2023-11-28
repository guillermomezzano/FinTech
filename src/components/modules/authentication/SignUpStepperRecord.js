import React, { useState } from "react";

// material
import { Button, Stepper, Step, StepLabel } from "@mui/material";

// asset
import logoLuca from "../../../assets/logoLuca.jpg";

// components
import StepperForm from "./StepperForms/StepperForm";
import StepperFormTwo from "./StepperForms/StepperFormTwo";

const SignUpStepperRecord = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState({});

  const steps = ["", "", ""];

  const handleNext = (data) => {
    setFormValues({ ...formValues, ...data });
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = (data) => {
    setFormValues({ ...formValues, ...data });
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="flex flex-col p-10  px-20">
      <div className="w-full">
        <img src={logoLuca} />
      </div>
      <div className="flex justify-between items-center pt-10">
        <div>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel></StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
        <div className="px-20">
          <StepperForm active={activeStep === 0} onNext={handleNext} />
          <StepperFormTwo
            active={activeStep === 1}
            onNext={handleNext}
            onBack={handleBack}
          />
          <StepperForm
            active={activeStep === 2}
            onNext={handleNext}
            onBack={handleBack}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <img></img>
            <p>
              <span className="font-bold">experto</span>
              <br />
              programador
            </p>
          </div>
          <div className="flex">
            <img></img>
            <p>
              <span className="font-bold">experto</span>
              <br />
              programador
            </p>
          </div>
          <div className="flex">
            <img></img>
            <p>
              <span className="font-bold">experto</span>
              <br />
              programador
            </p>
          </div>
        </div>
      </div>

      {activeStep === steps.length && (
        <div>
          <p>¡Registro completado!</p>
          <p>Resumen:</p>
          <pre>{JSON.stringify(formValues, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default SignUpStepperRecord;
