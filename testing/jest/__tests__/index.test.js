import reverse from '../src/index.js'

test('reverse', () => {
    expect(reverse('cat')).toEqual('tac')
    expect(reverse('')).toEqual('')
})
