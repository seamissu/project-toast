import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastsContext } from '../ToastProvider';

// data =  // toasts = [{message: 'I'm a message', variant: 'notice', id: '1234-5678'},  ...   ]

function ToastShelf() {
  const { toasts } = React.useContext(ToastsContext);

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast variant={toast.variant} id={toast.id}>
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
