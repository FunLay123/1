export default class R2Error extends Error {
    public name: string;
    public message: string;
    public stack?: string | undefined;
    public solution: string;

    public constructor(name: string, message: string, solution: string | null = null) {
        super(message);
        this.name = name;
        this.message = message;
        this.solution = solution || '';
        Object.setPrototypeOf(this, R2Error.prototype);
    }

    public static fromThrownValue(
        error: R2Error | Error | unknown,
        defaultName: string = "An unhandled error occurred",
    ): R2Error {
        if (error instanceof R2Error) {
            return error
        } else if (error instanceof Error) {
            return new R2Error(defaultName, error.message);
        } else {
            return new R2Error(defaultName, `${error}`);
        }
    }
}
