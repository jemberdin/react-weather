import { SvgSelector } from '../SvgSelector/SvgSelector';
import classes from './Card.module.scss';
import { Day } from '../Days/Days';

interface DayProps {
    day: Day 
  }

export const Card: React.FC<DayProps> = ({ day }) => {
    const { weekday, date, icon_id, temp_day, temp_night, info } = day;

    return (
        <div className={classes.card}>
            <div className={classes.weekday}>{weekday}</div>
            <div className={classes.date}>{date}</div>
            <div className={classes['icon-box']}>
                <SvgSelector id={icon_id}/>
            </div>
            <div className={classes['temp-day']}>{temp_day}</div>
            <div className={classes['temp-night']}>{temp_night}</div>
            <div className={classes.info}>{info}</div>
        </div>
    );
};
