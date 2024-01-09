    import { useState } from "react";
    import axios from 'axios';

    const Form = ({data, setData}) => {
            const [city, setCity] = useState('');

            const getWeather = (city) => {
                let KEY = 'f4833cf990dc92ef43563c9b00da2a78';
                let APILink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`;
                if(city){
                    axios(APILink).then(({data}) => { 
                        setData(data);
                        setCity('');
                        console.log(data)
                    })
                    .catch(error => {
                        if (error.response && error.response.status === 404) {
                            console.error('City not found');
                        }
                    });
                }
            };

        return (
            <div className="form">
                <input onChange={(event)=>{
                setCity(event.target.value);
                }} value={city} type="text" />
                <button onClick={()=>{
                    getWeather(city);
                }}>search</button>
            </div>
        );
    }

    export default Form;
