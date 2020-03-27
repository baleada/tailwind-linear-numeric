import test  from 'ava'
import defaultConfig from './defaultConfig.stub'
import LinearNumeric from '../src/tailwindClassExperiment'

/**
* The goal of this experiment was to allow you to set a default increment and avoid repetition
* when calling linearNumeric multiple times in the same config file.
*
* The implementation idea was to subclass Function and use the subclass constructor
* to set a default increment that the constructed function could access.
* 
* It didn't work—even if subclassing Function is possible (might not be),
* you can't call super() on a function while also binding that function to this.
*
* Making a normal class and not a subclass works fine (these tests pass), but now you're just
* repeating "invoke" instead of "increment".
**/

test('returns the linear numeric config object', t => {
  const linearNumeric = new LinearNumeric(),
        value = linearNumeric.invoke(),
        withoutMaxWidth = ({ maxWidth, ...rest }) => rest // Can't compare identities of anonymous functions, so gotta remove it

  t.deepEqual(withoutMaxWidth(value), defaultConfig)
})

test('respects the "only" option as an array', t => {
  const linearNumeric = new LinearNumeric(),
        value = linearNumeric.invoke({ only: ['spacing'] }).spacing

  t.deepEqual(value, defaultConfig.spacing)
})

test('respects the "only" option as a string', t => {
  const linearNumeric = new LinearNumeric(),
        value = linearNumeric.invoke({ only: 'spacing' })

  t.deepEqual(value, defaultConfig.spacing)
})

test('respects the "increment" function option', t => {
  const linearNumeric = new LinearNumeric(),
        value = linearNumeric.invoke({ increment: 1 }),
        suffixes = Object.keys(value.spacing)

  t.assert(suffixes.includes('4'))
})

test('respects the "increment" class option', t => {
  const linearNumeric = new LinearNumeric({ increment: 1 }),
        value = linearNumeric.invoke(),
        suffixes = Object.keys(value.spacing)

  t.assert(suffixes.includes('4'))
})
