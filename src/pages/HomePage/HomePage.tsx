import { Days } from '../../components/Days/Days';
import { TodayInfo } from '../../components/TodayInfo/TodayInfo';
import { TodayWeather } from '../../components/TodayWeather/TodayWeather';
import classes from './HomePage.module.scss';

interface HomePageProps {
}

export const HomePage: React.FC<HomePageProps> = () => {
    return (
      <main className={classes.home}>
        <section className={classes.wrapper}>
          <TodayWeather />
          <TodayInfo />
        </section>
        <Days />
      </main>
    );
};
