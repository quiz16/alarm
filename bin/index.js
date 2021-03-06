#!/usr/bin/env node

'use strict';

const commander = require( 'commander' );

commander
	.version( '0.0.1' )
	.description( 'simple reminder to take it easy :)' );

commander
	.command( 'start' )
	.description( 'start cron' )
	.action( () => {
		require( '../lib/cron' )();
	} );

commander
	.parse( process.argv );

if ( !commander.args.length ) {
	commander.help();
}
