import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// material
import { Stepper, Step, StepLabel } from "@mui/material";

// asset
import logoLuca from "../../../assets/logoLuca.png";

// components
import StepperForm from "./StepperForms/StepperForm";
import StepperFormTwo from "./StepperForms/StepperFormTwo";
import StepperFormThree from "./StepperForms/StepperFormThree";
import StepperFormFour from "./StepperForms/StepperFormFour";
import StepperFormFive from "./StepperForms/StepperFormFive";
import StepperFormSix from "./StepperForms/StepperFormSix";
import StepperFormSeven from "./StepperForms/SepperFormSeven";
import ContactInfo from "./ContactInfo";

const SignUpStepperRecord = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState({});
  const navigate = useNavigate();

  const steps = ["", "", "", "", "", "", ""];

  const handleNext = (data) => {
    setFormValues({ ...formValues, ...data });
    activeStep === 6
      ? navigate("/", { replace: true })
      : setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = (data) => {
    setFormValues({ ...formValues, ...data });
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const customStepIcon = (index, active, completed) => {
    const color = active ? "#1c3761" : completed ? "#1c3761" : "#94a3b8";
    return (
      <div
        style={{
          backgroundColor: color,
          width: "30px",
          height: "30px",
          borderRadius: "0",
        }}
      ></div>
    );
  };

  return (
    <div className="flex flex-col py-10 px-2 lg:px-20">
      <div className="w-full">
        <img src={logoLuca} alt="logoLuca" />
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start pt-16">
        <div className="flex flex-shrink-0 2xl:w-[20%] w-auto">
          <Stepper
            activeStep={activeStep}
            orientation="vertical"
            connector={<div className="h-6"></div>}
          >
            {steps.map((_, index) => (
              <Step key={index} completed={index < activeStep}>
                <StepLabel
                  StepIconComponent={() =>
                    customStepIcon(
                      index,
                      activeStep === index,
                      index < activeStep
                    )
                  }
                ></StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
        <div className="lg:w-[50%] flex justify-center items-center">
          <StepperForm active={activeStep === 0} onNext={handleNext} />
          <StepperFormTwo
            active={activeStep === 1}
            onNext={handleNext}
            onBack={handleBack}
          />
          <StepperFormThree
            active={activeStep === 2}
            onNext={handleNext}
            onBack={handleBack}
          />
          <StepperFormFour
            active={activeStep === 3}
            onNext={handleNext}
            onBack={handleBack}
          />
          <StepperFormFive
            active={activeStep === 4}
            onNext={handleNext}
            onBack={handleBack}
          />
          <StepperFormSix
            active={activeStep === 5}
            onNext={handleNext}
            onBack={handleBack}
          />
          <StepperFormSeven
            active={activeStep === 6}
            onNext={handleNext}
            onBack={handleBack}
          />
        </div>
        <ContactInfo />
      </div>
    </div>
  );
};

export default SignUpStepperRecord;
