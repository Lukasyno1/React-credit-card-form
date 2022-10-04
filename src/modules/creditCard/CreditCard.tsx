import './CreditCard.scss'

import { FC, useState } from 'react';
import CreditCardForm from './form/CreditCardForm';
import CreditCardPreview from './preview/CreditCardPreview';
import { InputStatus, IValidationService, ValidationService } from './services/Validation.service';

const CreditCard: FC = () => {
    const validationService: IValidationService = new ValidationService();

    const [name, setName] = useState('');
    const [nameInputStatus, setNameInputStatus] = useState(new InputStatus());

    const [number, setNumber] = useState('');
    const [numberInputStatus, setNumberInputStatus] = useState(new InputStatus());

    const [cvv, setCVV] = useState('');
    const [cvvInputStatus, setCVVInputStatus] = useState(new InputStatus());

    const [expirationDate, setExpirationDate] = useState('10/22');
    const [expirationDateInputStatus, setExpirationDateInputStatus] = useState(new InputStatus());

    const handleNameChange = (name: string) => {
        const inputStatus = validationService.validateName(name);
        setNameInputStatus(inputStatus);
        setName(name);
    };

    const handleNumberChange = (number: string) => {
        const inputStatus = validationService.validateNumber(number);
        setNumberInputStatus(inputStatus);
        setNumber(number);
    };

    const handleExpirationDateChange = (expirationDate: string) => {
        const inputStatus = validationService.validateExpirationDate(expirationDate);
        setExpirationDateInputStatus(inputStatus);
        setExpirationDate(expirationDate);
    };

    const handleChangeCVV = (cvv: string) => {
        const inputStatus = validationService.validateCVV(cvv);
        setCVVInputStatus(inputStatus);
        setCVV(cvv);
    };

    const handleSubmit = () => { };

    return (<div className='credit-card-container'>
        <CreditCardPreview cvc={Number(cvv)} expiry={expirationDate} name={name} number={number} />
        <CreditCardForm
            number={number}
            numberStatus={numberInputStatus}
            onChangeNumber={handleNumberChange}
            name={name}
            nameStatus={nameInputStatus}
            onChangeName={handleNameChange}
            expirationDate={expirationDate}
            expirationDateStatus={expirationDateInputStatus}
            onChangeExpirationDate={handleExpirationDateChange}
            cvv={cvv}
            cvvStatus={cvvInputStatus}
            onChangeCVV={handleChangeCVV}
            onSubmit={handleSubmit}
        />
    </div>
    )

}
export default CreditCard;