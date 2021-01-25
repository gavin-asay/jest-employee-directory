# jest-employee-directory

## Description

Jest Employee Directory is a program that runs in the command line. It receives user responses to a series of questions and generates an HTML file displaying a list of employees.

## Installation

To install the application, clone or download the GitHub repository.

`git clone git@github.com:gavin-asay/jest-employee-directory.git`

## Usage

Navigate in the command line to the root directory of the package and run `node index`.

To use the program, simply answer the questions that are presented regarding the employee. The first question will ask whether you wish to add an engineer, intern, or manager. The final question is different for each type of employee.

When you are finished adding new employees, a new file `index.html` will be generated within the `dist` directory. To streamline the application's output, all CSS rules are placed within the HTML file's header.
