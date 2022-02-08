import React from 'react';
import GlobalSvgSelector from '../assets/icons/global/GlobalSvgSelector';
import style from './Header.module.scss';
import Select from 'react-select';

type Props = {};

const Header = (props: Props) => {
  const options = [
    { value: 'city-1', label: 'Санкт-Петербург' },
    { value: 'city-2', label: 'Москва' },
    { value: 'city-3', label: 'Новгород' }
  ];

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,

    }),
  };

  return <div className={style.header}>
    <div className={style.wrapper}>
      <div className={style.logo}><GlobalSvgSelector id='header-logo' /></div>
      <div className={style.title}>React weather</div>
    </div>
    <div className={style.wrapper}>
      <div className={style.change_theme}><GlobalSvgSelector id='change-theme' /></div>
      <Select defaultValue={options[1]} styles={colourStyles} options={options} />
    </div>
  </div>;
};

export default Header;
