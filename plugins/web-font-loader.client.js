import WebFont from 'webfontloader'

// See webfontloader docs here: https://github.com/typekit/webfontloader#modules
WebFont.load({
    context: frames['storybook-preview-iframe'],
    custom: {
        families: ['RM Neue'],
    },
})
