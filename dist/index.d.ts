/// <reference types="react" />
declare type TimeitProps = {
    onChange?: (value: string) => any;
    defaultValue?: string;
    minuteExclude?: Array<number>;
    hourExclude?: Array<number>;
    notShowExclude?: boolean;
};
declare const Timeit: ({ onChange, defaultValue, minuteExclude, hourExclude, notShowExclude, }: TimeitProps) => JSX.Element;

export { Timeit };
