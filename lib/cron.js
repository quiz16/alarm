'use strict';

const cronJob  = require( 'cron' ).CronJob;
const notifier = require( 'node-notifier' );

const secJob = new cronJob( '*/20 * * * * *', () => {
	notifier.notify( {
		'title'   : 'Thanks!',
		'message' : 'Good job, please continue working :)',
		'sound'   : true
	} );
	secJob.stop();
	minJob.start();
} );

const minJob = new cronJob( '0 */20 * * * *', () => {
	if ( !secJob.running ) {
		secJob.start();
		minJob.stop();
	}
	notifier.notify( {
		'title'   : 'Relax!',
		'message' : 'Relax for 20 seconds :)',
		'sound'   : true,
	} );
} );

module.exports = () => {
	console.log( 'Thank you for keeping yourself healthy!' );
	return minJob.start();
};
