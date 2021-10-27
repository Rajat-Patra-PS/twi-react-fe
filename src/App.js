import './App.css';
import DataTable from './components/DataTable';
import DateInput from './components/DateInput';
import { useState } from 'react';

function App() {
    const [data, setData] = useState([]);

    const dateChangeHandler = (selectedDate) => {
        const event = new Date(selectedDate);
        let date = JSON.stringify(event);
        date = date.slice(1, 11);
        console.log(date);
        let url = new URL('https://twi-node-deploy.herokuapp.com/api/getWebsites/')

        var params = { sDate: date }

        url.search = new URLSearchParams(params).toString();

        fetch(url).then(response => response.json()).then(data => setData(data.res));
    }

    return (
        <div className="App">
            <DateInput onDateChange={(date) => dateChangeHandler(date)} />
            <DataTable rows={data} />
            <h5>Things we can add on top of this</h5>
            <ol>
                <li>We can show a loader while fetching the data from the server </li>
                <li>We can add a snackbar to show a success or error msg </li>
                <li>We Can list down the number of visits for a site from country/region</li>
                <li>We Can add country selection on the filter part to filter out most searched websites for a single country </li>
                <li>We Can add a graph to each website visits so that it can show at what time it is getting visited the most</li>
                <li>Also we can add a link to the website columns so that the user can click and visit that site</li>
            </ol>
        </div>
    );
}

export default App;
