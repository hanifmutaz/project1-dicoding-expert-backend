const ThreadRepository = require('../../../Domains/threads/ThreadRepository');
const AddThreadUseCase = require('../AddThreadUseCase');

describe('AddThreadUseCase', () => {
  it('should orchestrating the add thread action correctly', async () => {
    // Arrange
    const threadRepository = new ThreadRepository();
    const addThreadUseCase = new AddThreadUseCase({ threadRepository });

    // Mock the behavior of threadRepository
    const fakeThread = { 
      id: '123', 
      title: 'Test Thread', 
      content: 'Test Content'
    };
    const repositoryStub = sinon.stub(threadRepository, 'addThread').resolves(fakeThread);

    // Act
    const threadData = {
      title: 'Test Thread',
      content: 'Test Content'
    };
    const result = await addThreadUseCase.execute(threadData);

    // Assert
    sinon.assert.calledOnce(repositoryStub);
    sinon.assert.calledWith(repositoryStub, sinon.match({
      title: 'Test Thread',
      content: 'Test Content'
    }));
    expect(result).toEqual(fakeThread);

    // Restore the original method after the test
    repositoryStub.restore();
    /**
     * @TODO 3
     * Lengkapi pengujian `AddThreadUseCase` agar dapat memastikan
     * flow/logika yang dituliskan pada `AddThreadUseCase` benar!
     *
     * Tentunya, di sini Anda harus melakukan Test Double
     * untuk memalsukan implmentasi fungsi `threadRepository`.
     */
  });
});
