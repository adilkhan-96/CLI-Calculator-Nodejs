**CLI Calculator**

**Overview:**
The CLI Calculator is a TypeScript program that allows users to perform basic arithmetic operations via a command-line interface (CLI). It utilizes Node.js for backend processing and user input/output handling. The program prompts users to input two numbers and select an arithmetic operator (+, -, *, /) to perform calculations. Users can choose to continue using the calculator until they decide to exit the program.

**Features:**
1. **User Interaction:** Utilizes the `inquirer` package to interact with users via the command line, prompting them to enter numbers and select operators.
2. **Arithmetic Operations:** Supports basic arithmetic operations including addition, subtraction, multiplication, and division.
3. **Error Handling:** Validates user input to ensure numeric values are provided where expected.
4. **Continuation:** Offers users the option to continue using the calculator after each calculation.
5. **Visual Feedback:** Utilizes the `chalk` and `chalk-animation` packages to provide colorful and animated output for a visually appealing user experience.

**Installation:**
1. Ensure you have Node.js installed on your system.
2. Clone or download the repository containing the TypeScript code.
3. Install dependencies by running `npm install` in the project directory.

**Usage:**
1. Run the program by executing the TypeScript file using `ts-node`.
   ```
   ts-node calculator.ts
   ```
2. Follow the prompts to enter two numbers and select an arithmetic operator.
3. View the result of the calculation.
4. Choose whether to continue using the calculator or exit the program.

**Dependencies:**
- **inquirer:** Handles user input and provides interactive prompts.
- **chalk:** Provides colored output for better visualization.
- **chalk-animation:** Offers animated text effects for enhanced user experience.

**Notes:**
- This calculator is designed for basic arithmetic operations and may not support advanced functionalities.
- Ensure to provide valid numeric input when prompted to avoid errors.
- The program is intended for educational purposes and can be further extended with additional features or enhancements as needed.

**Author:**
Muhammad Adil Haleem Khan

**License:**
This project is licensed under the MIT License. See the LICENSE file for details.
