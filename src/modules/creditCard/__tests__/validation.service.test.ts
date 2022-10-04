import { ValidationService } from "../services/Validation.service";

describe('validation service', () => {
    const validationService = new ValidationService();

    describe('when validating name', () => {
        describe('and its valid', () => {
            it('should return valid input status and no error code', () => {
                const validName = 'John Doe'
                const result = validationService.validateName(validName);
                expect(result.isValid).toBe(true);
                expect(result.getFirstErrorCode()).toBe(undefined);
            });
        });

        describe('and its empty', () => {
            it('should return invalid status with error code', () => {
                const emptyName = ''
                const result = validationService.validateName(emptyName);
                expect(result.isValid).toBe(false);
                expect(result.getFirstErrorCode()).toBe('Field cannot be empty');
            });
        });
    });

    describe('when validating number', () => {
        describe('and its valid', () => {
            it('should return valid input status and no error code', () => {
                const validCardNumber = '1234 1234 1234 1234'
                const result = validationService.validateNumber(validCardNumber);
                expect(result.isValid).toBe(true);
                expect(result.getFirstErrorCode()).toBe(undefined);
            });
        });

        describe('and its empty', () => {
            it('should return invalid status with error code', () => {
                const emptyCardNumber = ''
                const result = validationService.validateNumber(emptyCardNumber);
                expect(result.isValid).toBe(false);
                expect(result.getFirstErrorCode()).toBe('Card number is too short');
            });
        });

        describe('and its too short', () => {
            it('should return invalid status with error code', () => {
                const tooShortCardNumber = '1234'
                const result = validationService.validateNumber(tooShortCardNumber);
                expect(result.isValid).toBe(false);
                expect(result.getFirstErrorCode()).toBe('Card number is too short');
            });
        });

        describe('and its too long', () => {
            it('should return invalid status with error code', () => {
                const tooLongCardNumber = '1234 1234 1234 1234 12'
                const result = validationService.validateNumber(tooLongCardNumber);
                expect(result.isValid).toBe(false);
                expect(result.getFirstErrorCode()).toBe('Card number is too long');
            });
        });

        describe('and it contains letters', () => {
            it('should return invalid status with error code', () => {
                const cardNumberWithLetters = '1234 1234 1234 123F'
                const result = validationService.validateNumber(cardNumberWithLetters);
                expect(result.isValid).toBe(false);
                expect(result.getFirstErrorCode()).toBe('Card number should contain only digits');
            });
        });
    });

    describe('when validating expiration date', () => {
        describe('and its valid', () => {
            it('should return valid input status and no error code', () => {
                const validExpirationDate = '05/23'
                const result = validationService.validateExpirationDate(validExpirationDate);
                expect(result.isValid).toBe(true);
                expect(result.getFirstErrorCode()).toBe(undefined);
            });
        });

        describe('and its outdated', () => {
            it('should return invalid status with error code', () => {
                const outdatedExpirationDate = '05/22'
                const result = validationService.validateExpirationDate(outdatedExpirationDate);
                expect(result.isValid).toBe(false);
                expect(result.getFirstErrorCode()).toBe('Card is outdated');
            });
        });
    });

    describe('when validating cvv', () => {
        describe('and its valid', () => {
            it('should return valid status', () => {
                const validCVV = '987'
                const result = validationService.validateCVV(validCVV);
                expect(result.isValid).toBe(true);
                expect(result.getFirstErrorCode()).toBe(undefined);
            });
        });

        describe('and its empty', () => {
            it('should return invalid status with error code', () => {
                const emptyCVV = ''
                const result = validationService.validateCVV(emptyCVV);
                expect(result.isValid).toBe(false);
                expect(result.getFirstErrorCode()).toBe('Too short');
            });
        });

        describe('and it contains letters', () => {
            it('should return invalid input status with error code', () => {
                const invalidCVV = 'A47'
                const result = validationService.validateCVV(invalidCVV);
                expect(result.isValid).toBe(false);
                expect(result.getFirstErrorCode()).toBe('Only digits');
            });
        });

        describe('and its too short', () => {
            it('should return invalid status with error code', () => {
                const tooShortCVV = '3'
                const result = validationService.validateCVV(tooShortCVV);
                expect(result.isValid).toBe(false);
                expect(result.getFirstErrorCode()).toBe('Too short');
            });
        });

        describe('and its too long', () => {
            it('should return  invalid status with error code', () => {
                const tooLongCVV = '3555'
                const result = validationService.validateCVV(tooLongCVV);
                expect(result.isValid).toBe(false);
                expect(result.getFirstErrorCode()).toBe('Too long');
            });
        });

    });
});

export { };
