![Screen Shot 2021-03-20 at 11 43 13 PM](https://user-images.githubusercontent.com/79462454/111892983-13047d00-89d6-11eb-811e-100a2029eef8.png)
# password-generator

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

<h1> The Process </h1>

- Defined variables
- googled converting strings to arrays to make accessing each character easier
- googled getRandomIndex, Math.floor, Math.random etc. 

Screenshots (html)
![HTML](https://user-images.githubusercontent.com/79462454/111892916-de90c100-89d5-11eb-820d-abbc5b4e0a1a.png)

Screenshots JS
![JS1](https://user-images.githubusercontent.com/79462454/111892919-e3ee0b80-89d5-11eb-9875-f24020691d9b.png)

![JS2](https://user-images.githubusercontent.com/79462454/111892920-e81a2900-89d5-11eb-9284-14840a3c6403.png)



