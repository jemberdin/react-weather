import { SvgSelector } from '../SvgSelector/SvgSelector';
import classes from './TodayWeather.module.scss';

interface TodayWeatherProps {

}

export const TodayWeather: React.FC<TodayWeatherProps> = () => {
    return (
        <div className={classes['today-weather']}>
            <div className={classes['today-top']}>
                <div className={classes['today-box']}>
                    <div className={classes.temperature}>20°</div>
                    <div className={classes.day}>Today</div>
                </div>
                <SvgSelector id='sun' />
            </div>
            <div className={classes['today-bottom']}>
                <p className={classes.time}>Time: 21:54</p>
                <p className={classes.location}>Location: Tallinn</p>
            </div>
        </div>
    );
};