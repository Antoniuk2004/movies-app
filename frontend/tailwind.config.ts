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
            },
            gridTemplateRows: {
                'movie-full': '264px 80px 264px 80px auto',
                'movie-short': '0 repeat(3, auto) 1fr'
            },
            lineHeight: {
                16: '4rem',
            },
            boxShadow: {
                'header-shadow': '0 1px 3px 0.1px rgba(0, 0, 0, 0.12)',
                'media-tabs': 'inset 0 -1px #e5e5e5',
                dropdown: 'rgba(0, 0, 0, 0.2) 0px 4px 16px 0px'
            },
            colors: {
                'primary': '#ff9001',
                'header': '#fef3e1',
                'banner-top': 'rgba(0,0,0,0.15)',
                'banner-center': 'rgba(0,0,0,0.35)',
                'banner-bottom' : 'rgba(0,0,0,0.6)',
                'cover-overlay' : 'rgba(0,0,0,0.9)',
                'btn-light': '#dcdee2',
                'hover-light': 'rgba(116, 116, 128, .05)',
                'modal-backdrop' : 'rgba(0, 0, 0, 0.6)',
            },
            backgroundColor: {
                background: '#f3f3f3',
                'genre-button': 'rgba(249,248,248,255)',
                'genre-button-hover': '#eeeef0',
            },
            backgroundImage: {
                'gradient-black-top': 'linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent 180px), rgba(0, 0, 0, 0.2)',
                'small-banner': 'radial-gradient(circle at center -70%, rgba(242, 242, 243, 0.3) 0%, #f2f2f3 85%)'
            },
            width: {
                45: '11.25rem',
                65: '16.25rem',
                banner: 'calc(100% + 2rem)',
                'banner-image' : '1450px',
                13.5: '3.375rem',
                125: '31.25rem',
                'responsive-modal': 'calc(100vw - 2rem)',
            },
            maxWidth: {
                wrapper: '75rem'
            },
            screens: {
                wrapper: {'max': '1200px'},
                responsive: {"max": '1024px'},
                'too-small' : {"max": '400px'},
            },
            height: {
                65: '16.25rem',
                90: '22.5rem',
                119: '29.75rem',
                25: '6.25rem',
                'modal-backdrop' : '100svh',
            },
            fontSize: {
                'rate-modal-start' : '1.6875rem'
            }
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
};
export default config;
