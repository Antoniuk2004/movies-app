import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                'movie-full': '260px 1fr auto',
                'movie-short': '100vw',
                'catalog-full': '1fr 330px',
                'catalog-top-line': '1fr 11.25rem',

            },
            gridTemplateRows: {
                'movie-full': '264px 80px 264px 80px auto',
                'movie-short': '0 repeat(3, auto) 1fr',
            },
            lineHeight: {
                16: '4rem',
            },
            boxShadow: {
                'header-shadow': '0 1px 3px 0.1px rgba(0, 0, 0, 0.12)',
                'media-tabs': 'inset 0 -1px #e5e5e5',
                dropdown: 'rgba(0, 0, 0, 0.2) 0px 4px 16px 0px',
            },
            colors: {
                'primary': '#ff9001',
                'primary-hovered': 'rgba(255, 144, 1, 0.2)',
                'header': '#fef3e1',
                'banner-top': 'rgba(0,0,0,0.15)',
                'banner-center': 'rgba(0,0,0,0.35)',
                'banner-bottom': 'rgba(0,0,0,0.6)',
                'cover-overlay': 'rgba(0,0,0,0.9)',
                'btn-light': '#dcdee2',
                'hover-light': 'rgba(116, 116, 128, .05)',
                'modal-backdrop': 'rgba(0, 0, 0, 0.6)',
                'btn-hover': 'rgba(33, 37, 41, 0.1)',
                'white-with-opacity': 'rgba(255, 255, 255, 0.3)',
                'play-button': 'rgba(0, 0, 0, 0.2)',
                'play-button-hovered': 'rgba(0, 0, 0, 0.4)',
            },
            backgroundColor: {
                'black-opacity-50': 'rgba(0, 0, 0, 0.5)',
                background: '#f3f3f3',
                'genre-button': 'rgba(249,248,248,255)',
                'genre-button-hover': '#eeeef0',
            },
            backgroundImage: {
                'gradient-black-top': 'linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent 180px), rgba(0, 0, 0, 0.2)',
                'small-banner': 'radial-gradient(circle at center -70%, rgba(242, 242, 243, 0.3) 0%, #f2f2f3 85%)'
            },
            width: {
                12.5: '3.125rem',
                45: '11.25rem',
                65: '16.25rem',
                banner: 'calc(100% + 2rem)',
                'banner-image': '1450px',
                13.5: '3.375rem',
                125: '31.25rem',
                'responsive-modal': 'calc(100vw - 2rem)',
                82.5: '20.625rem',
            },
            maxWidth: {
                wrapper: '75rem',
                19: '4.75rem',
                110: '27.5rem',
                100: '25rem',
            },
            screens: {
                wrapper: {max: '75rem'},
                responsive: {max: '1024px'},
                'too-small': {max: '400px'},
                'movies-grid-sm': {max: '530px'},
                'movies-grid-md': {max: '768px', min: '531px'},
                'movies-grid-lg': {max: '915px', min: '769px'},
                'movies-grid-xl': {max: '990px', min: '916px'},
            },
            margin: {
                19.5: '4.875rem',
            },
            height: {
                17.5: '4.375rem',
                25: '6.25rem',
                65: '16.25rem',
                90: '22.5rem',
                119: '29.75rem',
                175: '43.75rem',
                152: '38rem',
                'catalog-filter': 'calc(100svh - 3.5rem - 2rem)',
                'catalog-list': 'calc(100svh - 3.5rem - 2rem - 3.5rem - 2.75rem)',
                'catalog-list-mobile': 'calc(100svh - 2.5rem - 2.75rem)',
                'modal-backdrop': '100svh',
                'video-play-button-zone': 'calc(100% - 4.875rem)'
            },
            minHeight: {
                'app-without-normal-header': 'calc(100svh - 3.5rem)',
                'app-without-catalog-header': 'calc(100svh - 3rem)',
                110: '27.5rem',
                inherit: 'inherit',
            },
            fontSize: {
                'rate-modal-start': '1.6875rem'
            }
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
};
export default config;
