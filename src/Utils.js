class DiscordiaUtils {
	static objDeepMerge(...objects) {
		const isObject = (obj) => obj && typeof obj === 'object';
		
		return objects.reduce((prev, obj) => {
			Object.keys(obj).forEach(key => {
				const pVal = prev[key];
				const oVal = obj[key];
				
				if (Array.isArray(pVal) && Array.isArray(oVal)) prev[key] = pVal.concat(...oVal);
				else if (isObject(pVal) && isObject(oVal)) prev[key] = this.objDeepMerge(pVal, oVal);
				else prev[key] = oVal;
			});
			
			return prev;
		}, {});
	}
}

module.exports = DiscordiaUtils;
