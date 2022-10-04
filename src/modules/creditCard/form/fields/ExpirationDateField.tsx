import { FC, useState } from 'react';
import { Label, Input, FormFeedback } from 'reactstrap';
import { IFieldProps } from './NumberField';

const ExpirationDateField: FC<IFieldProps> = (props: IFieldProps) => {
    const { inputStatus } = props;
    const error = inputStatus.getFirstErrorCode();

    const [selectedMonth, setSelectedMonth] = useState(10);
    const [selectedYear, setSelectedYear] = useState(22);

    const onMonthChange = (e: React.FormEvent<HTMLInputElement>) => {
        setSelectedMonth(Number(e.currentTarget.value));
        onChange(Number(e.currentTarget.value), selectedYear);
    };
    const onYearChange = (e: React.FormEvent<HTMLInputElement>) => {
        setSelectedYear(Number(e.currentTarget.value));
        onChange(selectedMonth, Number(e.currentTarget.value));
    };

    const onChange = (month: number, year: number): void => {
        const selectedMonthString = month < 10 ? `0${month}` : month.toString();
        props.onChange(`${selectedMonthString}/${year}`);
    }

    const monthOptions = [];
    for (let i = 1; i < 13; i++) {
        monthOptions.push(i);
    }

    const yearOptions = [];
    for (let i = 22; i <= 32; i++) {
        yearOptions.push(i);
    }

    return (
        <div>
            <Label>Expiration Date</Label>
            <div className='expiration-date-inputs'>
                <Input type="select" className='mr-2' onChange={onMonthChange}>
                    {monthOptions.map(mo => <option selected={mo === selectedMonth}>{mo}</option>)}
                </Input>
                <Input type="select" className='ml-2' value={selectedYear} onChange={onYearChange}>
                    {yearOptions.map(mo => <option selected={mo === selectedYear}>{mo}</option>)}
                </Input>
            </div>
            <FormFeedback>{error}</FormFeedback>
        </div>
    )
}

export default ExpirationDateField;
