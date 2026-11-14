import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseQuantity, formatQuantity, parseIngredient } from './quantity.ts';

test('parseQuantity reads whole, decimal, fraction and mixed numbers', () => {
  assert.equal(parseQuantity('2'), 2);
  assert.equal(parseQuantity('1.5'), 1.5);
  assert.equal(parseQuantity('1/2'), 0.5);
  assert.equal(parseQuantity('1 1/2'), 1.5);
  assert.equal(parseQuantity('1  1/2'), 1.5);
});

test('formatQuantity prints whole numbers, kitchen fractions or decimals', () => {
  assert.equal(formatQuantity(0), '0');
  assert.equal(formatQuantity(900), '900');
  assert.equal(formatQuantity(2.9999999), '3');
  assert.equal(formatQuantity(0.25), '1/4');
  assert.equal(formatQuantity(1 / 3), '1/3');
  assert.equal(formatQuantity(1.5), '1 1/2');
  assert.equal(formatQuantity(2.2), '2.2');
  assert.equal(formatQuantity(0.05), '0.05');
});

test('parseIngredient splits the leading quantity from the rest', () => {
  assert.deepEqual(parseIngredient('600g 00 flour'), {
    baseQty: 600,
    whitespace: '',
    suffix: 'g 00 flour',
  });
  assert.deepEqual(parseIngredient('1 1/2 tsp salt'), {
    baseQty: 1.5,
    whitespace: ' ',
    suffix: 'tsp salt',
  });
  assert.deepEqual(parseIngredient('1/2 lemon'), {
    baseQty: 0.5,
    whitespace: ' ',
    suffix: 'lemon',
  });
  assert.equal(parseIngredient('Salt to taste'), null);
});

test('scaling a recipe line round-trips through parse and format', () => {
  const { baseQty, whitespace, suffix } = parseIngredient('390g water')!;
  assert.equal(`${formatQuantity(baseQty * (6 / 4))}${whitespace}${suffix}`, '585g water');
});
