class NewComment {
  /**
   * @TODO 5
   * Lengkapi kode class entities `NewComment` dengan spesifikasi berikut:
   *
   * 1. Memiliki properti `threadId`, `content`, dan `owner`.
   * 2. Nilai-nilai pada properti tersebut diambil dari
   *    argumen `constructor` yang merupakan object `payload`.
   * 3. Pastikan Anda memverifikasi nilainya sebelum dimasukkan ke properti.
   *    - threadId -> harus terdefinisi dan merupakan `string`
   *    - content -> harus terdefinisi dan merupakan `string`
   *    - owner -> harus terdefinisi dan merupakan `string`
   */
  constructor(payload) {
    this._verifyPayload(payload);

    this.threadId = payload.threadId;
    this.content = payload.content;
    this.owner = payload.owner;

    // Lengkapi kodenya ...
  }

  _verifyPayload({ threadId, content, owner }) {
    if (!threadId || typeof threadId !== 'string') {
      throw new Error('NEW_COMMENT.THREAD_ID_INVALID');
    }

    if (!content || typeof content !== 'string') {
      throw new Error('NEW_COMMENT.CONTENT_INVALID');
    }

    if (!owner || typeof owner !== 'string') {
      throw new Error('NEW_COMMENT.OWNER_INVALID');
    }
    // Lengkapi kodenya ...
  }
}

module.exports = NewComment;
