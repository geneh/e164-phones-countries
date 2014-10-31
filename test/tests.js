QUnit.test('findIso3166 correct input test', function( assert ) {
	assert.equal('US', E164.findIso3166('1201000000'), '1201 US');
	assert.equal('CA', E164.findIso3166('1204000000'), '1204 CA');
	assert.equal('LC', E164.findIso3166('1758000000'), '1758 LC');
	assert.equal('US', E164.findIso3166('1980000000'), '1980 US');
	assert.equal('BF', E164.findIso3166('2260000000'), '226 BF');
	assert.equal('YT', E164.findIso3166('2622690000000'), '262269 YT');
	assert.equal('ZA', E164.findIso3166('2700000000'), '27 ZA');
	assert.equal('GR', E164.findIso3166('3000000000'), '30 GR');
	assert.equal('IS', E164.findIso3166('3540000000'), '354 IS');
	assert.equal('AX', E164.findIso3166('358180000000'), '35818 AX');
	assert.equal('CH', E164.findIso3166('4190000000'), '41 CH');
	assert.equal('GB', E164.findIso3166('4410000000'), '44 GB');
	assert.equal('IM', E164.findIso3166('4416240000000'), '441624 IM');
	assert.equal('SJ', E164.findIso3166('47790000000'), '4779 SJ');
	assert.equal('CR', E164.findIso3166('5060000000'), '506 CR');
	assert.equal('MX', E164.findIso3166('525423000000'), '52 MX');
	assert.equal('BQ', E164.findIso3166('59940000000'), '5994 BQ');
	assert.equal('MY', E164.findIso3166('601110000000'), '60 MY');
	assert.equal('CX', E164.findIso3166('61891640000000'), '6189164 CX');
	assert.equal('AQ', E164.findIso3166('67210000000'), '6721 AQ');
	assert.equal('NU', E164.findIso3166('6830000000'), '683 NU');
	assert.equal('RU', E164.findIso3166('711110000000'), '7 RU');
	assert.equal('KZ', E164.findIso3166('761110000000'), '76 KZ');
	assert.equal('KZ', E164.findIso3166('770000000000'), '77 KZ');
	assert.equal('XS', E164.findIso3166('8080000000'), '808 XS');
	assert.equal('JP', E164.findIso3166('8100000000'), '81 JP');
	assert.equal('MO', E164.findIso3166('8530000000'), '853 MO');
	assert.equal('TR', E164.findIso3166('9000000001'), '90 TR');
	assert.equal('UZ', E164.findIso3166('9980000000'), '998 UZ');
});

QUnit.test('findIso3166 wrong input test', function( assert ) {
	assert.equal(undefined, E164.findIso3166('1204000'), 'Too short');
	assert.equal(undefined, E164.findIso3166(1204), 'Not a string');
	assert.equal(undefined, E164.findIso3166('jnhfkjsnufhskudhfjsd'), 'Invalid string');
	assert.equal(undefined, E164.findIso3166('-1201000000'), 'Invalid string');
	assert.equal(undefined, E164.findIso3166(true), 'Invalid type');
	assert.equal(undefined, E164.findIso3166(), 'No input');
	assert.equal(undefined, E164.findIso3166('2190000000'), 'Not found');
	assert.equal(undefined, E164.findIso3166('8010000000'), 'Not found');
	assert.equal(undefined, E164.findIso3166('9990000000'), 'Not found');
});

QUnit.test('findPhoneCountryCode correct input test', function( assert ) {
	assert.equal('1', E164.findPhoneCountryCode('US'), 'US 1');
	assert.equal('1', E164.findPhoneCountryCode('CA'), 'CA 1');
	assert.equal('1', E164.findPhoneCountryCode('AG'), 'AG 1');
	assert.equal('61', E164.findPhoneCountryCode('AU'), 'AU 61');
	assert.equal('44', E164.findPhoneCountryCode('GB'), '44');
	assert.equal('1', E164.findPhoneCountryCode('KN'), 'KN 1');
	assert.equal('52', E164.findPhoneCountryCode('MX'), 'MX 52');
	assert.equal('27', E164.findPhoneCountryCode('ZA'), 'ZA 27');
});

QUnit.test('findPhoneCountryCode wrong input test', function( assert ) {
	assert.equal(undefined, E164.findPhoneCountryCode(10), 'Not a string');
	assert.equal(undefined, E164.findPhoneCountryCode(false), 'Not a string');
});