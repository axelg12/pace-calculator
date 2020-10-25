import React, { useState } from 'react';
import Input from './Input';
import './App.css';

function App() {
  const [time, setTime] = useState({
    h: 0,
    m: 0,
    s: 0,
  });
  const [pace, setPace] = useState({
    h: 0,
    m: 0,
    s: 0,
  });
  const [distance, setDistance] = useState(0);
  const [selectedUnit, setSelectedUnit] = useState('meters');

  const changeTime = (value: string, type: string) => {
    setTime({ ...time, ...{ [type]: value } });
  };

  const changePace = (value: string, type: string) => {
    setPace({ ...time, ...{ [type]: value } });
  };

  const calculateDistance = () => {
    const minutes = Number(time.s) / 60 + Number(time.m) + Number(time.h) * 60;
    const paceMinutes = Number(pace.s) / 60 + Number(pace.m) + Number(pace.h) * 60;
    const unitMultiplier = selectedUnit === 'meters' ? 1000 : 1 / 1.60934;
    const num = (minutes / paceMinutes) * unitMultiplier;
    setDistance(Math.round((num + Number.EPSILON) * 100) / 100);
  };

  const getDistance = () => {
    if (selectedUnit === 'meters') {
      return Number(distance) / 1000;
    }
    return Number(distance) * 1.60934;
  };

  const calculateTime = () => {
    const paceMinutes = pace.s / 60 + pace.m + pace.h * 60;
    const time = getDistance() * paceMinutes;
    const hours = Math.floor(time / 60);
    const pSec = Math.round((time % 1) * 60);
    setTime({
      h: hours,
      m: Math.floor(time - hours * 60),
      s: pSec,
    });
  };

  const calculatePace = () => {
    const hours = Number(time.s) / 60 / 60 + Number(time.m) / 60 + Number(time.h);
    const avgSpeed = getDistance() / hours;
    const paceInMinutes = 60 / avgSpeed;
    const pHours = Math.floor(paceInMinutes / 60);
    const pSec = Math.round((paceInMinutes % 1) * 60);
    setPace({
      h: 0,
      m: Math.floor(paceInMinutes - pHours * 60),
      s: pSec,
    });
  };

  return (
    <div className="App">
      <h2>Time</h2>
      <div className="App__section">
        <Input
          placeholder="Hours"
          label="Hours"
          onChange={(value) => changeTime(value, 'h')}
          value={time.h}
        />
        <Input
          placeholder="Minutes"
          label="Minutes"
          onChange={(value) => changeTime(value, 'm')}
          value={time.m}
        />
        <Input
          placeholder="Seconds"
          label="Seconds"
          onChange={(value) => changeTime(value, 's')}
          value={time.s}
        />
      </div>
      <h2>Distance</h2>
      <div className="App__section">
        <Input
          placeholder={`Distance in ${selectedUnit}`}
          label="Distance"
          onChange={(value) => setDistance(value)}
          value={distance}
        />
        <input
          type="radio"
          id="meters"
          name="unit"
          value="meters"
          onChange={(e) => setSelectedUnit(e.target.value)}
          checked={selectedUnit === 'meters'}
        />
        <label htmlFor="meters">Meters</label>
        <input
          type="radio"
          id="miles"
          name="unit"
          value="miles"
          onChange={(e) => setSelectedUnit(e.target.value)}
          checked={selectedUnit === 'miles'}
        />
        <label htmlFor="miles">Miles</label>
      </div>
      <h2>Pace</h2>
      <div className="App__section">
        <Input
          placeholder="Hours"
          label="Hours"
          onChange={(value) => changePace(value, 'h')}
          value={pace.h}
        />
        <Input
          placeholder="Minutes"
          label="Minutes"
          onChange={(value) => changePace(value, 'm')}
          value={pace.m}
        />
        <Input
          placeholder="Seconds"
          label="Seconds"
          onChange={(value) => changePace(value, 's')}
          value={pace.s}
        />
      </div>
      <div className="App__section">
        <button onClick={calculateTime}>Calculate time</button>
        <button onClick={calculateDistance}>Calculate distance</button>
        <button onClick={calculatePace}>Calculate pace</button>
      </div>
    </div>
  );
}

export default App;
