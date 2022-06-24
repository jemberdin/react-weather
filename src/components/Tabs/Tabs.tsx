import classes from './Tabs.module.scss';

const tabs = [
    {
      value: '1 week',
    },
    {
      value: '10 days',
    },
    {
      value: 'Month',
    },
  ];

export const Tabs: React.FC = () => {
    return (
        <div className={classes.tabs}>
            <div className={classes.wrapper}>
                {tabs.map(tab => [
                    <div className={classes.tab} key={tab.value}>
                        {tab.value}
                  </div>
                ])}
            </div>
            <div className={classes.cancel}>Cancel</div>
        </div>
    );
};
