import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import PropTypes from 'prop-types';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function countPositiveFeedbackPercentage() {
    const total = Math.round((good / countTotalFeedback()) * 100);

    return total;
  }

  function countTotalFeedback() {
    const total = Object.values({ good, neutral, bad }).reduce(
      (acc, value) => acc + value
    );

    return total;
  }

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          setGood={setGood}
          setNeutral={setNeutral}
          setBad={setBad}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}

App.propTypes = {
  bad: PropTypes.number,
  good: PropTypes.number,
  neutral: PropTypes.number,
};

export default App;
