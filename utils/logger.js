import { LogglyTracker } from 'loggly-jslogger';

const logger = new LogglyTracker();

logger.push({ 'logglyKey': '3adddcfe-7547-43d1-bc60-7a7dfe2a34f0' });

export default logger;