![image](../../../../../public/images/typescript-letters.png)

# **Accessors in TypeScript**

Accessors in TypeScript are a way to intercept accesses to a member of an object. This gives you a way of having finer-grained control over how a member is accessed on each object.

Accessors are declared using the get and set keywords. A getter is a method that is called when a property is accessed. A setter is a method that is called when a property is assigned to.

**For example, the following code shows a class with a getter and setter for a property called name:**

```typescript
class Person {
private \_name: string;

get name(): string {
return this.\_name;
}

set name(newName: string) {
this.\_name = newName;
}
}
```

-   Use code with caution.

**Learn more** - The getter and setter can be used to perform validation or other operations before the property is accessed or assigned to. For example, the following code shows a getter that validates the name property:

```typescript
get name(): string {
    if (this.\_name === "") {
    throw new Error("The name property cannot be empty.");
    }

    return this.\_name;
}
```

**Learn more**

-   Accessors can also be used to implement encapsulation. Encapsulation is the principle of hiding the implementation details of an object from the outside world. By using accessors, you can control how the properties of an object are accessed and assigned to. This can help to protect the integrity of the object's data.

-   Accessors are a powerful feature of TypeScript that can be used to improve the design and implementation of your code.

**Handbook - Classes - TypeScript**

![image](../../../../../public/images/typescript-letters.png)
[TypeScript](typescriptlang.org)
