

const Table = ({data}) => {
    const kelvinToCelsius = (kelvin) => {
        return kelvin - 273.15;
      };

      
    return (
        <div>
            {
                JSON.stringify(data) === '{}'
                ? ''
                : <table>
                    <tr>
                        <td>temp</td>
                        <td>{kelvinToCelsius(data.main.temp).toFixed(2)} °C</td>
                    </tr>
                    <tr>
                        <td>description</td>
                        <td>{data.weather[0].description}</td>
                    </tr>
                    <tr>
                        <td>city</td>
                        <td>{data.name}</td>
                    </tr>
                    <tr>
                        <td>country</td>
                        <td>{data.sys.country}</td>
                    </tr>
                </table>
            }
        </div>
    );
}

export default Table;
