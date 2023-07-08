import { Listbox as HListbox } from '@headlessui/react';
import { Fragment, ReactNode, memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ListBox.module.css';
import { ChevronBack } from '@emotion-icons/ionicons-solid';

export interface ListBoxItem<T extends string> {
  value: T;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps<T extends string> {
  className?: string;
  value?: T;
  defaultValue?: string;
  onChange: (value: T) => void;
  items: ListBoxItem<T>[];
  readonly?: boolean;
  name?: string;
  validateError?: string;
}

const typedMemo: <T>(cb: T) => T = memo;

export const ListBox = typedMemo(<T extends string>(props: ListBoxProps<T>) => {
  const { className, value, onChange, items, defaultValue, readonly, name, validateError } = props;

  const optionsClasses = [cls.items];

  const selectedValue = useMemo(() => {
    return items.find((item) => item.value === value);
  }, [items, value]);

  const listbox = (
    <HListbox
      as="div"
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      className={classNames(cls.wrapper, [className], {})}
      disabled={readonly}
      name={name}
    >
      <HListbox.Button
        className={classNames('', [className], {
          [cls.disable]: readonly,
          [cls.invalid]: validateError,
        })}
      >
        <span>{selectedValue?.content ?? defaultValue}</span>
      </HListbox.Button>
      <HListbox.Label className={cls.errorDesc}>{validateError}</HListbox.Label>
      <HListbox.Options className={classNames(cls.menu, optionsClasses, {})}>
        {items.map((item) => (
          <HListbox.Option
            as={Fragment}
            key={item.value}
            value={item.value}
            disabled={item.disabled}
          >
            {({ active, selected }) => (
              <li
                className={classNames(cls.item, [], {
                  [cls.active]: active,
                  [cls.disable]: item.disabled,
                })}
              >
                <div className={cls.stack}>
                  <span>{item.content}</span>
                  {selected && <ChevronBack size={20} />}
                </div>
              </li>
            )}
          </HListbox.Option>
        ))}
      </HListbox.Options>
    </HListbox>
  );

  return listbox;
});
