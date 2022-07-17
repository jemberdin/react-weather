import { SvgSelector } from '../SvgSelector/SvgSelector';
import classes from './TodayWeather.module.scss';
import { useAppSelector } from '../../hooks/redux';

interface TodayWeatherProps {

}

export const TodayWeather: React.FC<TodayWeatherProps> = () => {
    const { weather, location } = useAppSelector(state => state.current_weather);
    const currentDate = new Date();

    return (
        <div className={classes['today-weather']}>
            <div className={classes['today-top']}>
                <div className={classes['today-box']}>
                    <div className={classes.temperature}>{Math.round(weather.main.temp)}°</div>
                    <div className={classes.day}>Today</div>
                </div>
                <SvgSelector id='sun' />
            </div>
            <div className={classes['today-bottom']}>
                <p className={classes.time}>Time: {`${currentDate.getHours()}:${currentDate.getMinutes()}`}</p>
                <p className={classes.location}>Location: {location}</p>
            </div>
        </div>
    );
};
