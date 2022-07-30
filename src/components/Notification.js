import React from 'react';
import s from './feedback.module.css';
import { PropTypes } from 'prop-types';

const Notification = ({ message }) => <p className={s.text}>{message}</p>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
