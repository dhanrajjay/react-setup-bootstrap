import React from 'react';
import { Form, Row } from 'react-bootstrap';

export default function SelectComp() {
  const minOffset = 0;
  const maxOffset = 60;  
  const [day, setDay] = React.useState('');
  const [month, setMonth] = React.useState('');
  const [year, setYear] = React.useState('');
  const handleDay = event => {
    setDay(event.target.value);
  };
  const handleMonth = event => {
    setMonth(event.target.value);
  };
  const handleYear = event => {
    setYear(event.target.value);
  };
  const yearOptions = [];
  for (let i = minOffset; i <= maxOffset; i++) {
    const year = (new Date()).getFullYear() - i;
    yearOptions.push(<option value={year} key={i}>{year}</option>);
  };
  const monthList = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const monthOptions = [];
  for (let i = 0; i < monthList.length; i++) {
    monthOptions.push(<option value={monthList[i]} key={i}>{monthList[i]}</option>);
  };
  const dayOptions = [];
  for (let i = 1; i <= 30; i++) {
    dayOptions.push(<option value={i} key={i}>{i}</option>);
  };

  return (
    <>
      <label component="legend">EFFECTIVE DATE</label>
      <div>      
        <Form.Group as={Row}>
          <div>
            <select className="browser-default custom-select" value={day} onChange={handleDay}>
              {dayOptions}
            </select>
          </div>
          <div>
            <select className="browser-default custom-select" value={month} onChange={handleMonth}>
              {monthOptions}
            </select>
          </div>
          <div>
            <select className="browser-default custom-select" value={year} onChange={handleYear}>
              {yearOptions}
            </select>
          </div>
        </Form.Group>  
      </div>
    </>  
  );
}
