// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  config,
  styles: {
    global: (props: any) => ({
      "html, body": {
        color: props.colorMode === "dark" ? "white" : "#000",
        backgroundColor: props.colorMode === "dark" ? "gray.800" : "#fff",
      },
    }),
  },

  colors: {
    grass: "#53c362",
    poison: "#dd00a2",
    fire: "#ff6c32",
    flying: "rgb(162, 71, 253)",
    water: "#009bc6",
    bug: "#a8b820",
    normal: "#a8a878",
    electric: "#dddd00",
    ground: "#b67e4d",
    fairy: "#ff6ac1",
    fighting: "#870000",
    psychic: "#f85888",
    ice: "#00d5dd",
    rock: "#6e6e6e",
    dark: "#3f3f3f",
    ghost: "#705898",
    steel: "#7993b1",
    dragon: "rgb(6, 0, 189)",
  },
});
