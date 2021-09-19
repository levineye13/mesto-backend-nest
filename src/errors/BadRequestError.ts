export class BadRequestError extends Error {
  public name: string = 'BadRequest';
  public statusCode: number = 400;

  constructor(message: string) {
    super(message);
  }
}
