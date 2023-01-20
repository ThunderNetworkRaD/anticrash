require('@thundernetworkrad/colors');
async function catchError (message, error, origin) {
    console.log('—————————————————————————————————\n'.gray)
    console.log('['.white, 'AntiCrash'.red.bold, ']'.white, ':'.gray, message.white.bold)
    console.log('—————————————————————————————————\n'.gray)
    console.log(error, origin)
}

module.exports = {
    start: (disabled, enabled) => {
        if (!disabled.includes('unhandledRejection')) {
            process.on('unhandledRejection', (err, origin) => {
                catchError('Unhandled Rejection/Catch', err, origin);
            });
        }
        if (!disabled.includes('uncaughtException')) {
            process.on('uncaughtException', (err, origin) => {
                catchError('Uncaught Exception/Catch', err, origin);
            });
        }
        if (enabled.includes('multipleResolves')) {
            process.on('multipleResolves', (type, promise) => {
                catchError('Multiple Resolves', type, promise);
            });
        }
    },
    quit: () => {
        process.quit();
    },
}