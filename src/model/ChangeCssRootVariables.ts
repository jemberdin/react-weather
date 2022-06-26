import { Theme } from '../context/theme-context';

export const changeCssRootVariables = (theme: Theme) => {
    const components = [
        'body-background',
        'component-background',
        'card-background',
        'card-box-shadow-background',
        'text-color'
    ];

    const root = document.querySelector(':root') as HTMLElement;
    components.forEach(component => {
        root.style.setProperty(`--${component}-default`, `var(--${component}-${theme})`);
    });
};
