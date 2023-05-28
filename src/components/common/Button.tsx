'use client';
import clsx from 'clsx';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, disabled, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        'flex flex-row items-center justify-center gap-2 px-6 py-4 rounded-lg shadow-md leading-none',
        disabled && 'opacity-80 cursor-not-allowed',
        className
      )}
      disabled={disabled}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
