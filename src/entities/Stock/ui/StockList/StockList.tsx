import { ListBox } from '@/shared/ui/Listbox';
import { StockType } from '../..';
import { useCallback } from 'react';
import { ListBoxItem } from '@/shared/ui/Listbox/ui/Listbox/Listbox';

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
  name?: string;
  validateErrors?: string;
}

export const StockList = ({
  onChange,
  value,
  readonly,
  name,
  className,
  validateErrors,
}: Props) => {
  const changeHandler = useCallback(
    (value: string) => {
      onChange(value as StockType);
    },
    [onChange]
  );

  return (
    <ListBox
      name={name}
      items={items}
      onChange={changeHandler}
      value={value ?? 'Stocks'}
      readonly={readonly}
      defaultValue="Stocks"
      validateError={validateErrors}
      className={className}
    />
  );
};
