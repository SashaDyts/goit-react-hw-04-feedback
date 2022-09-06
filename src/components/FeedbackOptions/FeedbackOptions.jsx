import React from 'react';
import { ButtonsList, ButtonsListItem, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ setGood, setBad, setNeutral }) => {
  return (
    <>
      <ButtonsList>
        <ButtonsListItem>
          <Button
            type="button"
            onClick={() => {
              setGood(state => state + 1);
            }}
          >
            Good
          </Button>
        </ButtonsListItem>
        <ButtonsListItem>
          <Button
            type="button"
            onClick={() => {
              setBad(state => state + 1);
            }}
          >
            Bad
          </Button>
        </ButtonsListItem>

        <ButtonsListItem>
          <Button
            type="button"
            onClick={() => {
              setNeutral(state => state + 1);
            }}
          >
            Neutral
          </Button>
        </ButtonsListItem>
      </ButtonsList>
    </>
  );
};

FeedbackOptions.propTypes = {
  setBad: PropTypes.func,
  setGood: PropTypes.func,
  setNeutral: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.string),
};

export default FeedbackOptions;
