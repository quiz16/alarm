'use strict';

const cronJob  = require( 'cron' ).CronJob;
const notifier = require( 'node-notifier' );

const jobHandler = () => {
	return new cronJob( '0 */20 * * * *', () => {
		notifier.notify( {
			'title'   : 'Relax!',
			'message' : 'Relax for 20 seconds :)',
			'sound'   : true,
			'wait'    : true
		} );
	}, null, false );
};

module.exports = () => {
	console.log( 'Thank you for keeping yourself healthy!' );
	return jobHandler().start();
};
