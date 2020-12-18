import dayjs from 'dayjs';
import React from 'react';
import {ResponsiveContainer, LineChart, Line, XAxis, ReferenceLine, CartesianGrid,} from 'recharts';
import { calculateBiorhythmSeries} from "../calculations"
import './BiorhythmChart.css'

function formatDate(isoString){
    return dayjs(isoString).format('D MMM');
}


function BiorhythmChart({birthDate,targetDate}){// the reason for the error was that i had written (birthDate,targetDate as a prop instaed of an object {birthDate,targetDate}. Prop can only be a single object)
// Whatever values we pass to the component in this case, birthDate, target date, they are passed as an object. We can either have function biorhythmChart(prop), and then use as prop.birthDate and prop.targetDate, or we can use them by destructure notation as {birthdate, targetdate}
const startDate = dayjs(targetDate).subtract(15,'days').toISOString(); // adding toISOString giving error, and same error with next line. Error was because, it targetDate was not being defined.
const data = calculateBiorhythmSeries(birthDate,startDate, 31).map((item)=> ({...item, date: formatDate(item.date)})); 
  

return(
        
<ResponsiveContainer width="100%" height={200} className = "biorhythm-chart ">
<LineChart data = {data}  >
    <XAxis dataKey="date" ticks = {[data[1].date,data[15].date, data[30].date]}/>
    <CartesianGrid vertical= {false} strokeDasharray = "3 3" />
    <ReferenceLine x = {data[15].date} />
<Line type="natural" dot={false} dataKey="physical" className = "physical"/>
<Line type="natural" dot= {false} dataKey = "emotional" className = "emotional"/>
<Line type="natural" dot= {false} dataKey = "intellectual" className= "intellectual"/>
</LineChart>
</ResponsiveContainer>

);
}
export default BiorhythmChart;