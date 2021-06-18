import {Config}             from '@stencil/core';
import {JsonDocs}           from '@stencil/core/internal';
import tailwind 			from 'stencil-tailwind'

export const config: Config = {
    namespace  : 'aphrodite-lib-stencil',

    hydratedFlag: {
        selector: 'attribute',
    },

    devServer: {
        reloadStrategy: 'pageReload'
    },

    outputTargets: [
        {
            type         : 'dist',
            esmLoaderPath: '../loader',
        },
        {
            type: 'dist-custom-elements-bundle',
        },
        {
            type  : 'docs-readme',
            footer: '*Built with love!*',
        },
      
        {
            type         : 'www',
            serviceWorker: null, // disable service workers
        },
    ],

    plugins: [
        tailwind();
    ],
};
