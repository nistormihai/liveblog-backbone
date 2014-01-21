// Liveblog configuration
liveblog.config({
    // Version is important when used with caching server.
    // revision should be increased for theme control.
    version: {
        major: 0,
        minor: 0,
        revision: 0
    },
    // if application is splited across diffrent servers.
    server: {
        // this is general applied unless is directly specified.
        protocol: 'http',
        // where is all the juice
        rest: '//192.168.0.18:8080',
        // if is needed a separate server for embed.
        frontend: '//192.168.0.18:8080'
    },
    keywords: {
        // mapper for rest default settings.
        rest: {
            resources: 'resources'
        }
    }
});