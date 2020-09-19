const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin')
const selectorParser = require('postcss-selector-parser');

module.exports = {
    purge: ['./storage/framework/views/*.php', './resources/views/**/*.blade.php', './resources/js/**/*.vue'],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    variants: {
        opacity: ['responsive', 'hover', 'focus', 'disabled'],
        backgroundColor: ['responsive', 'dark', 'hover', 'focus'],
        borderColor: ['responsive', 'dark', 'hover', 'focus'],
        textColor: ['responsive', 'dark', 'hover', 'focus'],
        alignContent: ['responsive', 'rtl'],
        alignItems: ['responsive', 'rtl'],
        alignSelf: ['responsive', 'rtl'],
        flex: ['responsive', 'rtl'],
        flexDirection: ['responsive', 'rtl'],
        flexGrow: ['responsive', 'rtl'],
        flexShrink: ['responsive', 'rtl'],
        flexWrap: ['responsive', 'rtl'],
        float: ['responsive', 'rtl'],
        inset: ['responsive', 'rtl'],
        justifyContent: ['responsive', 'rtl'],
        justifyItems: ['responsive', 'rtl'],
        justifySelf: ['responsive', 'rtl'],
        textAlign: ['responsive', 'rtl'],
        position: ['responsive', 'rtl']
    },

    plugins: [
        require('@tailwindcss/ui'),
        plugin(function({ addVariant, prefix }) {
            addVariant('dark', ({ modifySelectors, separator }) => {
                modifySelectors(({ selector }) => {
                    return selectorParser((selectors) => {
                        selectors.walkClasses((sel) =>{
                            sel.value = `dark${separator}${sel.value}`
                            sel.parent.insertBefore(sel, selectorParser().astSync(prefix('.theme-dark ')))
                        })
                    }).processSync(selector)
                })
            }),
            addVariant('rtl', ({ modifySelectors, separator }) => {
                modifySelectors(({ selector }) => {
                    return selectorParser((selectors) => {
                        selectors.walkClasses((sel) =>{
                            sel.value = `rtl${separator}${sel.value}`
                            sel.parent.insertBefore(sel, selectorParser().astSync(prefix('.direction-rtl ')))
                        })
                    }).processSync(selector)
                })
            })
        }),
        plugin(function({ addUtilities }) {
            const newUtilities = {
                '.direction-rtl': {
                    direction: 'rtl'
                }
            }

            addUtilities(newUtilities)
        })
    ],
};
