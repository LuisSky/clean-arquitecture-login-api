// const bcrypt = require('bcrypt')

class Encrypter {
  async compare (value, hash) {
    this.value = value
    this.hash = hash
    return this.isValid
  }
}

const makeSut = () => {
  const encrypter = new Encrypter()
  encrypter.isValid = true
  return encrypter
}

describe('Encrypter', () => {
  test('Should return true if compare return true', async () => {
    const sut = makeSut()
    const isValid = await sut.compare('value', 'hashed_value')
    expect(isValid).toBe(true)
  })
})
