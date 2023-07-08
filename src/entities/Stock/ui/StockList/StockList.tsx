import { ListBox } from '@/shared/ui/Listbox';
import { StockType } from '../..';
import { useCallback } from 'react';
import { ListBoxItem } from '@/shared/ui/Listbox/ui/Listbox/Listbox';
import cls from './StockList.module.css';
import { classNames } from '@/shared/lib/classNames/classNames';

const items: ListBoxItem<StockType>[] = [
  {
    content: 'Moskow',
    value: 'moskow',
  },
  {
    content: 'Ekb',
    value: 'ekb',
  },
  {
    content: 'Tomsk',
    value: 'tomsk',
  },
];

interface Props {
  onChange: (value: StockType) => void;
  value?: StockType;
  readonly?: boolean;
  className?: string;
}

export const StockList = ({ onChange, value, readonly, className }: Props) => {
  const changeHandler = useCallback(
    (value: string) => {
      onChange(value as StockType);
    },
    [onChange]
  );

  return (
    <ListBox
      items={items}
      onChange={changeHandler}
      value={value ?? 'Stocks'}
      readonly={readonly}
      defaultValue="Stocks"
      className={classNames(cls.wrapper, [className], {})}
    />
  );
};
