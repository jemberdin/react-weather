import classes from './Select.module.scss';

interface SelectProps {
    options: {value: string, label: string}[],
    onChange: () => void
}

export const Select: React.FC<SelectProps> = ({ options, onChange }) => {
    return (
        <select className={classes.select} onChange={onChange}>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};
