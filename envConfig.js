const envUrlList = {
    production: {
       image: 'https://production',
       host: 'https://production'
    },
    qa: {
       image: 'https://api.github.com',
       host: 'https://api.github.com'
    },
    preprod: {
       image: 'https://preprod',
       host: 'https://preprod'
    },
    development: {
       image: 'https://www.allstate.com/resources/Allstate/images/hmpg/allstate-logo.png?v=93845497-a7d5-b016-8640-91bac7e36392',
       host: 'https://localhost:9000'
    }
}

module.exports = {
    getEnvUrl(env) {
        var url={};
        switch(process.env.API_ENV) {
            case 'production':
                url = envUrlList.production
                break;
            case 'qa':
                url = envUrlList.qa
                break;
            case 'preprod':
                url = envUrlList.preprod
                break;
            case 'development':
            default:
                url = envUrlList.development
                break;
        }
        return url;
    }
}