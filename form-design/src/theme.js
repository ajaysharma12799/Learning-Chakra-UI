import { extendTheme, theme as base, withDefaultColorScheme, withDefaultVariant } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        'brands': {
            50: '#3944f7',
            100: '#4ECDC4',
            200: '#FF6B6B',
            300: '#F57D08',
            400: '#FFEB36',
            500: '#E12C52',
            600: '#4ECDC4',
            700: '#B9FAF8',
            800: '#1789FC',
            900: '#296EB4'
        }
    },
    fonts: {
        heading: `Roboto, ${base.fonts.heading}`,
    }
},
withDefaultColorScheme({
    // colorScheme: 'brands'
}),
withDefaultVariant({
    variant: 'filled',
    components: ['Input', 'Select', 'Textarea']
})
);

export default theme;