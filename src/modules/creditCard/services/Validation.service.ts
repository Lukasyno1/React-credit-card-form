export class InputStatus {
    errorCodes: string[] = [];

    get isValid() {
        return this.errorCodes.length === 0;
    }

    addErrorCode = (errorCode: string) => this.errorCodes.push(errorCode);
    getFirstErrorCode = (): string | undefined => this.errorCodes[0];
}

export interface IValidationService {
    validateName(name: string): InputStatus;
    validateNumber(number: string): InputStatus;
    validateCVV(cvv: string): InputStatus;
    validateExpirationDate(expirationDate: string): InputStatus;
}

export class ValidationService implements IValidationService {
    validateName(name: string): InputStatus {
        const inputStatus = new InputStatus();

        if (name === '') inputStatus.addErrorCode('Field cannot be empty');

        return inputStatus;
    }

    validateNumber(number: string): InputStatus {
        const inputStatus = new InputStatus();
        const numberCorrectLength = 16;
        const nameWithNoSpaces = number.replace(/\s/g, '');
        const length = nameWithNoSpaces.length;

        if (length < numberCorrectLength) inputStatus.addErrorCode('Card number is too short');

        if (length > numberCorrectLength) inputStatus.addErrorCode('Card number is too long');

        if (nameWithNoSpaces.match(/^[0-9]+$/) === null) inputStatus.addErrorCode("Card number should contain only digits")

        return inputStatus;
    }

    validateCVV(cvv: string): InputStatus {
        const inputStatus = new InputStatus();
        const cvvCorrectLength = 3;
        const length = cvv.length;

        if (length < cvvCorrectLength) inputStatus.addErrorCode('Too short');

        if (length > cvvCorrectLength) inputStatus.addErrorCode('Too long');

        if (cvv.match(/^[0-9]+$/) === null) inputStatus.addErrorCode("Only digits")

        return inputStatus;
    }

    validateExpirationDate(expirationDate: string): InputStatus {
        const inputStatus = new InputStatus();

        const selectedMonth = Number(expirationDate.split('/')[0]);
        const selectedYear = 2000 + Number(expirationDate.split('/')[1]);
        const cardOutdatesAt = new Date(selectedYear, selectedMonth, 1);
        const today = new Date();

        if (today > cardOutdatesAt) inputStatus.addErrorCode('Card is outdated');

        return inputStatus;
    }

}