import classes from './Popup.module.scss';
import { SvgSelector } from '../SvgSelector/SvgSelector';
import { TodayInfoItem } from '../TodayInfo/TodayInfoItem/TodayInfoItem';

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

export const Popup: React.FC = () => {
    return (
        <div className={classes.popup}>
            <div className={classes.content}>
                <div className={classes.day}>
                    <div className={classes.temperature}>20°</div>
                    <div className={classes.weekday}>Today</div>
                    <SvgSelector id='sun' />
                    
                    <div className={classes.time}>
                        Time: 21:54
                    </div>
                    <div className={classes.location}>
                        Location: Tallinn
                    </div>
                </div>

                <div>
                    {items.map(item => (
                        <TodayInfoItem key={item.icon_id} item={item} />
                    ))}
                </div>
                <div className={classes.close}>
                    <SvgSelector id='close' />
                </div>
            </div>
        </div>
    );
};
