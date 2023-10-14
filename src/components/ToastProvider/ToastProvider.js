import React from 'react';

export const ToastsContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function createToast(message, variant) {
    const newToast = { message, variant, id: crypto.randomUUID() };
    const nextToasts = [...toasts, newToast];
    setToasts(nextToasts);
  }

  function dismissToast(id) {
    const nextToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(nextToasts);
  }

  return (
    <ToastsContext.Provider
      value={{ toasts, createToast, dismissToast }}
    >
      {children}
    </ToastsContext.Provider>
  );
}

export default ToastProvider;
