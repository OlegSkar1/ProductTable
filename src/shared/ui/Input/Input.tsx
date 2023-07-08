import { InputHTMLAttributes, memo, useEffect, useRef } from 'react';
import cls from './Input.module.css';
import { classNames } from '@/shared/lib/classNames/classNames';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'disabled'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  readonly?: boolean;
  validateError?: string;
}

export const Input: React.FC<InputProps> = memo((props) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    label,
    autoFocus,
    readonly,
    validateError,
    ...otherProps
  } = props;
  const ref = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  useEffect(() => {
    if (autoFocus) {
      ref?.current?.focus();
    }
  }, [autoFocus]);

  return (
    <div className={className}>
      {label && <span>{label}</span>}
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={classNames('', [className], { [cls.invalid]: validateError })}
        disabled={readonly}
        {...otherProps}
      />
      <p className={cls.errorDesc}>{validateError}</p>
    </div>
  );
});
