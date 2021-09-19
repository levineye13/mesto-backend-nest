export class ConflictError extends Error {
  public name: string = 'Conflict';
  public statusCode: number = 409;

  constructor(message: string) {
    super(message);
  }
}
