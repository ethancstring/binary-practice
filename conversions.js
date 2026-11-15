export class BaseConversions {
    static binaryToDenary(binary, twosComplement) {
        let denary = 0;
        const weights = [];
        for (let i = 0; i < binary.length; i++) {
            weights[i] = 2 ** (binary.length - i - 1);
        }
        if (twosComplement) {
            weights[0] *= -1;
        }
        for (let i = 0; i < binary.length; i++) {
            if (binary[i] == "1") {
                denary += weights[i];
            }
        }
        return denary;
    }

    static denaryToBinary(denary, twosComplement, digits) {
        let binary = "";
        const weights = [];
        for (let i = 0; i < digits; i++) {
            weights[i] = 2 ** (digits - i - 1);
        }
        if (twosComplement) {
            weights[0] *= -1;
        }
        for (let i = 0; i < digits; i++) {
            if ((weights[i] > 0 && denary - weights[i] >= 0) || (denary < 0 && denary - weights[i] >= 0)) {
                denary -= weights[i];
                binary += "" + "1";
            } else {
                binary += "" + "0";
            }
        }
        return binary;
    }

    static hexDigitToDenary(digit) {
        const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        for (let i = 0; i < 16; i++) {
            if (digits[i] == digit) {
                return i;
            }
        }
        return 0;
    }

    static denaryToHexDigit(denary) {
        const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        return digits[denary];
    }

    static hexToDenary(hex) {
        let denary = 0;
        for (let i = 0; i < hex.length; i++) {
            denary += this.hexDigitToDenary(hex[i]) * (16 ** (hex.length - 1 - i));
        }
        return denary;
    }

    static denaryToHex(denary) {
        let hex = "";
        let largestWeight = 1;
        let length = 0;
        while (denary / largestWeight >= 1) {
            largestWeight *= 16;
            length += 1;
        }
        let count = 0;
        for (let i = length - 1; i >= 0; i--) {
            count = 0;
            for (let j = 15; j > 0; j--) {
                if (denary - (16 ** i) >= 0) {
                    count += 1;
                    denary -= 16 ** i;
                }
            }
            hex += "" + this.denaryToHexDigit(count);
        }
        return hex;
    }

    static hexToBinary(hex) {
        let denary = this.hexToDenary(hex);
        let largestWeight = 1;
        let length = 0;
        while (denary / largestWeight >= 1) {
            largestWeight *= 16;
            length += 1;
        }
        return this.denaryToBinary(denary, false, length * 4);
    }

    static binaryToHex(binary) {
        let denary = this.binaryToDenary(binary);
        return this.denaryToHex(denary);
    }

    static denaryToOctal(denary) {
        let octal = "";
        let largestWeight = 1;
        let length = 0;
        while (denary / largestWeight >= 1) {
            largestWeight *= 8;
            length += 1;
        }
        let count = 0;
        for (let i = length - 1; i >= 0; i--) {
            count = 0;
            for (let j = 7; j > 0; j--) {
                if (denary - (8 ** i) >= 0) {
                    count += 1;
                    denary -= 8 ** i;
                }
            }
            octal += "" + this.denaryToHexDigit(count);
        }
        return octal;
    }

    static octalToDenary(octal) {
        let denary = 0;
        for (let i = 0; i < octal.length; i++) {
            denary += this.hexDigitToDenary(octal[i]) * (8 ** (octal.length - i - 1));
        }
        return denary;
    }

    static octalToHex(octal) {
        let denary = this.octalToDenary(octal);
        return this.denaryToHex(denary);
    }

    static hexToOctal(hex) {
        let denary = this.hexToDenary(hex);
        return this.denaryToOctal(denary);
    }

    static octalToBinary(octal) {
        let denary = this.octalToDenary(octal);
        let largestWeight = 1;
        let length = 0;
        while (denary / largestWeight >= 1) {
            largestWeight *= 8;
            length += 1;
        }
        length *= 3;
        if (length % 4 != 0){
            length = (Math.trunc(length / 4) + 1) * 4;
        }
        return this.denaryToBinary(denary, false, length);
    }

    static binaryToOctal(binary) {
        let denary = this.binaryToDenary(binary);
        return this.denaryToOctal(denary);
    }
}

export class FixedPoint {
    static toDenary(binary, pointPosition) {
        const weights = [];
        weights[0] = -1 * (2 ** (pointPosition - 1));
        for (let i = -1; i > (binary.length * -1); i--) {
            weights[i * -1] = weights[0] * -1 * (2 ** i);
        }
        let denary = 0;
        for (let i = 0; i < binary.length; i++) {
            if (binary[i] == '1') {
                denary += weights[i];
            }
        }
        return denary;
    }
    
    static toBinary(denary, beforePoint, afterPoint) {
        denary *= 2 ** afterPoint;
        const weights = [];
        for (let i = 0; i < beforePoint + afterPoint; i++) {
            weights[i] = 2 ** (beforePoint + afterPoint - 1 - i);
        }
        weights[0] *= -1;
        let binary = "";
        for (let i = 0; i < beforePoint + afterPoint; i++) {
            if (weights[i] > 0 && denary - weights[i] >= 0){
                denary -= weights[i];
                binary += "" + "1";
            } else if (denary < 0 && denary - weights[i] >= 0) {
                denary -= weights[i];
                binary += "" + "1";
            } else {
                binary += "" + "0";
            }
        }
        return binary;
    }
}

export class FloatingPoint {
    static toBinary(number, mantissaSize, exponentSize) {
        let exponent = 0;
        if (number > 0) {
            if (number >= 1) {
                while (number / (2 ** exponent) >= 1) {
                    exponent += 1;
                }
            } else {
                while (number / (2 ** exponent) < 0.5) {
                    exponent -= 1;
                }
            } 
        } else {
            number *= -1;
            if (number > 1) {
                while (number / (2 ** exponent) > 1) {
                    exponent += 1;
                }
            } else {
                while (number / (2 ** (exponent)) <= 0.5) {
                    exponent -= 1;
                }
            }
            number *= -1;
        }
        let mantissaBinary = this.denaryToBinary(number, mantissaSize, false);
        let exponentBinary = this.denaryToBinary(exponent, exponentSize, true);
        return mantissaBinary + "" + exponentBinary;
    }

    static denaryToBinary(number, stringLength, frontFill) {
        if (number == 0) {
            let binaryValue = "";
            for (let i = 0; i < stringLength; i++) {
                binaryValue += "" + "0";
            }
            return binaryValue;
        }
        let largestWeight = 0.5;
        const weights = [];
        if (frontFill) {
            largestWeight = 2 ** (stringLength - 2);
        } else {
            if (number > 0) {
                while (number >= 1) {
                    number /= 2;
                }
                while (number < 0.5) {
                    number *= 2;
                }
            } else {
                while (number < -1) {
                    number /= 2;
                }
                while (number >= -0.5) {
                    number *= 2;
                }
            }
        }
        weights[0] = largestWeight * -2;
        for (let i = 1; i < stringLength; i++) {
            weights[i] = largestWeight / (2 ** (i-1));
        }
        let binaryValue = "";
        for (const weight of weights) {
            if (number > 0 && number - weight >= 0 && weight > 0) {
                binaryValue += "" + "1";
                number -= weight;
            } else if (number < 0) {
                number -= weight;
                binaryValue += "" + "1";
            } else {
                binaryValue += "" + "0";
            }
        }
        return binaryValue;
    }

    static toDenary(binary, mantissaLength, exponentLength) {
        let mantissaBinary = binary.substring(0, mantissaLength);
        let exponentBinary = binary.substring(mantissaLength);
        let mantissaDenary  = this.binaryToDenary(mantissaBinary, -1);
        let exponentDenary = this.binaryToDenary(exponentBinary, (2 ** (exponentLength - 1)) * -1);
        return mantissaDenary * (2 ** exponentDenary);
    }

    static binaryToDenary(binaryNumber, largestWeight) {
        const weights = [];
        weights[0] = largestWeight;
        if (binaryNumber.length > 1) {
            for (let i = -1; i > (binaryNumber.length * -1); i--) {
                weights[i * -1] = weights[0] * (2 ** i) * -1;
            }
        }
        let total = 0;
        for (let i = 0; i < binaryNumber.length; i++) {
            if (binaryNumber[i] == "1") {
                total += weights[i];
            }
        }
        return total;
    }
}
