import { ButtonHTMLAttributes, FC, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'sizeM',
  L = 'sizeL',
  XL = 'sizeXL',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = memo(({
  className,
  children,
  theme = ButtonTheme.CLEAR,
  square,
  size = ButtonSize.M,
  disabled,
  ...otherProps
}) => (
  <button
    type="button"
    disabled={disabled}
    className={classNames(
      styles.Button,
      { [styles.square]: square, [styles.disabled]: disabled },
      [className, styles[theme], styles[size]],
    )}
    {...otherProps}
  >
    {children}
  </button>
));

Button.displayName = 'Button';
