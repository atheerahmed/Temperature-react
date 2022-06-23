import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [countryName,setCountryName]= useState("");
  const [temperature,setTemperature]= useState("");


  useEffect(() => {
    const getDataFromApi = async () => {
      const request = await fetch(
        'https://goweather.herokuapp.com/weather/' + countryName );
      const data = await request.json();
      console.log(data);
      setTemperature(data.temperature);
    };
    getDataFromApi();
  }, [countryName]);


  return (
    <div className="text-center">
             
          <h3 className='text-center mt-3 w-100'>
          The temperature in <span className='color'>{countryName}</span>  is as follows:{' '}
              
            </h3>

            <div className='input-group  mt-3'>
            <input
              type='text'
              value={countryName}
              onChange={(e) => setCountryName(e.target.value)}
              className='form-control'
              placeholder='Country name'
            />
            </div>
            
            <div className='data mt-3'>
              <div className='text-center'>
                <h3>Temperature is: <span className='color'>{temperature}</span></h3>
              </div>
              </div>


  
    </div>
  );
};

export default App;
