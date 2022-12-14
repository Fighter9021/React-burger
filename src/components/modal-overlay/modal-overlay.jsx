import React from 'react';
import PropTypes from 'prop-types';
import styles from './modal-overlay.module.css';

export default function ModalOverlay(props) {
    return (
        <div className={styles.overlay} onClick={props.close} />
    );
}

ModalOverlay.propTypes = {
    close: PropTypes.func.isRequired
};