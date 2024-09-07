import { test } from 'node:test';
import * as assert from 'node:assert';

function convert(number, type) {
    switch(type) {
        case 'length':
            return `<p>${number} meters = ${(number * 3.281).toFixed(3)} feet | ${number} feet = ${(number / 3.281).toFixed(3)} meters</p>`;
        case 'volume':
            return `<p>${number} liters = ${(number * 0.264).toFixed(3)} gallons | ${number} gallons = ${(number / 0.264).toFixed(3)} liters</p>`;
        case 'mass':
            return `<p>${number} kilograms = ${(number * 2.204).toFixed(3)} pounds | ${number} pounds = ${(number / 2.204).toFixed(3)} kilograms</p>`;
        default:
            throw new Error('Invalid conversion type');
    }
}

test('Conversion tests', async (t) => {
    await t.test('converts length correctly', () => {
        const number = 10;
        const expected = `<p>10 meters = 32.810 feet | 10 feet = 3.048 meters</p>`;
        const result = convert(number, 'length');
        assert.strictEqual(result, expected, 'Length conversion did not match expected output');
    });

    await t.test('converts volume correctly', () => {
        const number = 10;
        const expected = `<p>10 liters = 2.640 gallons | 10 gallons = 37.879 liters</p>`;
        const result = convert(number, 'volume');
        assert.strictEqual(result, expected, 'Volume conversion did not match expected output');
    });

    await t.test('converts mass correctly', () => {
        const number = 10;
        const expected = `<p>10 kilograms = 22.040 pounds | 10 pounds = 4.537 kilograms</p>`;
        const result = convert(number, 'mass');
        assert.strictEqual(result, expected, 'Mass conversion did not match expected output');
    });
});
