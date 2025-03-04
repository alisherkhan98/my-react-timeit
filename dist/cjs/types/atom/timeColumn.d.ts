/// <reference types="react" />
declare type TimeColumn = {
    start: number;
    end: number;
    setValue: (value: string) => void;
    value: string;
    exclude?: Array<number>;
    notShowExclude?: boolean;
};
declare const TimeColumn: ({ start, end, setValue, value, exclude, notShowExclude }: TimeColumn) => JSX.Element;
export default TimeColumn;
