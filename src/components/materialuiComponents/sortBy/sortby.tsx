import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

export default function SimpleSelect({sortBy,setSortBy}:any) {
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSortBy(event.target.value as string);
  };

  return (
    <div>
      
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-autowidth-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={sortBy}
          onChange={handleChange}
          autoWidth
        >
          <MenuItem value={"distance"}>Distance</MenuItem>
          <MenuItem value={"price asc"}>Price (Low to High)</MenuItem>
          <MenuItem value={"price desc"}>Price (High to Low)</MenuItem>
        </Select>
       
      </FormControl>
     
    </div>
  );
}
