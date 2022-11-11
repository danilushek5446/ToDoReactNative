import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

import { setCurrentLanguage } from 'src/store/currentLanguageSlice/currentLanguageSlice';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';

const LanguagePicker: FC = () => {
  const currenLanguage = useAppSelector((state) => state.currentLanguage.language);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>(currenLanguage);
  const [items, setItems] = useState([
    { label: 'English', value: 'en' },
    { label: 'Russian', value: 'ru' },
  ]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrentLanguage(value));
  }, [value]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
};

export default LanguagePicker;
