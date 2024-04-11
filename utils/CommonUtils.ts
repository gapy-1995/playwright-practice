/**
 * Generates a unique name by combining the input value with a timestamp.
 * @param inputValue - The input value to be combined with the timestamp.
 * @returns A string that combines the input value with a timestamp, separated by an underscore.
 */

export class CommonUtils {
  static uniqueName(inputValue: string): string {
    const timestamp: number = Math.round(Date.now() / 10000);
    return `${inputValue}_${timestamp}`;
  }

  static uniqueZipCode(): string {
    const randomNumber = Math.floor(Math.random() * 100000);
    return randomNumber.toString().padStart(5, "0");
  }

  static uniquePhoneNumber(): string {
    const randomNumber: string = Math.floor(Math.random() * 10000000000)
      .toString()
      .padStart(10, "0");
    return `+${randomNumber}`;
  }

  static uniqueAdress(): string {
    const streetNumber = Math.floor(Math.random() * 9000) + 1000;
    const streetNames = ["Main", "Oak", "Pine"];
    const streetTypes = ["St", "Ave"];
    const cities = ["Anytown", "Springfield", "Riverside"];
    const states = ["CA", "NY", "TX", "FL"];
    const zipCode = CommonUtils.uniqueZipCode();

    // Randomly select one from each array
    const streetName =
      streetNames[Math.floor(Math.random() * streetNames.length)];
    const streetType =
      streetTypes[Math.floor(Math.random() * streetTypes.length)];
    const city = cities[Math.floor(Math.random() * cities.length)];
    const state = states[Math.floor(Math.random() * states.length)];

    // Construct the address string
    return `${streetNumber} ${streetName} ${streetType}, ${city}, ${state}, ${zipCode}`;
  }

  static generatePassword(length: number): string {
    // Define all possible characters that can be included in the string
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>/?";

    // Initialize an empty string for the result
    let result = "";

    // Randomly select characters from the characters string
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }

    return result;
  }

  static uniqueEmail(length: number) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let email = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      email += characters[randomIndex];
    }
    return `${email}@gmail.com`;
  }
}
