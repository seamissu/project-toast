import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

// data =  // toasts = [{message: 'I'm a message', variant: 'notice', id: '1234-5678'},  ...   ]

function ToastShelf({ data, handleDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {data.map((toast) => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast
            variant={toast.variant}
            handleDismiss={handleDismiss}
            id={toast.id}
          >
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
