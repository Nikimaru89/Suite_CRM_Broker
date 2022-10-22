import React from "react";
import { InputAdornment, TextField } from "@mui/material";

const getFlagUrl = (countryCode) => {
  return `https://countryflagsapi.com/svg/${countryCode.toLowerCase()}`;
};

const PhoneNumber = ({
  errors,
  state,
  handleChange,
  handleBlur,
  countryCode
}) => {
  return (
    <TextField
      required
      name="phone"
      label="Phone Number"
      error={errors.phone ? true : false}
      defaultValue={state.phone}
      // value={state.phone}
      onChange={handleChange}
      helperText={errors.phone}
      onBlur={handleBlur}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" disablePointerEvent={false}>
            <img
              src={countryCode && getFlagUrl(countryCode)}
              alt={countryCode || ""}
              height="18px"
            />
          </InputAdornment>
        )
      }}
    />
  );
};

export default PhoneNumber;
