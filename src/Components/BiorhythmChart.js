import dayjs from 'dayjs';
import React from 'react';
import {ResponsiveContainer, LineChart, Line, XAxis,} from 'recharts';
import { calculateBiorhythmSeries} from "../calculations"
import './BiorhythmChart.css'

const data = [{date: '2020-01-01',physical:0.99,emotional:0.98,intellectual: 0.3},
    {date: '2020-01-01', physical:0.44,emotional:0.98,intellectual: 0.3},
    {date: '2020-01-01',physical:0.09,emotional:0.18,intellectual: 0.3},];


function BiorhythmChart(birthDate, targetDate){
    const startDate = dayjs(targetDate).subtract(15,'days'); // adding toISOString giving error, and same error with next line
   // const data = calculateBiorhythmSeries(birthDate,startDate, 31); 
    return(
        
<ResponsiveContainer width="100%" height={200} className = "biorhythm-chart">
<LineChart data = {data}  >
    <XAxis dataKey="date"/>
<Line type="monotone" dataKey="physical" className = "physical"/>
<Line dataKey = "emotional" className = "emotional"/>
<Line dataKey = "intellectual" className= "intellectual"/>
</LineChart>
</ResponsiveContainer>

);
}
export default BiorhythmChart;