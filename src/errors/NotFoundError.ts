export class NotFoundError extends Error {
  public name: string = 'NotFound';
  public statusCode: number = 404;

  constructor(message: string) {
    super(message);
  }
}
