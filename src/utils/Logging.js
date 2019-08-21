

export const Logging = (message, type) => {
	switch (type) {
		case('error'):{
			if (process.env.NODE_ENV === 'production') {
			}
			console.error('[ERROR]: ',message);
			return;
		}
		case('warn'):{
			console.warn('[WARNING]: ',message);
			return;
		}
		case('info'):{
			console.info('[INFO]: ',message);
			return;
		}
		default:{
			console.log('[LOG]: ',message)
		}
	}
};

export default Logging;
