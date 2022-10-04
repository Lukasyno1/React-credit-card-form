import { FC } from 'react';
import TextField from '../../../../design/textField/TextField';
import { IFieldProps } from './NumberField';

const OwnerField: FC<IFieldProps> = (props: IFieldProps) => {
    const { value, inputStatus } = props;
    const onChange = (e: React.FormEvent<HTMLInputElement>) => props.onChange(e.currentTarget.value);

    return <TextField label="Name" value={value} inputStatus={inputStatus} onChange={onChange} />
};

export default OwnerField;
