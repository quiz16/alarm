'use strict';

const cronJob  = require( 'cron' ).CronJob;
const notifier = require( 'node-notifier' );
const player = require( 'play-sound' )();

const secJob = new cronJob( '*/20 * * * * *', () => {
	notifier.notify( {
		'title'   : 'Thanks!',
		'message' : 'Good job, please continue working :)',
		'sound'   : true
	} );
  player.play('assets/BELL.mp3');
	secJob.stop();
	minJob.start();
} );

const minJob = new cronJob( '0 */20 * * * *', () => {
	if ( !secJob.running ) {
		secJob.start();
		minJob.stop();
	}
  player.play('assets/ElevatorBell.mp3');
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
