export class UnauthorizedError extends Error {
  public name: string = 'Unauthorized';
  public statusCode: number = 401;

  constructor(message: string) {
    super(message);
  }
}
