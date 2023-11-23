'use client';
import { button, ButtonVariantProps } from '@/theme';
import { ReactNode, forwardRef } from 'react';

export interface ButtonProps extends ButtonVariantProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const classNames = button({ ...props, className: props.className })
    return <button className={classNames} ref={ref} onClick={props.onClick}>{props.children}</button>;
  }
);
