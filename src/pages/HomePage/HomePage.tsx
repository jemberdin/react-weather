import classes from './HomePage.module.scss';

interface HomePageProps {
}

export const HomePage: React.FC<HomePageProps> = () => {
    return (
      <main className={classes.home}>
        Home Page
      </main>
    );
};
