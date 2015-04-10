describe('Util', function() {

	it('contains a working isString function', function() {
		var isString = Pizzicato.Util.isString;

		expect(typeof isString).toBe('function');
		expect(isString('')).toBe(true);
		expect(isString()).toBe(false);
		expect(isString('hello')).toBe(true);
		expect(isString({ text: 'hello' })).toBe(false);
		expect(isString(function() { return 'hello'; })).toBe(false);
		expect(isString(42)).toBe(false);
	});


	it('contains a working isString function', function() {
		var isObject = Pizzicato.Util.isObject;

		expect(typeof isObject).toBe('function');
		expect(isObject('')).toBe(false);
		expect(isObject()).toBe(false);
		expect(isObject({ text: 'hello' })).toBe(true);
		expect(isObject({})).toBe(true);
		expect(isObject(function() { return {}; })).toBe(false);
		expect(isObject(42)).toBe(false);
	});


	it('contains a working isFunction function', function() {
		var isFunction = Pizzicato.Util.isFunction;

		expect(typeof isFunction).toBe('function');
		expect(isFunction('')).toBe(false);
		expect(isFunction()).toBe(false);
		expect(isFunction({ text: 'hello' })).toBe(false);
		expect(isFunction(function() { return {}; })).toBe(true);
		expect(isFunction(function() {})).toBe(true);
		expect(isFunction(42)).toBe(false);
	});


	it('contains a working isNumber function', function() {
		var isNumber = Pizzicato.Util.isNumber;

		expect(typeof isNumber).toBe('function');
		expect(isNumber('')).toBe(false);
		expect(isNumber(NaN)).toBe(false);
		expect(isNumber({ text: 'hello' })).toBe(false);
		expect(isNumber(0)).toBe(true);
		expect(isNumber(0.43)).toBe(true);
		expect(isNumber(42)).toBe(true);
		expect(isNumber(-42)).toBe(true);
	});


	it('Returns correct dry level from a mix', function() {
		var getDryLevel = Pizzicato.Util.getDryLevel;

		expect(typeof getDryLevel).toBe('function');
		expect(getDryLevel('')).toBe(0);
		expect(getDryLevel(0.5)).toBeCloseTo(1);
		expect(getDryLevel(0.42)).toBeCloseTo(1);
		expect(getDryLevel(0.0)).toBeCloseTo(1);
		expect(getDryLevel(0.01)).toBeCloseTo(1);
		expect(getDryLevel(0.6)).toBeCloseTo(0.8);
		expect(getDryLevel(0.7)).toBeCloseTo(0.6);
		expect(getDryLevel(0.8)).toBeCloseTo(0.4);
		expect(getDryLevel(0.9)).toBeCloseTo(0.2);
		expect(getDryLevel(1)).toBeCloseTo(0);
	});


	it('Returns correct wet level from a mix', function() {
		var getWetLevel = Pizzicato.Util.getWetLevel;

		expect(typeof getWetLevel).toBe('function');
		expect(getWetLevel('')).toBe(0);
		expect(getWetLevel(0.5)).toBeCloseTo(1);
		expect(getWetLevel(0.4)).toBeCloseTo(0.8);
		expect(getWetLevel(0.0)).toBeCloseTo(0);
		expect(getWetLevel(0.1)).toBeCloseTo(0.2);
		expect(getWetLevel(0.6)).toBeCloseTo(1);
		expect(getWetLevel(0.7)).toBeCloseTo(1);
		expect(getWetLevel(1)).toBeCloseTo(1);
	});
});