import * as React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";

export default function DateInput(props) {
    const [selectedDate, setSelectedDate] = React.useState(null);
    const handleDateChange = (value) => {
        setSelectedDate(value);
        value != 'Invalid Date' && props.onDateChange(value);
    }
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                fullWidth
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-dialog"
                label="Select a date to get top 5 mostvisited sites"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                maxDate = {new Date('2021-10-27')}
                minDate = {new Date('2021-10-23')}
            />
        </MuiPickersUtilsProvider>
    );
}