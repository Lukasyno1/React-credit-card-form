import { FC } from 'react';
import TextField from '../../../../design/textField/TextField';
import { InputStatus } from '../../services/Validation.service';

export interface IFieldProps {
    value: string;
    inputStatus: InputStatus;
    onChange(value: string): void;
}

const NumberField: FC<IFieldProps> = (props: IFieldProps) => {
    const { value, inputStatus } = props;
    const onChange = (e: React.FormEvent<HTMLInputElement>) => props.onChange(e.currentTarget.value);

    return <TextField label="Card number" value={value} inputStatus={inputStatus} onChange={onChange} />
}

export default NumberField;
