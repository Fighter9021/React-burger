import React from 'react';
import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';
import PropTypes from 'prop-types';
import styles from './modal.module.css'

export default function Modal({children, setModal}) {
    const close = () => {
        setModal({isVisible: false, content: null});
    }

    const closeByEsc = (e) => {
        if (e.keyCode === 27) {
            close();
        }
    }

    React.useEffect(() => {
		window.addEventListener("keydown", closeByEsc);
		return () => {
			window.removeEventListener("keydown", closeByEsc);
		}
	});

    return ReactDOM.createPortal(
        (
            <>
                <ModalOverlay close={close}/>
                <div className={styles.modal}>
                    <span className={styles.close} onClick={close}>
                        <CloseIcon type="primary"/>
                    </span>
                    {children}
                </div>
            </>
        ),
        document.getElementById("modals")
    );
}

Modal.propTypes = {
    children: PropTypes.element.isRequired,
    setModal: PropTypes.func.isRequired
};