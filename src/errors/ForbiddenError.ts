export class ForbiddenError extends Error {
  public name: string = 'Forbidden';
  public statusCode: number = 403;

  constructor(message: string) {
    super(message);
  }
}
