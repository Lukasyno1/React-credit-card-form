import './TextField.scss'

import { FC } from "react";
import { Label, Input, FormFeedback } from 'reactstrap';
import { InputStatus } from '../../modules/creditCard/services/Validation.service';

export interface ITextFieldProps {
    label: string;
    value: string;
    inputStatus: InputStatus;
    onChange(e: React.FormEvent<HTMLInputElement>): void;
}

const TextField: FC<ITextFieldProps> = (props: ITextFieldProps) => {
    const { label, value, inputStatus, onChange } = props;
    const error = inputStatus.getFirstErrorCode();
    return (
        <>
            <Label>{label}</Label>
            <Input invalid={error !== undefined} type="text" value={value} onChange={onChange} />
            <FormFeedback>{error}</FormFeedback>
        </>
    );
}

export default TextField;