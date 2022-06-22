import { IconSvgSelector } from '../../SvgSelector/IconSvgSelector';
import classes from './TodayInfoItem.module.scss';

interface TodayInfoItemProps {
    item: {
        icon_id: string;
        name: string;
        value: string;
    }
}

export const TodayInfoItem: React.FC<TodayInfoItemProps> = ({ item }) => {
    const { icon_id, name, value } = item;

    return (
        <div className={classes.item}>
            <div className={classes['icon-box']}>
                <IconSvgSelector id={icon_id} />
            </div>
            <div className={classes.name}>{name}</div>
            <div className={classes.value}>{value}</div>
        </div>
    );
};