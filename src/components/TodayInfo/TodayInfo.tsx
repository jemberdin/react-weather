import classes from './TodayInfo.module.scss';
import { TodayInfoItem } from './TodayInfoItem/TodayInfoItem';
import cloud from '../../assets/cloud.png';

interface TodayInfoProps {

}

const items = [
    {
      icon_id: 'temp',
      name: 'Temperature',
      value: '20° - feels like 17°',
    },
    {
      icon_id: 'pressure',
      name: 'Pressure',
      value: '754 mmHg',
    },
    {
      icon_id: 'precipitation',
      name: 'Precipitation',
      value: '-',
    },
    {
      icon_id: 'wind',
      name: 'Wind',
      value: 'Light breeze from east with gusts at 5 m/s',
    },
];

export const TodayInfo: React.FC<TodayInfoProps> = () => {
    return (
        <div className={classes['today-info']}>
            {items.map(item => (
                <TodayInfoItem key={item.icon_id} item={item} />
            ))}
            <img src={cloud} alt="cloud" className={classes.cloud} />
        </div>
    );
};