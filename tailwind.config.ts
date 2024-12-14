import type { Config } from "tailwindcss";

export default {
  
  "content": [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
],
"theme": {
    "extend": {
        "colors": {
            "gray": {
                "100": "#fafafa",
                "200": "rgba(0, 0, 0, 0.5)"
            },
            "brown": "#982536",
            "white": "#fff",
            "darkslategray": "#434141",
            "gainsboro": "#e7e7e7",
            "darkslateblue": "#3c2b71",
            "black": "#000",
            "whitesmoke": "#f4f4f4"
        },
        "spacing": {},
        "fontFamily": {
            "poiret-one": "'Poiret One'",
            "notable": "Notable",
            "paragraph": "'Open Sans'",
            "body-headigs": "Raleway"
        },
        "borderRadius": {
            "31xl": "50px",
            "3xs": "10px",
            "xl": "20px"
        }
    },
    "fontSize": {
        "xl": "20px",
        "13xl": "32px",
        "sm": "14px",
        "5xl": "24px",
        "29xl": "48px",
        "base": "16px",
        "mini": "15px",
        "inherit": "inherit"
    }
},
"corePlugins": {
    "preflight": false
}
} satisfies Config;

