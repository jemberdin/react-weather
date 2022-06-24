import { Fragment } from 'react';
import { Card } from '../Card/Card';
import { Tabs } from '../Tabs/Tabs';
import classes from './Days.module.scss';

export interface Day {
    weekday: string;
    date: string;
    icon_id: string;
    temp_day: string;
    temp_night: string;
    info: string;
}

const days: Day[] = [
    {
        weekday: 'Today',
        date: '20 aug',
        icon_id: 'sun',
        temp_day: '+20°',
        temp_night: '+16°',
        info: 'Sunny',
    },
    {
        weekday: 'Tomorrow',
        date: '21 aug',
        icon_id: 'sun',
        temp_day: '+21°',
        temp_night: '+15°',
        info: 'Sunny',
    },
    {
        weekday: 'Mo',
        date: '22 aug',
        icon_id: 'mainly_cloudy',
        temp_day: '+16°',
        temp_night: '+11°',
        info: 'Mainly cloudy',
    },
    {
        weekday: 'Tu',
        date: '23 aug',
        icon_id: 'light_rain_sun',
        temp_day: '+18°',
        temp_night: '+13°',
        info: 'Light rain',
    },
    {
        weekday: 'We',
        date: '24 aug',
        icon_id: 'light_rain',
        temp_day: '+17°',
        temp_night: '+13°',
        info: 'Light rain',
    },
    {
        weekday: 'Th',
        date: '25 aug',
        icon_id: 'rain',
        temp_day: '+17°',
        temp_night: '+12°',
        info: 'Rain',
    },
    {
        weekday: 'Fr',
        date: '26 aug',
        icon_id: 'sun',
        temp_day: '+22°',
        temp_night: '+17°',
        info: 'Sunny',
    },
];

export const Days: React.FC = () => {
    return (
        <Fragment>
            <Tabs />
            <div className={classes.days}>
                {days.map(day => (
                    <Card key={day.date} day={day} />
                ))}
            </div>
        </Fragment>
    );
};
