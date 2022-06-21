import classes from './MonthStatisticsPage.module.scss';

interface MonthStatPageProps {
}

export const MonthStatisticsPage: React.FC<MonthStatPageProps> = () => {
    return (
      <main className={classes.month}>
        MonthStatistics Page
      </main>
    );
};
