import React, { useState } from "react";

// material
import { Stepper, Step, StepLabel } from "@mui/material";

// asset
import logoLuca from "../../../assets/logoLuca.png";
import iconDialogo from "../../../assets/iconos/iconDialogo.png";
import iconCelu from "../../../assets/iconos/iconCelu.png";
import iconUbicacion from "../../../assets/iconos/iconUbicacion.png";

// components
import StepperForm from "./StepperForms/StepperForm";
import StepperFormTwo from "./StepperForms/StepperFormTwo";
import StepperFormThree from "./StepperForms/StepperFormThree";
import StepperFormFour from "./StepperForms/StepperFormFour";
import StepperFormFive from "./StepperForms/StepperFormFive";
import StepperFormSix from "./StepperForms/StepperFormSix";
import StepperFormSeven from "./StepperForms/SepperFormSeven";

const SignUpStepperRecord = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState({});

  const steps = ["", "", "", "", "", "", ""];

  const handleNext = (data) => {
    setFormValues({ ...formValues, ...data });
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
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
    <div className="flex flex-col p-10  px-20">
      <div className="w-full">
        <img src={logoLuca} alt="logoLuca" />
      </div>
      <div className="flex justify-between items-start pt-16">
        <div className="flex-shrink-0 w-[20%]">
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
        <div className="w-[50%] flex justify-center items-center">
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
        <div className="flex flex-col gap-14 w-[30%]">
          <div className="flex gap-10">
            <img
              className="w-[15%] h-[15%]"
              src={iconDialogo}
              alt="iconDialogo"
            />
            <p className="text-dark-blue">
              <span className="font-bold text-xl uppercase">hablemos</span>
              <br />
              <p className="text-2xl">contacto@tryluca.com</p>
            </p>
          </div>
          <div className="flex gap-10">
            <img className="w-[15%] h-[15%]" src={iconCelu} alt="iconCelu" />
            <p className="text-dark-blue">
              <span className="font-bold text-xl uppercase">llamanos</span>
              <br />
              <p className="text-2xl">+56 9 8662 5874</p>
            </p>
          </div>
          <div className="flex gap-10">
            <img
              className="w-[15%] h-[15%]"
              src={iconUbicacion}
              alt="iconUbicacion"
            />
            <p className="text-dark-blue">
              <span className="font-bold text-xl uppercase">visitanos</span>
              <br />
              <p className="text-2xl">
                Santa Magdalena 75, Providencia Santiago, Chile.
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpStepperRecord;
