
class TokenGenerator {
  async generate (id) {
    return null
  }
}

describe('TokenGenerator', () => {
  test('Should return null if jwt return null', async () => {
    const sut = new TokenGenerator()
    const token = await sut.generate('any_id')
    expect(token).toBeNull()
  })
})