export const theme = {
    colors: {
        background: {
            header: "#0F52BA",
            cartHeader: "#FFF;",
            home: "#F9F9F9",
            productCard: "#FFFFFF",
            buyBox: "#0F52BA",
            priceBox: "#373737",
            footer: "#EEEEEE",
            boxCart: "#FFFFFF",
            finalOrder: "#000000"

        },

        text: {
            primary: "#FFFFFF",
            secondary: "#2C2C2C",
            tertiary: "#000000"


        },

        fonts: {
            primary: "Montserrat, sans-serif",
        },

        breakpoints: {
            xs: "(min-width: 425px)",
            sm: "(min-width: 640px)",
            md: "(min-width: 768px)",
            lg: "(min-width: 1024px)",
            xl: "(min-width: 1280px)",
        },
    } as const


}
