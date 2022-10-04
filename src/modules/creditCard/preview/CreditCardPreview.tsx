import './CreditCardPreview.scss'
import { FC } from 'react';
import ReactCreditCard from 'react-credit-cards';
import 'react-credit-cards/lib/styles.scss'
interface IProps {
    cvc: number;
    expiry: string;
    name: string;
    number: string;
}

const CreditCardPreview: FC<IProps> = (props: IProps) => <ReactCreditCard {...props} />

export default CreditCardPreview;