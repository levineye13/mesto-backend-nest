export class InternalServerError extends Error {
  public name: string = 'InternalServerError';
  public statusCode: number = 500;

  constructor(message: string) {
    super(message);
  }
}
