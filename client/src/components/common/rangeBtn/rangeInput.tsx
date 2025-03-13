import React, { useState, useEffect } from "react";
import styles from './rangeBtn.module.scss';

interface RangeSliderProps {
  min: number;
  max: number;
  step?: number;
  values: { min: number; max: number };
  onChange: (values: { min: number; max: number }) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ min, max, step = 1, values, onChange }) => {
  const [minValue, setMinValue] = useState(values.min);
  const [maxValue, setMaxValue] = useState(values.max);

  useEffect(() => {
    setMinValue(values.min);
    setMaxValue(values.max);
  }, [values]);

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(event.target.value), maxValue - step);
    setMinValue(value);
    onChange({ min: value, max: maxValue });
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(event.target.value), minValue + step);
    setMaxValue(value);
    onChange({ min: minValue, max: value });
  };

  return (
    <div className={styles.rangeSlider}>
      <div className={styles.sliderContainer}>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minValue}
          onChange={handleMinChange}
          className={styles.thumb}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxValue}
          onChange={handleMaxChange}
          className={styles.thumb}
        />
        <div className={styles.sliderTrack} style={{
          left: `${((minValue - min) / (max - min)) * 100}%`,
          right: `${100 - ((maxValue - min) / (max - min)) * 100}%`
        }}></div>
      </div>
      <div className={styles.values}>
        <span>${minValue}</span> - <span>${maxValue}</span>
      </div>
    </div>
  );
};

export default RangeSlider;
