import './CreditCardForm.scss'
import { FC } from 'react';
import { Form, Button } from 'reactstrap';
import NumberField from './fields/NumberField';
import OwnerField from './fields/OwnerField';
import ExpirationDateField from './fields/ExpirationDateField';
import CVVField from './fields/CVVField';
import { InputStatus } from '../services/Validation.service';

interface IProps {
  number: string;
  numberStatus: InputStatus;
  onChangeNumber(number: string): void;

  name: string;
  nameStatus: InputStatus;
  onChangeName(name: string): void;

  expirationDate: string;
  expirationDateStatus: InputStatus;
  onChangeExpirationDate(expirationDate: string): void;

  cvv: string;
  cvvStatus: InputStatus;
  onChangeCVV(cvv: string): void;

  onSubmit(): void;
}

const CreditCardForm: FC<IProps> = (props: IProps) => {
  return (
    <div className='credit-card-form'>
      <Form>
        <div className="credit-card-form-row">
          <NumberField value={props.number} inputStatus={props.numberStatus} onChange={props.onChangeNumber} />
        </div>

        <div className="credit-card-form-row">
          <OwnerField value={props.name} inputStatus={props.nameStatus} onChange={props.onChangeName} />
        </div>

        <div className="credit-card-form-row">
          <div className="bottom-row-inputs">
            <ExpirationDateField value={props.expirationDate} inputStatus={props.expirationDateStatus} onChange={props.onChangeExpirationDate} />
            <CVVField value={props.cvv} inputStatus={props.cvvStatus} onChange={props.onChangeCVV} />
          </div>
        </div>

        <div className="credit-card-form-row">
          <Button onClick={props.onSubmit}>Submit</Button>
        </div>

      </Form>
    </div>
  )
};

export default CreditCardForm;