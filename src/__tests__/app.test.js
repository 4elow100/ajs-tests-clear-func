import healthIndicator from "../js/app";

test.each([
  ['full hp', {name: 'Let me solo her', health: 100}, 'healthy'],
  ['hp between 15 and 50', {name: 's1mple', health: 27}, 'wounded'],
  ['lower 15 hp', {name: 'Player', health: 10}, 'critical']
]) ('testing health indication with %s', (_, character, expected) => {
  const result = healthIndicator(character)
  expect(result).toEqual(expected)
});