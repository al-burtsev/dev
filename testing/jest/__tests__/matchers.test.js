const data = [1, 2, 3]
// take берет первые n элементов
// assert.equal(take(data, 2).length, 2)
expect(take(data, 2).length).toBe(2)
// в случае ошибки его вывод не слишком информативен
// лучше взять специализированный матчер для проверки размера массива
expect(take(data, 1)).toHaveLength(2)

// common matchers

expect(null).toBeNull()

// Проверяет значение на truthy (любое значение, которое приводится к true)
expect(true).toBeTruthy()
// Точное сравнение с true
expect(true).toBe(true)

expect(undefined).toBeUndefined()

// Проверка, что массив содержит элемент
expect([1, 2, 3]).toContain(2)

// Проверка, что строка содержит подстроку
expect('hello, world').toMatch('hello')

// Проверяет, что в объекте есть свойство с определённым значением
expect({ key: 'value' }).toHaveProperty('key', 'value')


// inversion

expect(null).not.toBeNull() // not null
expect(undefined).not.toBeUndefined() // not undefined
expect([1, 2, 3]).not.toContain(2) // not contain 2
expect('hello, world').not.toMatch('hello') // not match hello

// Особняком стоит матчер toMatchObject.
// Он используется, когда нас в тестах интересует не весь объект, а только какая - то его часть:

const user = {
    firstName: 'tolya',
    lastName: 'petrov',
    age: '33',
}

// Тест пройдёт успешно, так как проверяется только firstName
expect(user).toMatchObject({ firstName: 'tolya' })