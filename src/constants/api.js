const APIs = {
    AUTH: {
        LOGIN: 'api/auth/login',
        REGISTER: 'api/auth/register',
        REFRESH_TOKEN: 'api/auth/refresh'
    },
    ACTOR: {
        LIST: 'api/actors'
    },
    FILM: {
        LIST: 'api/films',
        // LIST_FROM_B: 'api/films/from-b'
    },
    CATEGORY: {
        LIST: 'api/categories',
        LIST_SP: 'api/categories/sp',
        LIST_LP: 'api/categories/lp',
    },
}

export default APIs;