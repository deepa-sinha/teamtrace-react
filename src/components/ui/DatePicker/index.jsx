import React, { useState } from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField, InputAdornment } from "@mui/material";
import "./style.scss";

export default function BsicDatePicker() {
  const [value, setValue] = useState(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={value}
        onChange={(newValue) => setValue(newValue)}
        slotProps={{
          textField: {
            fullWidth: true,
            className: "date-picker",
          },
        }}
      />
    </LocalizationProvider>
  );
}
