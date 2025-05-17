/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

type ToastOptions = {
  persistent?: boolean;
  duration?: number;
  icon?: React.ReactNode;
};

type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

type Toast = {
  id: number;
  content: React.ReactNode;
  position: ToastPosition;
  options: ToastOptions;
  visible: boolean;
};

type AddToastHandler = (
  content: React.ReactNode,
  position?: ToastPosition,
  options?: ToastOptions
) => void;

let addToastHandler: AddToastHandler | null = null;

export const toast = (
  content: React.ReactNode,
  position: ToastPosition = 'top-right',
  options: ToastOptions = {}
) => {
  if (addToastHandler) {
    addToastHandler(content, position, options);
  }
};

export const ToastContainer: React.FC = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const timers = useRef<Record<number, ReturnType<typeof setTimeout>>>({});

  console.log('toasts', toasts);


  const containerRef = useRef(null);

  const handleDismiss = (id) => {
    const toastEl = document.getElementById(`toast-${id}`);
    if (!toastEl) return;

    const pos = 'top'; // or 'bottom', based on your layout
    const offset = Number(toastEl.offsetHeight) + 15;
    const nextSiblings = [];

    let sib = toastEl.nextElementSibling;
    while (sib) {
      nextSiblings.push(sib);
      sib = sib.nextElementSibling;
    }

    // // Remove the toast visually
    // toastEl.remove();

    // Shift remaining toasts up
    nextSiblings.forEach((sib) => {
      const currentTop = parseInt(sib.style[pos] || '0', 10);
      sib.style[pos] = `${currentTop - offset}px`;
    });

    // Remove from state (optional, for React re-render)
    removeToast(id);
  };


  const hideToast = (id: number) => {
    setToasts((prev: Toast[]) =>
      prev.map((t: Toast) => (t.id === id ? { ...t, visible: false } : t))
    );
    setTimeout(() => removeToast(id), 500); // Allow fade-out transition
  };

  const removeToast = (id: number) => {
    setToasts((prev: Toast[]) => prev.filter((t: Toast) => t.id !== id));
    delete timers.current[id];
  };

  const pauseTimeout = (id: number) => {
    clearTimeout(timers.current[id]);
  };

  const resumeTimeout = (id: number, duration: number = 3000) => {
    timers.current[id] = setTimeout(() => hideToast(id), duration);
  };

  useEffect(() => {
    addToastHandler = (
      content: React.ReactNode,
      position: ToastPosition = 'top-right',
      options: ToastOptions = {}
    ) => {
      // alert('addToastHandler called');
      const id = Date.now() + Math.floor(Math.random() * 1000);
      setToasts((prev: Toast[]) => [
        ...prev,
        { id, content, position, options, visible: true },
      ]);

      if (!options.persistent) {
        const timeout = setTimeout(() => hideToast(id), options.duration || 3000);
        timers.current[id] = timeout;
      }
    };

    const timersSnapshot = { ...timers.current };

    return () => {
      addToastHandler = null;
      Object.values(timersSnapshot).forEach((timeout) => clearTimeout(timeout));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hideToast]);

  const byPosition = toasts.reduce<Record<ToastPosition, Toast[]>>((acc, toast) => {
    if (!acc[toast.position]) acc[toast.position] = [];
    acc[toast.position].push(toast);
    return acc;
  }, {} as Record<ToastPosition, Toast[]>);

  return ReactDOM.createPortal(
    <>
      {Object.entries(byPosition).map(([position, list]) => (
        <div
         ref={containerRef}
          key={`container-${position}`}
          style={{
            position: 'fixed',
            zIndex: 9999,
            [position.includes('top') ? 'top' : 'bottom']: '1rem',
            [position.includes('right') ? 'right' : 'left']: '1rem',
          }}
        >
          {(list.reverse() as Toast[]).map(({ id, content, options, visible }, index) => (
            <div
              key={id}
              onMouseEnter={() => pauseTimeout(id)}
              onMouseLeave={() => {
                if (!options.persistent) resumeTimeout(id, options.duration || 3000);
              }}
              // style={{
              //   margin: '0.5rem 0',
              //   padding: '1rem',
              //   background: '#333',
              //   color: '#fff',
              //   borderRadius: '4px',
              //   display: 'flex',
              //   alignItems: 'center',
              //   gap: '0.5rem',
              //   opacity: visible ? 1 : 0,
              //   transform: visible ? 'translateY(0)' : 'translateY(-10px)',
              //   transition: 'opacity 0.5s ease, transform 0.5s ease',
              // }}
            id={`toast-${id}`}
            style={{
              position: 'absolute',
              top: `${index * 60}px`, // just for demo
              left: '0',
              padding: '1rem',
              minWidth: '300px',
                background: '#333',
                color: '#fff',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(-10px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}
            >
              {options.icon && <span>{options.icon}</span>}
              <span>{content}</span>
              <button
                onClick={() => handleDismiss(id)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  marginLeft: 'auto',
                }}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      ))}
    </>,
    document.body
  );
};
