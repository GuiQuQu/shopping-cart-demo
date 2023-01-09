export interface StyleTheme {
    colors: { [k in keyof typeof colors]: string };  
    /**
     * colors: {primary:string, secondary:string}
     * **/
    breakpoints: { [k in keyof typeof breakpoints]: string }; 
    /**
     * breakponits: {mobile:string, tablet:string desktop:string}
     * **/
}

const colors = {
    primary: "#1b1a20",
    secondary: "#eabf00",
}

const breakpoints = {
    mobile: "480px",
    tablet: "768px",
    desktop: "1025px",
}

const theme: StyleTheme = {
    colors,
    breakpoints,
}

export {theme};