import './SeasonDisplay.css';
import React from 'react';

//** Refactoring the funtion text and icon in single object */
const seasonConfig = {
  Summer: {
    text: "Let's hit the swimming pool!!!",
    iconName: 'sun',
  },
  Winter: {
    text: 'Burr, it is chilly!!!',
    iconName: 'snowflake',
  },
};

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? 'Summer' : 'Winter';
  } else {
    return latitude > 0 ? 'Winter' : 'Summer';
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth());
  //   const text =
  //     season === 'Summer' ? 'Lets hit the swimming pool!!!' : 'Burr, it is chilly';
  //   const icon = season === 'Summer' ? 'sun' : 'snowflake';

  const { text, iconName } = seasonConfig[season]; //return {text, iconName}

  console.log(season);

  return (
    <div className={`season-display ${season}`}>
      <i className={`left-icon massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`right-icon massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
