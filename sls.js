const express = require('express');

const next = require('next');
const {
	PHASE_DEVELOPMENT_SERVER,
	PHASE_PRODUCTION_SERVER
} = require('next/constants');
const path = require('path');
const config = require('./next.config');

const port = parseInt(process.env.TENCENTCLOUD_SERVER_PORT, 10) || 3000;
const ipAddress = process.env.TENCENTCLOUD_SERVER_ADDRESS || 'localhost';
const phase = PHASE_PRODUCTION_SERVER;

const app = next({
	dev: false,
	dir: __dirname,
	conf: config(phase, { defaultConfig: null })
});
const handle = app.getRequestHandler();

const DEBUG_MODE = false;

const createServer = async () => {
	try {
		await app.prepare();
		const server = express();

		server.use(
			'/static',
			express.static(path.resolve(__dirname, 'public/static'))
		);

		server.get('*', (req, res) => {
			return handle(req, res);
		});

		if (DEBUG_MODE) {
			server.listen(port, ipAddress, (err) => {
				if (err) throw err;
				console.log(`> Ready on http://${ipAddress}:${port}`);
			});
		}

		// added this because for some reason
		// pngs are not loaded correctly in
		// serverless functions
		server.binaryTypes = ['*/*'];

		return server;
	} catch (ex) {
		console.error(ex.stack);
		return process.exit(1);
	}
};

// local run server
if (DEBUG_MODE) {
	createServer();
}

module.exports = createServer;
