import React from 'react';

import styles from './SignUpButton.module.scss';

const SignUpButton = ({isDisabled}) => <button type="submit" className={styles.button} disabled={isDisabled}>Sign Up</button>;

export default SignUpButton;