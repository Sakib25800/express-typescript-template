export class ApiError extends Error {
  statusCode: number;
  message: string;

  constructor(message: string = 'Error', statusCode: number = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}
