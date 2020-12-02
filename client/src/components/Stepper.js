import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Select your image', 'Add Description'];
}

function getStepContent(stepIndex,props) {
  switch (stepIndex) {
    case 0:
      return <ImageUpload  setImage={(data)=>props.setImage(data)} 
      setformerror={()=>props.setformerror()}
      />;
    case 1:
      return <ImageDesc 
      handleChange={props.handleChange} 
      handleSubmit={props.handleSubmit} 
      setImage={(data)=>props.setImage(data)} 
      setformerror={(err)=>props.setformerror(err)}
      Reset={props.Reset}
      form ={props.form}
      progress={props.progress}
      
      />;
      
    default:
      return 'Unknown stepIndex';
  }
}

const StepperComp= (props)=>{
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep,props)}</Typography>
            <div className="stepper-buttons">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton + " controller-button"}
              >
                Back
              </Button>
              {activeStep < steps.length - 1 && <Button variant="contained" color="primary" onClick={handleNext}>
                 Next
              </Button>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default StepperComp;

const ImageUpload = (props) => {
  const handleChange=(e)=>{props.setformerror(undefined);props.setImage(e.target.files[0])}
    return (
        <div className="file-upload-div">
            <input type="file" accept="image/*" className="fileupload" onChange={handleChange}  name="image"/>
        </div>
    );
};


const ImageDesc = ({form,handleChange,handleSubmit,progress,Reset}) => {
    return (
        <div>
        <form onSubmit={handleSubmit} className="form">
        <input type="text" value={form.title} name="title" placeholder="Title"  onChange={handleChange} ></input>
        <textarea type="text" value={form.body} name="body" placeholder="Description"  onChange={handleChange}  maxLength={300} ></textarea>
        <div className="post-buttons"><button className="custombutton" type="submit">{progress?<div className="load"/>:"Post"}</button>
        <button className="custombutton-red" type="submit" onClick={Reset}>Clear</button>
        </div>
        </form>
        </div>
    );
};

