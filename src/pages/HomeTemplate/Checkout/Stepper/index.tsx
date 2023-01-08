import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from 'src/redux/configStore';
import { REMOVE_ALL_CART_SAGA } from 'src/redux/consts/consts';
import { getDataFormCheckoutApiAction } from 'src/redux/reducers/cartReducer';
import { updateActiveStep } from 'src/redux/reducers/otherReducer';
import { CheckoutForm } from '../CheckoutForm';
import { CheckoutShipping } from '../CheckoutShipping';

const steps = ['Information', 'Shipping', 'Payment'];

export default function HorizontalLinearStepper() {
  const { dataCart } = useSelector((state: RootState) => state.cartReducer);
  const { activeStep } = useSelector((state: RootState) => state.otherReducer);
  const {
    dataFormCheckout: {
      country,
      name,
      address,
      apartment,
      city,
      zip,
      shippingMethod,
      cardNumber,
      expYear,
      expMonth,
      CVCAndCVV,
    },
  } = useSelector((state: RootState) => state.cartReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit, handleChange, values, resetForm } = useFormik({
    initialValues: {
      country: country ?? '',
      name: name ?? '',
      address: address ?? '',
      apartment: apartment ?? '',
      city: city ?? '',
      zip: zip ?? '',
      shippingMethod: shippingMethod ?? 'standard',
      cardNumber: cardNumber ?? '',
      expYear: expYear ?? '',
      expMonth: expMonth ?? '',
      CVCAndCVV: CVCAndCVV ?? '',
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      if (activeStep === steps.length - 1) {
        resetForm();
        dispatch(getDataFormCheckoutApiAction(values));
        dispatch(updateActiveStep(0));
        dispatch({
          type: REMOVE_ALL_CART_SAGA,
          payload: dataCart.idCart,
        });
      }
      handleNext();
      dispatch(getDataFormCheckoutApiAction(values));
    },
  });

  // const [activeStep, setActiveStep] = useState(0);
  // const [skipped, setSkipped] = useState(new Set<number>());

  // const isStepOptional = (step: number) => {
  //   return step === 1;
  // };

  // const isStepSkipped = (step: number) => {
  //   return skipped.has(step);
  // };

  const handleNext = () => {
    // let newSkipped = skipped;
    // if (isStepSkipped(activeStep)) {
    //   newSkipped = new Set(newSkipped.values());
    //   newSkipped.delete(activeStep);
    // }

    dispatch(updateActiveStep(activeStep + 1));
    // setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // setSkipped(newSkipped);
  };

  const handleBack = () => {
    dispatch(updateActiveStep(activeStep - 1));
    // setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleSkip = () => {
  //   if (!isStepOptional(activeStep)) {
  //     // You probably want to guard against something like this,
  //     // it should never occur unless someone's actively trying to break something.
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }

  //   dispatch(updateActiveStep(activeStep + 1));
  //   // setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped((prevSkipped) => {
  //     const newSkipped = new Set(prevSkipped.values());
  //     newSkipped.add(activeStep);
  //     return newSkipped;
  //   });
  // };

  const handleNavigate = () => {
    resetForm();
    dispatch(getDataFormCheckoutApiAction(values));
    dispatch(updateActiveStep(0));
    navigate('/');
  };

  return (
    <Box sx={{ width: '100%', p: 4 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          // const labelProps: {
          //   optional?: React.ReactNode;
          // } = {};
          // if (isStepOptional(index)) {
          //   labelProps.optional = (
          //     <Typography variant='caption'>Optional</Typography>
          //   );
          // }
          // if (isStepSkipped(index)) {
          //   stepProps.completed = false;
          // }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re will received the email billing
            information soon.
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNavigate}>Return To Homepage</Button>
          </Box>
        </>
      ) : (
        <Box onSubmit={handleSubmit} component='form' autoComplete='off'>
          {/* Information */}
          {activeStep === 0 && (
            <CheckoutForm handleChange={handleChange} values={values} />
          )}
          {/* Shipping */}
          {activeStep === 1 && (
            <CheckoutShipping handleChange={handleChange} values={values} />
          )}
          {/* Payment */}
          {activeStep === 2 && (
            <CheckoutShipping handleChange={handleChange} values={values} />
          )}

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            {activeStep === 0 ? (
              <Button
                onClick={() => navigate('/cart')}
                sx={{ mr: 1 }}
                startIcon={<NavigateBeforeIcon />}
              >
                Return To Cart
              </Button>
            ) : (
              <Button
                color='inherit'
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
            )}
            <Box sx={{ flex: '1 1 auto' }} />
            {/* {isStepOptional(activeStep) && (
              <Button color='inherit' onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )} */}
            <Button
              type='submit'
              // onClick={handleNext}
            >
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}
