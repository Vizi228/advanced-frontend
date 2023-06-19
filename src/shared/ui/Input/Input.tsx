import {
  ChangeEvent,
  InputHTMLAttributes,
  memo, useEffect, useRef,
  useState,
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface IInput extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Input = memo((props: IInput) => {
  const {
    onChange, value, className, type, autoFocus, placeholder, ...others
  } = props;

  const inputRef = useRef<HTMLInputElement>();
  const [isFocused, setIsFocused] = useState(false);
  const [caretDistance, setCaretDistance] = useState(0);

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange?.(value);
    setCaretDistance(value.length);
  };

  const onSelect = (e: any) => {
    setCaretDistance(e.target.selectionStart);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      inputRef.current?.focus();
    }
  }, [autoFocus]);
  return (
    <div className={classNames(styles.InputWrapper, {}, [className])}>
      {placeholder && (
        <div className={styles.placeholder}>{`${placeholder}>`}</div>
      )}
      <div className={styles.caretWrapper}>
        <input
          ref={inputRef}
          type={type}
          value={value}
          className={styles.input}
          onBlur={onBlur}
          onFocus={onFocus}
          onChange={onChangeValue}
          onSelect={onSelect}
          {...others}
        />
        {isFocused && (
          <span
            style={{ left: `${caretDistance * 13}px` }}
            className={styles.caret}
          />
        )}
      </div>
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
