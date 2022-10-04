import { FC } from 'react';
import TextField from '../../../../design/textField/TextField';
import { IFieldProps } from './NumberField';

const CVVField: FC<IFieldProps> = (props: IFieldProps) => {
    const { value, inputStatus } = props;
    const onChange = (e: React.FormEvent<HTMLInputElement>) => props.onChange(e.currentTarget.value);

    return (
        <div>
            <TextField label="CVV" value={value} inputStatus={inputStatus} onChange={onChange} />
        </div>
    )
};

export default CVVField;
