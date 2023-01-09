import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { StyleTheme } from "./theme";


interface Props {
    theme: StyleTheme;
    children?: ReactNode | undefined;
}

const StyledThemeProvider: React.FC<Props> = ({ theme, children }) => {
    return <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
}

export default StyledThemeProvider;