

const Table = ({data}) => {
    return (
        <div>
            {
                JSON.stringify(data) === '{}'
                ? ''
                : <table>
                    <tr>
                        <td>temp</td>
                        <td>{data.main.temp}</td>
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
