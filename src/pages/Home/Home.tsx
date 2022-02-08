import React from 'react';
import Days from './components/Days/Days';
import ThisDay from './components/ThisDay/ThisDay';
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo';
import styles from './Home.module.scss';

type Props = {};

const Home = (props: Props) => {
  return <div className={styles.home}>
    <div className={styles.wrapper}>
      <ThisDay />
      <ThisDayInfo />
    </div>
    <Days />
  </div>;
};

export default Home;
