import { Button, Paper, Stack, Container, Box, TextField, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { searchFlights } from '../component/action/flight-actions';
import { blueGrey, green } from '@mui/material/colors';

export default function LandingView(props) {
  const [travelDate, setTravelDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [formData, setFormData] = useState({
    origin: "",
    dest: "",
    date: new Date(),
    returnDate: new Date(),
    numTravellers: ""
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData, [name]: value
    }));
  };

  const dispatch = useDispatch();

  const handleSearch = () => {
    const info = {
      origin: formData.origin,
      dest: formData.dest,
      date: formData.date
    };
    dispatch(searchFlights(info)).then(resp => {
      console.log("request complete");
    });
  };

  return (
    <div style={{ backgroundSize:'cover' ,  padding: '100px', backgroundImage: 'url("https://blog.adobe.com/en/publish/2022/06/14/media_101523c4fd5175e08bd6ffbe8c509525cccba34cb.jpeg?width=1200&format=pjpg&optimize=medium")' }}>

      {/* Main Form Section */}
      <Stack direction="column" justifyContent="center">
        <Container maxWidth="sm">
          <form>
            <Paper elevation={10} style={{ padding: '20px' }}>
              <h3>Enter Search Criteria to Find Flights</h3>
              <div className='inner-search-form'>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="One Way"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="One Way" control={<Radio />} label="One Way" />
                    <FormControlLabel value="Round Trip" control={<Radio />} label="Round Trip" />
                  </RadioGroup>
                </FormControl>

                <div>
                  <TextField
                    label="From"
                    variant="outlined"
                    name="origin"
                    onChange={handleInputChange}
                  />
                  &nbsp;
                  <TextField
                    label="To"
                    variant="outlined"
                    name="dest"
                    onChange={handleInputChange}
                  />
                </div>
                <br />
                <div>
                  <Stack direction="row">
                    <TextField
                      label="Date"
                      variant="outlined"
                      type="date"
                      value={formData.date}
                      name="date"
                      onChange={handleInputChange}
                    />
                    &nbsp;
                    <TextField
                      label="Return Date"
                      variant="outlined"
                      type="date"
                      value={formData.returnDate}
                      name="returnDate"
                      onChange={handleInputChange}
                    />
                    &nbsp;
                    <TextField
                      label="# Travellers"
                      variant="outlined"
                      name="numTravellers"
                      onChange={handleInputChange}
                    />
                  </Stack>
                </div>
                <br />
                <div>
                  <Button onClick={handleSearch} size="large" variant="contained" color="success">Search</Button>
                </div>
              </div>
            </Paper>
          </form>
        </Container>
      </Stack>

      {/* Recommendation Section */}
      <Stack direction="column" justifyContent="center" style={{ marginTop: '40px' }}>
        <Container maxWidth="xl">
          <Paper elevation={6} style={{ padding: '20px' }}>
            <h3>Recommendations</h3>
            <div style={{ padding: '10px' }}>
              <Stack direction="row" justifyContent="center" spacing={3}>
                <Box
                  sx={{
                    width: 200,
                    height: 200,
                    borderRadius: 1,
                    border: 'solid 3px green',
                    backgroundImage: 'url("https://th.bing.com/th/id/R.a5ffc2fd8a75c0b259166ed70e69e4bc?rik=JWqrI73PSlhUNg&pid=ImgRaw&r=0")',
                    backgroundSize: 'cover',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white'
                  }}
                >
                  <div style={{ textAlign: 'center',  color:"black"}}>
                    <h4>Paris</h4>
                  </div>
                </Box>
                <Box
                  sx={{
                    width: 200,
                    height: 200,
                    borderRadius: 1,
                    border: 'solid 3px green',
                    backgroundImage: 'url("https://th.bing.com/th/id/OIP.0pi1mXJKRPu35_ZA4ufafQHaDt?rs=1&pid=ImgDetMain")',
                    backgroundSize: 'cover',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white'
                  }}
                >
                  <div style={{ textAlign: 'center' }}>
                    <h4>Tokyo</h4>
                    
                  </div>
                </Box>
                <Box
                  sx={{
                    width: 200,
                    height: 200,
                    borderRadius: 1,
                    border: 'solid 3px green',
                    backgroundImage: 'url("https://th.bing.com/th/id/R.81a27361f69ccc68804789e68013da06?rik=UBhYc11rMM4Wjg&pid=ImgRaw&r=0")',
                    backgroundSize: 'cover',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white'
                  }}
                >
                  <div style={{ textAlign: 'center' }}>
                    <h4>Flight C</h4>
                    <p>Recommendation info</p>
                  </div>
                </Box>
                <Box
                  sx={{
                    width: 200,
                    height: 200,
                    borderRadius: 1,
                    border: 'solid 3px green',
                    backgroundImage: 'url("https://www.en-vols.com/wp-content/uploads/afmm/2022/12/GettyImages-1294321554_HEADER_Marrakech_local_Michelin.jpg")',
                    backgroundSize: 'cover',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white'
                  }}
                >
                  <div style={{ textAlign: 'center' }}>
                    <h4>Flight D</h4>
                    <p>Recommendation info</p>
                  </div>
                </Box>
              </Stack>
            </div>
          </Paper>
        </Container>
      </Stack>

    </div>
  );
}
