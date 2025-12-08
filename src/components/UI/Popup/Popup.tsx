import React, { useEffect, useRef } from "react";
import "./Popup.scss";

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  className?: string;
  closeOnOverlayClick?: boolean; // default true
};

const FOCUSABLE_SELECTORS =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className = "",
  closeOnOverlayClick = true,
}) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const lastActiveRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    // save last focused element
    lastActiveRef.current = document.activeElement as HTMLElement | null;

    // lock scroll
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // focus first focusable inside popup or content itself
    const focusable =
      contentRef.current?.querySelector<HTMLElement>(FOCUSABLE_SELECTORS);
    (focusable ?? contentRef.current)?.focus();

    // key handler
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        // basic focus trap
        const container = contentRef.current;
        if (!container) return;

        const focusables = Array.from(
          container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)
        ).filter((el) => el.offsetParent !== null);

        if (focusables.length === 0) {
          e.preventDefault();
          return;
        }

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      // restore focus
      lastActiveRef.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const onOverlayClick = (e: React.MouseEvent) => {
    if (!closeOnOverlayClick) return;
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      className="popup-overlay"
      ref={overlayRef}
      onMouseDown={onOverlayClick}
      aria-modal="true"
      role="dialog"
      aria-labelledby={title ? "popup-title" : undefined}
    >
      <div
        className={`popup ${className}`}
        ref={contentRef}
        tabIndex={-1}
        role="document"
      >
        <div className="popup__header">
          {title && (
            <h3 id="popup-title" className="popup__title">
              {title}
            </h3>
          )}
          <button
            className="popup__close"
            onClick={onClose}
            aria-label="Закрыть"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              data-sentry-element="svg"
              data-sentry-component="IconClose"
              data-sentry-source-file="IconClose.tsx"
            >
              <rect
                width="32"
                height="32"
                rx="16"
                fill="rgb(0, 43, 82)"
                data-sentry-element="rect"
                data-sentry-source-file="IconClose.tsx"
              ></rect>
              <path
                d="M20 12L16 16M12 20L16 16M16 16L12 12M16 16L20 20"
                stroke="#0085FF"
                stroke-width="1.7"
                stroke-linecap="round"
                data-sentry-element="path"
                data-sentry-source-file="IconClose.tsx"
              ></path>
            </svg>
          </button>
        </div>

        <div className="popup__body">{children}</div>
      </div>
    </div>
  );
};

export default Popup;
