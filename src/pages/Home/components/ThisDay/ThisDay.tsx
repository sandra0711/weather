import React from 'react';
import styles from './ThisDay.module.scss'
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector';

type Props = {};

const ThisDay = (props: Props) => {
  return <div className={styles.ThisDay}>
    <div className={styles.top_block}>
      <div className={styles.this_day_wrapper}>
        <div className={styles.this_day_temp}>20°</div>
        <div className={styles.this_day_day}>Сегодня</div>
      </div>
      <div><GlobalSvgSelector id='sun' /></div>
    </div>
    <div className={styles.bottom_block}>
      <div className={styles.this_time}><span>Время: 20:40</span></div>
      <div className={styles.this_city}><span>Город: Москва</span></div>
    </div>
  </div>;
};

export default ThisDay;
