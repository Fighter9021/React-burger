import React from 'react';
import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';
import PropTypes from 'prop-types';
import styles from './modal.module.css'
import { ESC_KEYCODE } from '../../utils/constants';

export default function Modal(props) {
    const close = () => {
        props.setModal({isVisible: false, content: null});
    }

    React.useEffect(
        () => {
            const closeByEsc = (e) => {(e.keyCode === ESC_KEYCODE) && close()};
		    window.addEventListener("keydown", closeByEsc);
		    return () => {
			    window.removeEventListener("keydown", closeByEsc);
		    }
	    }, 
        []
    );

    return ReactDOM.createPortal(
        (
            <>
                <ModalOverlay close={close}/>
                <div className={styles.modal}>
                    <span className={styles.close} onClick={close}>
                        <CloseIcon type="primary"/>
                    </span>
                    {props.children}
                </div>
            </>
        ),
        wrapper
    );
}

const wrapper = document.getElementById("modals");

Modal.propTypes = {
    children: PropTypes.element.isRequired,
    setModal: PropTypes.func.isRequired
};