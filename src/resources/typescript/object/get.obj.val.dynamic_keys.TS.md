<br />

# How to Get an Object Value by Dynamic Keys in TypeScript

![Avatar](https://secure.gravatar.com/avatar/51d4945a802821cbf678c0983f38ccc9?s=32&r=g)

By squashlabs, Last Updated: October 13, 2023

![How to Get an Object Value by Dynamic Keys in TypeScript](https://www.squash.io/wp-content/uploads/2023/08/tutorias_default_image.jpg)

-   [Example 1: Accessing Object Properties Dynamically](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#example-1-accessing-object-properties-dynamically)
-   [Example 2: Dynamic Access to Nested Object Properties](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#example-2-dynamic-access-to-nested-object-properties)
-   [Example 1: Dynamic Key Access with Type Safety in TypeScript](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#example-1-dynamic-key-access-with-type-safety-in-typescript)
-   [Example 2: Dynamic Key Access with Optional Properties](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#example-2-dynamic-key-access-with-optional-properties)
-   [Common Use Cases for Accessing Object Properties with Dynamic Keys](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#common-use-cases-for-accessing-object-properties-with-dynamic-keys)
-   [1\. Form Handling](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#1-form-handling)
-   [2\. API Responses](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#2-api-responses)
-   [Different Approaches for Accessing Object Properties Dynamically](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#different-approaches-for-accessing-object-properties-dynamically)
-   [1\. Using Object Bracket Notation](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#1-using-object-bracket-notation)
-   [2\. Using Object Dot Notation](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#2-using-object-dot-notation)
-   [3\. Using Object Methods](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#3-using-object-methods)
-   [4\. Using the {{EJS65}} Operator](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#4-using-the-ejs65-operator)
-   [Using Object Bracket Notation to Access Object Properties with Dynamic Keys](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#using-object-bracket-notation-to-access-object-properties-with-dynamic-keys)
-   [Example 1: Accessing Object Properties with Dynamic Keys](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#example-1-accessing-object-properties-with-dynamic-keys)
-   [Example 2: Dynamic Access to Nested Object Properties](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#example-2-dynamic-access-to-nested-object-properties)
-   [Using Object Dot Notation to Access Object Properties with Dynamic Keys](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#using-object-dot-notation-to-access-object-properties-with-dynamic-keys)
-   [Example 1: Accessing Object Properties with Dynamic Keys using {{EJS86}}](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#example-1-accessing-object-properties-with-dynamic-keys-using-ejs86)
-   [Example 2: Accessing Object Properties with Dynamic Keys using Object Destructuring](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#example-2-accessing-object-properties-with-dynamic-keys-using-object-destructuring)
-   [Using Object Methods to Access Object Properties with Dynamic Keys](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#using-object-methods-to-access-object-properties-with-dynamic-keys)
-   [Example 1: Accessing Object Properties with Dynamic Keys using the {{EJS97}} Method](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#example-1-accessing-object-properties-with-dynamic-keys-using-the-ejs97-method)
-   [Example 2: Accessing Object Properties with Dynamic Keys using Custom Methods](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#example-2-accessing-object-properties-with-dynamic-keys-using-custom-methods)
-   [Using the {{EJS107}} Operator to Check if an Object Property Exists](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#using-the-ejs107-operator-to-check-if-an-object-property-exists)
-   [Example 1: Checking if an Object Property Exists using the {{EJS109}} Operator](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#example-1-checking-if-an-object-property-exists-using-the-ejs109-operator)
-   [Example 2: Checking if a Nested Object Property Exists](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#example-2-checking-if-a-nested-object-property-exists)
-   [Handling Non-existent Object Properties When Accessing Dynamically](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#handling-non-existent-object-properties-when-accessing-dynamically)
-   [Example 1: Handling Non-existent Object Properties with Conditional Statements](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#example-1-handling-non-existent-object-properties-with-conditional-statements)
-   [Example 2: Handling Non-existent Object Properties with Optional Chaining](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#example-2-handling-non-existent-object-properties-with-optional-chaining)
-   [Best Practices for Working with Dynamic Keys and Object Properties](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#best-practices-for-working-with-dynamic-keys-and-object-properties)
-   [1. Use Meaningful Variable Names](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#1-use-meaningful-variable-names)
-   [2. Validate Dynamic Keys](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#2-validate-dynamic-keys)
-   [3. Provide Default Values or Fallbacks](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#3-provide-default-values-or-fallbacks)
-   [4. Use Type Safety](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#4-use-type-safety)
-   [5. Avoid Excessive Nesting](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#5-avoid-excessive-nesting)
-   [6. Document Dynamic Key Usage](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#6-document-dynamic-key-usage)
-   [External Sources](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#external-sources)
    <br />
    <br />
    <br />
    Table of Contents

[](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#)

-   [Example 1: Accessing Object Properties Dynamically](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#Example_1_Accessing_Object_Properties_Dynamically 'Example 1: Accessing Object Properties Dynamically')
    -   [Example 2: Dynamic Access to Nested Object Properties](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#Example_2_Dynamic_Access_to_Nested_Object_Properties 'Example 2: Dynamic Access to Nested Object Properties')
    -   [Example 1: Dynamic Key Access with Type Safety in TypeScript](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#Example_1_Dynamic_Key_Access_with_Type_Safety_in_TypeScript 'Example 1: Dynamic Key Access with Type Safety in TypeScript')
    -   [Example 2: Dynamic Key Access with Optional Properties](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#Example_2_Dynamic_Key_Access_with_Optional_Properties 'Example 2: Dynamic Key Access with Optional Properties')
-   [Common Use Cases for Accessing Object Properties with Dynamic Keys](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#Common_Use_Cases_for_Accessing_Object_Properties_with_Dynamic_Keys 'Common Use Cases for Accessing Object Properties with Dynamic Keys')
    -   [1. Form Handling](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#1_Form_Handling '1. Form Handling')
    -   [2. API Responses](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#2_API_Responses '2. API Responses')
-   [Different Approaches for Accessing Object Properties Dynamically](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#Different_Approaches_for_Accessing_Object_Properties_Dynamically 'Different Approaches for Accessing Object Properties Dynamically')
    -   [1. Using Object Bracket Notation](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#1_Using_Object_Bracket_Notation '1. Using Object Bracket Notation')
    -   [2. Using Object Dot Notation](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#2_Using_Object_Dot_Notation '2. Using Object Dot Notation')
    -   [3. Using Object Methods](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#3_Using_Object_Methods '3. Using Object Methods')
    -   [4. Using the in Operator](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#4_Using_the_in_Operator '4. Using the in Operator')
-   [Using Object Bracket Notation to Access Object Properties with Dynamic Keys](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#Using_Object_Bracket_Notation_to_Access_Object_Properties_with_Dynamic_Keys 'Using Object Bracket Notation to Access Object Properties with Dynamic Keys')
    -   [Example 1: Accessing Object Properties with Dynamic Keys](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#Example_1_Accessing_Object_Properties_with_Dynamic_Keys 'Example 1: Accessing Object Properties with Dynamic Keys')
    -   [Example 2: Dynamic Access to Nested Object Properties](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#Example_2_Dynamic_Access_to_Nested_Object_Properties-2 'Example 2: Dynamic Access to Nested Object Properties')
-   [Using Object Dot Notation to Access Object Properties with Dynamic Keys](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#Using_Object_Dot_Notation_to_Access_Object_Properties_with_Dynamic_Keys 'Using Object Dot Notation to Access Object Properties with Dynamic Keys')
    -   [Example 1: Accessing Object Properties with Dynamic Keys using eval](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#Example_1_Accessing_Object_Properties_with_Dynamic_Keys_using_eval 'Example 1: Accessing Object Properties with Dynamic Keys using eval')
    -   [Example 2: Accessing Object Properties with Dynamic Keys using Object Destructuring](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#Example_2_Accessing_Object_Properties_with_Dynamic_Keys_using_Object_Destructuring 'Example 2: Accessing Object Properties with Dynamic Keys using Object Destructuring')
-   [Using Object Methods to Access Object Properties with Dynamic Keys](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#Using_Object_Methods_to_Access_Object_Properties_with_Dynamic_Keys 'Using Object Methods to Access Object Properties with Dynamic Keys')
    -   [Example 1: Accessing Object Properties with Dynamic Keys using the get Method](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#Example_1_Accessing_Object_Properties_with_Dynamic_Keys_using_the_get_Method 'Example 1: Accessing Object Properties with Dynamic Keys using the get Method')
    -   [Example 2: Accessing Object Properties with Dynamic Keys using Custom Methods](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#Example_2_Accessing_Object_Properties_with_Dynamic_Keys_using_Custom_Methods 'Example 2: Accessing Object Properties with Dynamic Keys using Custom Methods')
-   [Using the in Operator to Check if an Object Property Exists](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#Using_the_in_Operator_to_Check_if_an_Object_Property_Exists 'Using the in Operator to Check if an Object Property Exists')
    -   [Example 1: Checking if an Object Property Exists using the in Operator](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#Example_1_Checking_if_an_Object_Property_Exists_using_the_in_Operator 'Example 1: Checking if an Object Property Exists using the in Operator')
    -   [Example 2: Checking if a Nested Object Property Exists](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#Example_2_Checking_if_a_Nested_Object_Property_Exists 'Example 2: Checking if a Nested Object Property Exists')
-   [Handling Non-existent Object Properties When Accessing Dynamically](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#Handling_Non-existent_Object_Properties_When_Accessing_Dynamically 'Handling Non-existent Object Properties When Accessing Dynamically')
    -   [Example 1: Handling Non-existent Object Properties with Conditional Statements](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#Example_1_Handling_Non-existent_Object_Properties_with_Conditional_Statements 'Example 1: Handling Non-existent Object Properties with Conditional Statements')
    -   [Example 2: Handling Non-existent Object Properties with Optional Chaining](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#Example_2_Handling_Non-existent_Object_Properties_with_Optional_Chaining 'Example 2: Handling Non-existent Object Properties with Optional Chaining')
-   [Best Practices for Working with Dynamic Keys and Object Properties](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#Best_Practices_for_Working_with_Dynamic_Keys_and_Object_Properties 'Best Practices for Working with Dynamic Keys and Object Properties')
    -   [1. Use Meaningful Variable Names](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#1_Use_Meaningful_Variable_Names '1. Use Meaningful Variable Names')
    -   [2. Validate Dynamic Keys](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#2_Validate_Dynamic_Keys '2. Validate Dynamic Keys')
    -   [3. Provide Default Values or Fallbacks](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#3_Provide_Default_Values_or_Fallbacks '3. Provide Default Values or Fallbacks')
    -   [4. Use Type Safety](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#4_Use_Type_Safety '4. Use Type Safety')
    -   [5. Avoid Excessive Nesting](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#5_Avoid_Excessive_Nesting '5. Avoid Excessive Nesting')
    -   [6. Document Dynamic Key Usage](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#6_Document_Dynamic_Key_Usage '6. Document Dynamic Key Usage')
-   [External Sources](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#External_Sources 'External Sources')

Imagine a scenario where we have an object representing a user profile, and we want to retrieve the value of a specific property based on user input. Without the ability to access object properties dynamically, we would need to use multiple if statements or switch cases to handle each possible property. This approach would quickly become cumbersome and difficult to maintain as the number of properties increases.
<br />
<br />

## Example 1: Accessing Object Properties Dynamically

Let’s consider a simple example where we have an object representing a user profile:

```typescript
const userProfile = {

name: "John Doe",

age: 30,

email: "john.doe@example.com",

};

const propertyName = "age";

const propertyValue = userProfile\[propertyName\];

console.log(propertyValue); // Output: 30

const userProfile = { name: "John Doe", age: 30, email: "john.doe@example.com", }; const propertyName = "age"; const propertyValue = userProfile\[propertyName\]; console.log(propertyValue); // Output: 30

const userProfile = {
name: "John Doe",
age: 30,
email: "john.doe@example.com",
};

const propertyName = "age";
const propertyValue = userProfile\[propertyName\];

console.log(propertyValue); // Output: 30
```

In this example, we have an object userProfile `userProfile` with properties like name `name`, age `age`, and email `email`. We want to retrieve the value of a specific [property based on the value of the propertyName `propertyName` variable](https://www.squash.io/how-to-use-setvalue-in-typescript-a-practical-guide/). By using the bracket notation ([] `[]`), we can dynamically access the object property and assign it to the propertyValue `propertyValue` variable.

Related Article: [Using ESLint & eslint-config-standard-with-typescript](https://www.squash.io/a-comprehensive-guide-to-using-eslint-config-standard-with-typescript/)
<br />
<br />

### Example 2: Dynamic Access to Nested [ Object](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#) Properties

Dynamic access to object properties becomes even more useful when dealing with nested objects. Let’s consider an example where we have an object representing a user’s address:

```typescript
const user = {
    name: 'John Doe',
    address: {
        street: '123 Main St',
        city: 'New York'
    }
};

const propertyPath = 'address.city';

const propertyValue = propertyPath
    .split('.')
    .reduce((obj, key) => obj?.[key], user);

console.log(propertyValue); // Output: New York

const user = {
    name: 'John Doe',
    address: { street: '123 Main St', city: 'New York' }
};
const propertyPath = 'address.city';
const propertyValue = propertyPath
    .split('.')
    .reduce((obj, key) => obj?.[key], user);
console.log(propertyValue); // Output: New York

const user = {
    name: 'John Doe',
    address: {
        street: '123 Main St',
        city: 'New York'
    }
};

const propertyPath = 'address.city';
const propertyValue = propertyPath
    .split('.')
    .reduce((obj, key) => obj?.[key], user);

console.log(propertyValue); // Output: New York
```

In this example, we have an object user `user` with a nested object representing the user’s address. We want to retrieve the value of the city `city` property dynamically, even though it is nested within the address `address` property. By splitting the propertyPath `propertyPath` string and using reduce `reduce` with the bracket notation, we can dynamically access the nested property and retrieve its value.
<br />
<br />

### Example 1: Dynamic Key Access with Type Safety in TypeScript

Let’s consider an example where we have an object representing a user profile in TypeScript:

```typescript
interface UserProfile {
    name: string;

    age: number;

    email: string;
}

const userProfile: UserProfile = {
    name: 'John Doe',

    age: 30,

    email: 'john.doe@example.com'
};

const propertyName: keyof UserProfile = 'age';

const propertyValue = userProfile[propertyName];

console.log(propertyValue); // Output: 30

interface UserProfile {
    name: string;
    age: number;
    email: string;
}
const userProfile: UserProfile = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com'
};
const propertyName: keyof UserProfile = 'age';
const propertyValue = userProfile[propertyName];
console.log(propertyValue); // Output: 30

interface UserProfile {
    name: string;
    age: number;
    email: string;
}

const userProfile: UserProfile = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com'
};

const propertyName: keyof UserProfile = 'age';
const propertyValue = userProfile[propertyName];

console.log(propertyValue); // Output: 30
```

In this example, we define an interface UserProfile `UserProfile` to specify the structure and types of the object properties. By using the keyof `keyof` operator, we can assign the
propertyName `propertyName` variable to be one of the keys of the UserProfile `UserProfile` interface, ensuring that we only access valid properties. This provides [type safety and helps catch potential errors](https://www.squash.io/tutorial-resolving-typescript-does-not-exist-on-type-never-errors/) during development.
<br />
<br />

### Example 2: Dynamic Key Access with Optional Properties

TypeScript also allows us to work with objects that have optional properties. Let’s consider an example where we have an object representing a user profile with optional properties:

```typescript
interface UserProfile {
    name: string;

    age?: number;

    email?: string;
}

const userProfile: UserProfile = {
    name: 'John Doe'
};

const propertyName: keyof UserProfile = 'age';

const propertyValue = userProfile[propertyName];

console.log(propertyValue); // Output: undefined

interface UserProfile {
    name: string;
    age?: number;
    email?: string;
}
const userProfile: UserProfile = { name: 'John Doe' };
const propertyName: keyof UserProfile = 'age';
const propertyValue = userProfile[propertyName];
console.log(propertyValue); // Output: undefined

interface UserProfile {
    name: string;
    age?: number;
    email?: string;
}

const userProfile: UserProfile = {
    name: 'John Doe'
};

const propertyName: keyof UserProfile = 'age';
const propertyValue = userProfile[propertyName];

console.log(propertyValue); // Output: undefined
```

In this example, we define the age `age` and email `email` properties in the UserProfile `UserProfile` interface as optional by using the ? `?` modifier. This allows us to work with objects that may not have all properties defined. When accessing optional properties dynamically, TypeScript correctly infers the type of the property value as number | undefined
`number | undefined`, providing better type safety. Related Article:
[How to Work with Anonymous Classes in TypeScript](https://www.squash.io/tutorial-working-with-anonymous-classes-in-typescript)
<br />
<br />
<br />

## Common Use Cases for Accessing Object Properties with Dynamic Keys

Accessing object properties dynamically is a useful feature that finds applications in various scenarios. Here are some common use cases where dynamic key access is useful:
<br />
<br />

### 1. Form Handling

When working with forms, we often need to extract values based on the input field name or ID. Dynamic key access allows us to retrieve these values without hardcoding every possible field name. This is particularly useful when dealing with dynamic forms or forms with a large number of fields.

```typescript
const formData = {
    name: 'John Doe',

    age: 30,

    email: 'john.doe@example.com'
};

function getFormFieldValue(fieldName: string): string | undefined {
    return formData[fieldName];
}

console.log(getFormFieldValue('name')); // Output: John Doe

console.log(getFormFieldValue('email')); // Output: john.doe@example.com

const formData = { name: 'John Doe', age: 30, email: 'john.doe@example.com' };
function getFormFieldValue(fieldName: string): string | undefined {
    return formData[fieldName];
}
console.log(getFormFieldValue('name')); // Output: John Doe console.log(getFormFieldValue("email")); // Output: john.doe@example.com

const formData = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com'
};

function getFormFieldValue(fieldName: string): string | undefined {
    return formData[fieldName];
}

console.log(getFormFieldValue('name')); // Output: John Doe
console.log(getFormFieldValue('email')); // Output: john.doe@example.com
```

In this example, the getFormFieldValue `getFormFieldValue` function accepts a fieldName `fieldName` parameter and retrieves the corresponding value from the formData `formData` object using dynamic key access. This allows us to extract form values based on user input or other runtime conditions.
<br />
<br />

### 2. API Responses

When consuming APIs, the response data often contains nested objects or unknown properties. Dynamic key access enables us to extract the required data without explicitly knowing the structure in advance. This makes our code more resilient to API changes and allows for more flexible data processing.

```typescript
const apiResponse = {
    data: {
        id: 123,

        user: {
            name: 'John Doe',

            email: 'john.doe@example.com'
        }
    }
};

function getApiResponseValue(propertyName: string): any {
    const propertyPath = propertyName.split('.');

    return propertyPath.reduce((obj, key) => obj?.[key], apiResponse);
}

console.log(getApiResponseValue('data.user.name')); // Output: John Doe

console.log(getApiResponseValue('data.user.email')); // Output: john.doe@example.com

const apiResponse = {
    data: { id: 123, user: { name: 'John Doe', email: 'john.doe@example.com' } }
};
function getApiResponseValue(propertyName: string): any {
    const propertyPath = propertyName.split('.');
    return propertyPath.reduce((obj, key) => obj?.[key], apiResponse);
}
console.log(getApiResponseValue('data.user.name')); // Output: John Doe
console.log(getApiResponseValue('data.user.email')); // Output: john.doe@example.com

const apiResponse = {
    data: {
        id: 123,
        user: {
            name: 'John Doe',
            email: 'john.doe@example.com'
        }
    }
};

function getApiResponseValue(propertyName: string): any {
    const propertyPath = propertyName.split('.');
    return propertyPath.reduce((obj, key) => obj?.[key], apiResponse);
}

console.log(getApiResponseValue('data.user.name')); // Output: John Doe
console.log(getApiResponseValue('data.user.email')); // Output: john.doe@example.com
```

In this example, the getApiResponseValue `getApiResponseValue` function accepts a propertyName `propertyName` parameter representing the desired property in the API response. By splitting the propertyName `propertyName` and using dynamic key access with reduce `reduce`, we can retrieve the corresponding value from the apiResponse `apiResponse` object, even if it is nested within other properties.

Related Article: [Building a Rules Engine with TypeScript](https://www.squash.io/tutorial-building-a-rules-engine-with-typescript/)
<br />
<br />
<br />

## Different Approaches for Accessing Object Properties Dynamically

There are multiple approaches to access object properties dynamically in TypeScript. Let’s explore some of the common methods:
<br />
<br />

### 1. Using [ Object](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#) Bracket Notation

One of the most common approaches to access object properties dynamically is by using the bracket notation ([]`[]`). This notation allows us to access object properties using a variable or dynamic key.

```typescript
const obj = {
    key: 'value'
};

const dynamicKey = 'key';

const value = obj[dynamicKey];

console.log(value); // Output: value

const obj = { key: 'value' };
const dynamicKey = 'key';
const value = obj[dynamicKey];
console.log(value); // Output: value

const obj = {
    key: 'value'
};

const dynamicKey = 'key';
const value = obj[dynamicKey];

console.log(value); // Output: value
```

In this example, we have an object obj `obj` with a property named key `key`. We use a variable dynamicKey `dynamicKey` to hold the property name, and then access the property value using the bracket notation ([] `[]`).
<br />
<br />

### 2. Using [ Object](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#) Dot Notation

Another approach to access object properties dynamically is by using the dot notation (.`.`). While the dot notation is commonly used to access object properties directly, it can also be used dynamically with the help of the eval `eval` function or object destructuring.

```typescript
const obj = {
    key: 'value'
};

const dynamicKey = 'key';

const value = eval(`obj.${dynamicKey}`);

console.log(value); // Output: value

const obj = { key: 'value' };
const dynamicKey = 'key';
const value = eval(`obj.${dynamicKey}`);
console.log(value); // Output: value

const obj = {
    key: 'value'
};

const dynamicKey = 'key';
const value = eval(`obj.${dynamicKey}`);

console.log(value); // Output: value
```

In this example, we have an object obj `obj` with a property named key `key`. We use the eval `eval` function to evaluate the dynamic key expression obj.dynamicKey `obj.dynamicKey`, which allows us to access the property value dynamically.

Related Article: [How to Implement ETL Processes with TypeScript](https://www.squash.io/how-to-implement-etl-processes-with-typescript/)
<br />
<br />

### 3. Using [ Object](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#) Methods

Some [objects in TypeScript provide methods that allow for dynamic](https://www.squash.io/tutorial-on-typescript-dynamic-object-manipulation/) key access. For example, the

Map `Map` object provides the get `get` method, which allows us to retrieve a value based on a key.

```typescript
const map = new Map<string, string>();

map.set('key', 'value');

const dynamicKey = 'key';

const value = map.get(dynamicKey);

console.log(value); // Output: value

const map = new Map<string, string>();
map.set('key', 'value');
const dynamicKey = 'key';
const value = map.get(dynamicKey);
console.log(value); // Output: value

const map = new Map<string, string>();
map.set('key', 'value');

const dynamicKey = 'key';
const value = map.get(dynamicKey);

console.log(value); // Output: value
```

In this example, we create a Map `Map` object and set a key-value pair. We then use a variable dynamicKey `dynamicKey` to hold the key and retrieve the corresponding value using the
get `get` method.
<br />
<br />

### 4. Using the in `in` Operator

The in `in` operator in [TypeScript allows us to check if a specific property exists](https://www.squash.io/tutorial-checking-enum-value-existence-in-typescript/) in an object. This can be useful when accessing object properties dynamically, as we can first check if the property exists before attempting to access it.

```typescript
const obj = {
    key: 'value'
};

const dynamicKey = 'key';

const keyExists = dynamicKey in obj;

console.log(keyExists); // Output: true

const obj = { key: 'value' };
const dynamicKey = 'key';
const keyExists = dynamicKey in obj;
console.log(keyExists); // Output: true

const obj = {
    key: 'value'
};

const dynamicKey = 'key';
const keyExists = dynamicKey in obj;

console.log(keyExists); // Output: true
```

In this example, we have an object obj `obj` with a property named key `key`. We use the in `in` operator to check if the dynamic key dynamicKey `dynamicKey` exists in the object. The result is a boolean value indicating whether the property exists.
<br />
<br />
<br />

## Using Object Bracket Notation to Access Object Properties with Dynamic Keys

One of the most common and straightforward approaches to access object properties dynamically in TypeScript is by using the bracket notation ([] `[]`). This notation allows us to access object properties using a variable or dynamic key.

Related Article: [TypeScript ETL (Extract, Transform, Load) Tutorial](https://www.squash.io/a-comprehensive-tutorial-on-typescript-etl/)
<br />
<br />

### Example 1: Accessing [ Object](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#) Properties with Dynamic Keys

Let’s consider a simple example where we have an object representing a user profile:

```typescript
const userProfile = {
    name: 'John Doe',

    age: 30,

    email: 'john.doe@example.com'
};

const propertyName = 'age';

const propertyValue = userProfile[propertyName];

console.log(propertyValue); // Output: 30

const userProfile = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com'
};
const propertyName = 'age';
const propertyValue = userProfile[propertyName];
console.log(propertyValue); // Output: 30

const userProfile = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com'
};

const propertyName = 'age';
const propertyValue = userProfile[propertyName];

console.log(propertyValue); // Output: 30
```

In this example, we have an object userProfile `userProfile` with properties like name `name`, age `age`, and email `email`. We want to retrieve the value of a specific property based on the value of the propertyName `propertyName` variable. By using the bracket notation ([] `[]`), we can dynamically access the object property and assign it to the propertyValue `propertyValue` variable.
<br />
<br />

### Example 2: Dynamic Access to Nested [ Object](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#) Properties

Dynamic access to object properties becomes even more useful when dealing with nested objects. Let’s consider an example where we have an object representing a user’s address:

```typescript
const user = {
    name: 'John Doe',

    address: {
        street: '123 Main St',

        city: 'New York'
    }
};

const propertyPath = 'address.city';

const propertyValue = propertyPath
    .split('.')
    .reduce((obj, key) => obj?.[key], user);

console.log(propertyValue); // Output: New York

const user = {
    name: 'John Doe',
    address: { street: '123 Main St', city: 'New York' }
};
const propertyPath = 'address.city';
const propertyValue = propertyPath
    .split('.')
    .reduce((obj, key) => obj?.[key], user);
console.log(propertyValue); // Output: New York

const user = {
    name: 'John Doe',
    address: {
        street: '123 Main St',
        city: 'New York'
    }
};

const propertyPath = 'address.city';
const propertyValue = propertyPath
    .split('.')
    .reduce((obj, key) => obj?.[key], user);

console.log(propertyValue); // Output: New York
```

In this example, we have an object user `user` with a nested object representing the user’s address. We want to retrieve the value of the city `city` property dynamically, even though it is nested within the address `address` property. By splitting the propertyPath `propertyPath` string and using reduce `reduce` with the bracket notation, we can dynamically access the nested property and retrieve its value.
<br />
<br />
<br />

## Using Object Dot Notation to Access Object Properties with Dynamic Keys

Another approach to access object properties dynamically in TypeScript is by using the dot notation (. `.`). While the dot notation is commonly used to access object properties directly, it can also be used dynamically with the help of the eval `eval` function or object destructuring.

Related Article: [Tutorial on Circuit Breaker Pattern in TypeScript](https://www.squash.io/tutorial-on-circuit-breaker-pattern-in-typescript/)
<br />
<br />

### Example 1: Accessing [ Object](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#) Properties with Dynamic Keys using eval `eval`

Using the eval `eval` function, we can evaluate a dynamic key expression and access the corresponding property value.

```typescript
const obj = {
    key: 'value'
};

const dynamicKey = 'key';

const value = eval(`obj.${dynamicKey}`);

console.log(value); // Output: value

const obj = { key: 'value' };
const dynamicKey = 'key';
const value = eval(`obj.${dynamicKey}`);
console.log(value); // Output: value

const obj = {
    key: 'value'
};

const dynamicKey = 'key';
const value = eval(`obj.${dynamicKey}`);

console.log(value); // Output: value
```

In this example, we have an object obj `obj` with a property named key `key`. We use the eval `eval` function to evaluate the dynamic key expression obj.dynamicKey `obj.dynamicKey`, which allows us to access the property value dynamically.
<br />
<br />

### Example 2: Accessing [ Object](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#) Properties with Dynamic Keys using [ Object](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#) Destructuring

Object destructuring is another way to access object properties dynamically using the dot notation.

```typescript
const obj = {
    key: 'value'
};

const dynamicKey = 'key';

const { [dynamicKey]: value } = obj;

console.log(value); // Output: value

const obj = { key: 'value' };
const dynamicKey = 'key';
const { [dynamicKey]: value } = obj;
console.log(value); // Output: value

const obj = {
    key: 'value'
};

const dynamicKey = 'key';
const { [dynamicKey]: value } = obj;

console.log(value); // Output: value
```

In this example, we have an object obj `obj` with a property named key `key`. We use object destructuring and the bracket notation to dynamically assign the property value to the value `value` variable.
<br />
<br />
<br />

## Using Object Methods to Access Object Properties with Dynamic Keys

Some objects in TypeScript provide methods that allow for dynamic key access. One such example is the Map `Map` object, which provides the get `get` method to retrieve a value based on a key.
<br />
<br />

### Example 1: Accessing [ Object](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#) Properties with Dynamic Keys using the get `get` Method

Let’s consider an example where we have a Map `Map` object representing key-value pairs:

```typescript
const map = new Map<string, string>();

map.set('key', 'value');

const dynamicKey = 'key';

const value = map.get(dynamicKey);

console.log(value); // Output: value

const map = new Map<string, string>();
map.set('key', 'value');
const dynamicKey = 'key';
const value = map.get(dynamicKey);
console.log(value); // Output: value

const map = new Map<string, string>();
map.set('key', 'value');

const dynamicKey = 'key';
const value = map.get(dynamicKey);

console.log(value); // Output: value
```

In this example, we create a Map `Map` object and use the set `set` method to add a key-value pair. We then use the get `get` method to retrieve the value based on the dynamic key dynamicKey `dynamicKey`.
<br />
<br />

### Example 2: Accessing [ Object](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#) Properties with Dynamic Keys using Custom Methods

In addition to the built-in object methods, we can also create custom methods to access object properties dynamically. Let’s consider an example where we have a custom class with a method to retrieve a property value based on a dynamic key.

```typescript
class User {
    private data: Record<string, string>;

    constructor() {
        this.data = {
            name: 'John Doe',

            email: 'john.doe@example.com'
        };
    }

    getProperty(key: string): string | undefined {
        return this.data[key];
    }
}

const user = new User();

const propertyKey = 'email';

const propertyValue = user.getProperty(propertyKey);

console.log(propertyValue); // Output: john.doe@example.com

class User {
    private data: Record<string, string>;
    constructor() {
        this.data = {
            name: 'John Doe',
            email: 'john.doe@example.com'
        };
    }
    getProperty(key: string): string | undefined {
        return this.data[key];
    }
}
const user = new User();
const propertyKey = 'email';
const propertyValue = user.getProperty(propertyKey);
console.log(propertyValue);
// Output: john.doe@example.com

class User {
    private data: Record<string, string>;

    constructor() {
        this.data = {
            name: 'John Doe',
            email: 'john.doe@example.com'
        };
    }

    getProperty(key: string): string | undefined {
        return this.data[key];
    }
}

const user = new User();
const propertyKey = 'email';
const propertyValue = user.getProperty(propertyKey);

console.log(propertyValue); // Output: john.doe@example.com
```

In this example, we define a User `User` class with a private data `data` property that holds key-value pairs. The class has a getProperty `getProperty` method that accepts a dynamic key and retrieves the corresponding property value from the data `data` object.
<br />
<br />
<br />

## Using the in `in` Operator to Check if an Object Property Exists

The in `in` operator in TypeScript allows us to check if a specific property exists in an object. This can be useful when accessing object properties dynamically, as we can first check if the property exists before attempting to access it.
<br />
<br />

### Example 1: Checking if an [ Object](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#) Property Exists using the in `in` Operator

Let’s consider an example where we have an object obj `obj` with a property named key `key`. We use the in `in` operator to check if the dynamic key dynamicKey `dynamicKey` exists in the object.

```typescript
const obj = {
    key: 'value'
};

const dynamicKey = 'key';

const keyExists = dynamicKey in obj;

console.log(keyExists); // Output: true

const obj = { key: 'value' };
const dynamicKey = 'key';
const keyExists = dynamicKey in obj;
console.log(keyExists); // Output: true

const obj = {
    key: 'value'
};

const dynamicKey = 'key';
const keyExists = dynamicKey in obj;

console.log(keyExists); // Output: true
```

In this example, we have an object obj `obj` with a property named key `key`. We use the in `in` operator to check if the dynamic key dynamicKey `dynamicKey` exists in the object. The result is a boolean value indicating whether the property exists.
<br />
<br />

### Example 2: Checking if a Nested [ Object](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#) Property Exists

The in `in` operator can also be used to check if a nested property exists in an object. Let’s consider an example where we have an object representing a user with a nested object representing the user’s address.

```typescript
const user = {
    name: 'John Doe',

    address: {
        city: 'New York'
    }
};

const dynamicKey = 'address.city';

const propertyPath = dynamicKey.split('.');

const propertyExists = propertyPath.reduce(
    (obj, key) => (obj && key in obj ? obj[key] : undefined),
    user
);

console.log(propertyExists); // Output: true

const user = { name: 'John Doe', address: { city: 'New York' } };
const dynamicKey = 'address.city';
const propertyPath = dynamicKey.split('.');
const propertyExists = propertyPath.reduce(
    (obj, key) => (obj && key in obj ? obj[key] : undefined),
    user
);
console.log(propertyExists); // Output: true

const user = {
    name: 'John Doe',
    address: {
        city: 'New York'
    }
};

const dynamicKey = 'address.city';
const propertyPath = dynamicKey.split('.');
const propertyExists = propertyPath.reduce(
    (obj, key) => (obj && key in obj ? obj[key] : undefined),
    user
);

console.log(propertyExists); // Output: true
```

In this example, we have an object user `user` with a nested object representing the user’s address. We use the in `in` operator in conjunction with reduce `reduce` to check if the dynamic key dynamicKey `dynamicKey` exists in the object. The result is a boolean value indicating whether the property exists.
<br />
<br />
<br />

## Handling Non-existent Object Properties When Accessing Dynamically

When accessing object properties dynamically, it is important to handle cases where the property may not exist. By implementing proper error handling or fallback mechanisms, we can ensure that our code behaves as expected even when encountering non-existent properties.
<br />
<br />

### Example 1: Handling Non-existent [ Object](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#) Properties with Conditional Statements

A common approach to handling non-existent object properties is by using conditional statements such as if `if` or the ternary operator (?:`?:`). This allows us to check if the property exists before attempting to access it and provide a [default value](https://www.squash.io/how-to-set-default-values-in-typescript/) or fallback behavior.

```typescript
const obj = {
    key: 'value'
};

const dynamicKey = 'nonExistentKey';

const value = obj.hasOwnProperty(dynamicKey) ? obj[dynamicKey] : 'default';

console.log(value); // Output: default

const obj = { key: 'value' };
const dynamicKey = 'nonExistentKey';
const value = obj.hasOwnProperty(dynamicKey) ? obj[dynamicKey] : 'default';
console.log(value); // Output: default

const obj = {
    key: 'value'
};

const dynamicKey = 'nonExistentKey';
const value = obj.hasOwnProperty(dynamicKey) ? obj[dynamicKey] : 'default';

console.log(value); // Output: default
```

In this example, we have an object obj `obj` with a property named key `key`. We attempt to access the dynamic key nonExistentKey `nonExistentKey`, which does not exist in the object. By using the hasOwnProperty `hasOwnProperty` method to check if the property exists, we can provide a default value of “default” if the property is non-existent.
<br />
<br />

### Example 2: Handling Non-existent [ Object](https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/#) Properties with Optional Chaining

TypeScript 3.7 introduced the optional chaining operator (?.`?.`), which provides a concise way to handle non-existent object properties. By using optional chaining, we can access nested properties without causing errors if any intermediate property is non-existent.

```typescript
const user = {
    name: 'John Doe'
};

const propertyPath = 'address.city';

const propertyValue = propertyPath
    .split('.')
    .reduce((obj, key) => obj?.[key], user);

console.log(propertyValue); // Output: undefined

const user = { name: 'John Doe' };
const propertyPath = 'address.city';
const propertyValue = propertyPath
    .split('.')
    .reduce((obj, key) => obj?.[key], user);
console.log(propertyValue); // Output: undefined

const user = {
    name: 'John Doe'
};

const propertyPath = 'address.city';
const propertyValue = propertyPath
    .split('.')
    .reduce((obj, key) => obj?.[key], user);

console.log(propertyValue); // Output: undefined
```

In this example, we have an object user `user` with a property named name `name`. We attempt to access the nested property address.city `address.city`, even though the address `address` property does not exist. By using optional chaining with the bracket notation ([]`[]`), we can gracefully handle the non-existent property and assign undefined `undefined` to the propertyValue `propertyValue` variable.
<br />
<br />
<br />

## Best Practices for Working with Dynamic Keys and Object Properties

When [working with dynamic keys and object properties in TypeScript](https://www.squash.io/tutorial-working-with-dynamic-objects-in-typescript/), it is important to follow some best practices to ensure code readability, maintainability, and performance. Here are some recommended best practices:
<br />
<br />

### 1. Use Meaningful Variable Names

When working with dynamic keys, choose variable names that accurately describe their purpose or the property they represent. This improves code readability and makes it easier for other developers to understand the code.
<br />
<br />

### 2. Validate Dynamic Keys

Before accessing object properties dynamically, validate the dynamic keys to ensure they are valid and exist in the object. This helps prevent potential errors and allows for proper error handling or fallback mechanisms.
<br />
<br />

### 3. Provide Default Values or Fallbacks

When accessing object properties dynamically, consider providing default values or fallbacks in case the property is non-existent. This ensures that the code behaves as expected even in scenarios where the property may not exist.
<br />
<br />

### 4. Use Type Safety

In TypeScript, leverage type safety to ensure that dynamic key access is valid and aligns with the defined types of the object and its properties. This helps catch potential errors during development and provides better code completion and IDE support.
<br />
<br />

### 5. Avoid Excessive Nesting

Avoid excessive nesting of objects when possible, as it can make dynamic key access more complex and error-prone. Consider flattening object structures or using alternative data structures like maps or arrays when appropriate.
<br />
<br />

### 6. Document Dynamic Key Usage

When using dynamic key access, document the purpose and usage of the dynamic keys to provide clarity to other developers. This helps improve code maintainability and reduces the chances of introducing errors during future modifications.
<br />
<br />

## External Sources

– [TypeScript Handbook: Indexable Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)
– [MDN Web Docs: Bracket notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors#Bracket_notation)
