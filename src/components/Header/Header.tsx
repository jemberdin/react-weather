import { Theme, useThemeContext } from '../../context/theme-context';
import { Select } from '../Select/Select';
import { SvgSelector } from '../SvgSelector/SvgSelector';
import classes from './Header.module.scss';

interface HeaderProps {
}

export const Header: React.FC<HeaderProps> = () => {
    const { theme, changeTheme } = useThemeContext();

    const options = [
        {value: 'city-1', label: 'Tallinn'},
        {value: 'city-2', label: 'Tartu'},
        {value: 'city-3', label: 'Pärnu'}
    ];

    const onChangeHandler = () => {};

    const changeThemeHandler = () => {
        const payload = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        changeTheme(payload);
    };

    return (
      <header className={classes.header}>
        <div className={classes.wrapper}>
            <div className={classes.logo}>
                <SvgSelector id='header-logo'/>
            </div>
            <div className={classes.title}>React weather</div>
        </div>
        <div className={classes.wrapper}>
            <div className={classes.theme} onClick={changeThemeHandler}>
                <SvgSelector id='change-theme'/>
            </div>
            <div className={classes.select}>
                <Select 
                    options={options}
                    onChange={onChangeHandler}
                />
            </div>
        </div>
      </header>
    );
};
