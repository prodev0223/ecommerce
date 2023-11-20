import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';

interface ICheckboxBlockProps {
    label?: string
}

export default function CheckboxBlock({label}:ICheckboxBlockProps) {
  return (
    <div>
      <FormControlLabel required control={<Checkbox icon={<FiberManualRecordOutlinedIcon />} checkedIcon={<FiberManualRecordIcon />} />} label={label} />
    </div>
  );
}