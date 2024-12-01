import {Button, Paper, Stack } from '@mui/material';
import React, { useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { blueGrey, green } from '@mui/material/colors';
import {Container} from '@mui/material';
import {Box} from '@mui/material';



export default function LandingView(props){

        const[travelDate, settravelDate] = useState(new Date());
        const[returnDate,setReturnDate] = useState(new Date());
        const [formData, setFormData] = useState({
            origin: "",
            dest:"",
            date :new Date(),
            returnDate : new Date(),
            numTravellers :""
        })

        const handleInputChange = event  => {
            const {name,value} = event.target;

            setFormData(preDatab => ({
                ...prevData, [name]:value
            }));
        }
        const dispatch = useDispatch();

        const handleSearch =() =>{

            const info = {};
            info.origin=
            info.dest=
            info.data=

                dispatch(searchFlights({})).then(resp => {
                    console.log("request complete");
                })
        }

        return (
            <div>
                <Stack direction="column" justifyContent="center">
                <Container maxWidth="sm">
                   <form>
                   <Paper elevation={10}>
                    <h3>Enter Search Criteria to find flights</h3>
                    <div className='inner-search-form'>

                    <FormControl>
                    
                     <RadioGroup
                     aria-labelledby="demo-radio-buttons-group-label"
                     defaultValue="One Way"
                     name="radio-buttons-group"
                    >
                    <FormControlLabel value="One Way" control={<Radio />} label="One Way" />
                     <FormControlLabel value="Round Tripe" control={<Radio />} label="Round Tripe" />
                    
                    </RadioGroup>
                   

                    </FormControl>
                    <div>
                        <TextField
                        
                         //onChange={(event) =>handleFirstNameChange(event.target.value)}
                            label="From"
                            variant="outlined"
                        // helperText = {firstNameError}
                             name = "origin"
                             onChange={handleInputChange}
                        />
                        &nbsp;
                       <TextField
                        
                        //onChange={(event) =>handleFirstNameChange(event.target.value)}
                        label="to"
                        variant="outlined"
                        name = "dest"
                       // helperText = {firstNameError}
                       onChange={handleInputChange}
                    
                     />
                    </div>
                    <br/>
                    <div>
                        <Stack direction ="row">
                    <TextField
                        
                        //onChange={(event) =>settravelDate(event.target.value)}
                           label="Date"
                           variant="outlined"
                           type ="date"
                           value = {travelDate}
                           name ="date"
                       // helperText = {firstNameError}
                       onChange={handleInputChange}
                       />
                        &nbsp;
                    <TextField
                        
                       // onChange={(event) =>setReturnDate(event.target.value)}
                           label="Return date"
                           variant="outlined"
                           type ="date"
                           value ={returnDate}
                           name = "returnDate"
                           onChange={handleInputChange}
                           
                       // helperText = {firstNameError}
                    />
                    &nbsp;
                    <TextField
                        
                        //onChange={(event) =>handleFirstNameChange(event.target.value)}
                           label="# travellers"
                           variant="outlined"
                           name = "numTravellers"
                           onChange={handleInputChange}
                          
                       // helperText = {firstNameError}
                    />
                    </Stack>
                    </div>
                    <br/>

                    <div>
                        <Button onClick={() => handleSearch()} size='large' variant ="contained" color ='success'>Search</Button>
                    </div>

                    </div>
                    </Paper>
                    </form>
                    </Container>
                    <div>
                         <Stack direction="column" justifyContent="center">
                         <Container maxWidth="xl">
                            <Paper elevation={6}>
                                <h3>Recommandation</h3>
                                <div style={{pading:'10px'}}>
                                <Stack direction="row" justifyContent="center" spacing={3}>
                                        <Box
                                        sx={{
                                                    width: 200,
                                                    height: 200,
                                                    borderRadius: 1,
                                                    border: 'solid 3px green'
                                                    }}
                                            />

                                        <Box
                                        sx={{
                                                    width: 200,
                                                    height: 200,
                                                    borderRadius: 1,
                                                    border: 'solid 3px green'
                                                    }}
                                            />

                                        <Box
                                        sx={{
                                                    width: 200,
                                                    height: 200,
                                                    borderRadius: 1,
                                                    border: 'solid 3px green'
                                                    }}
                                            />

                                        <Box
                                        sx={{
                                                    width: 200,
                                                    height: 200,
                                                    borderRadius: 1,
                                                    border: 'solid 3px green'
                                                    }}
                                            />
                                </Stack>
                                <br/>
                              </div>
                            </Paper>
                         </Container>
                          </Stack>
                    </div>

                </Stack>

            </div>
         )
}
