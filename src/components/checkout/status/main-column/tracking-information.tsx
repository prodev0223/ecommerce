import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

import { StepIconProps } from '@mui/material/StepIcon';
import { styled } from '@mui/material/styles';
import Check from '@mui/icons-material/Check';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

const steps = [
  {
    label: 'Delivered, parcel locker',
    address: `providence, ri 02903`,
    date: 'April 3, 2023, 4:23pm'
  },
  {
    label: 'Out for delivery',
    address: `providence, ri 02903`,
    date: 'April 3, 2023, 4:23pm'
  },
  {
    label: 'Arrived at post office',
    address: `providence, ri 02903`,
    date: 'April 3, 2023, 4:23pm'
  },
  {
    label: 'Departed USPS regional facility',
    address: `providence, ri 02903`,
    date: 'April 3, 2023, 4:23pm'
  },
  {
    label: 'In transit to next facility',
    address: ``,
    date: 'April 3, 2023, 4:23pm'
  },
  {
    label: 'Departed post office',
    address: `providence, ri 02903`,
    date: 'April 3, 2023, 4:23pm'
  },
];



const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    marginLeft:"9px",
    ...(ownerState.active && {
      color: '#784af4',
    }),
    '& .QontoStepIcon-completedIcon': {
      color: '#784af4',
      zIndex: 1,
      fontSize: 18,
      width: "16px",
      height: "16px",
   
    },
    '& .QontoStepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: '#449FDC',
    },
  }),
);

function QontoStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;
  
    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <CheckCircleIcon className="QontoStepIcon-completedIcon" />
        ) : (
          <div className="QontoStepIcon-circle" />
        )}
      </QontoStepIconRoot>
    );
  }



export default function TrackingInformation() {


  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label} expanded={true} active completed={index === 0}>
            <StepLabel StepIconComponent={QontoStepIcon}>
              {step.label}
            </StepLabel>
            <StepContent>
                <Stack sx={{gap:"6px"}}>

              <Typography>{step.address}</Typography>
              <Typography>{step.date}</Typography>
                </Stack>
            </StepContent>
          </Step>
        ))}
        <Step>
        <StepLabel StepIconComponent={QontoStepIcon}>
              
            </StepLabel>
        </Step>
      </Stepper>
    </Box>
  );
}
