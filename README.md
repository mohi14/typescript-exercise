## What is TypeScript, and how is it different from JavaScript?
While JavaScript is dynamically-typed, TypeScript is a statically-typed superset of JavaScript, which means it offers strict static typing as an option but will allow dynamic typing, as well. As a result, TypeScript code is safer  but a little trickier to write, resulting in more errors earlier in development. Comparing TypeScript and JavaScript, Typescript supports a feature of prototyping while JavaScript doesn’t support this feature. Typescript uses concepts like types and interfaces to describe data being used whereas JavaScript has no such concept. Typescript is a powerful type system, including generics & JS features for large size project whereas JavaScript is an ideal option for small size project.

## Can you explain the difference between "interface" and "type" in TypeScript?
Both the methods Type and the Interface are used to describe the structure of the objects in TypeScript. But holds some specific features that will be helpful according to the situation, choosing between them and totally depends on the developer.

The Type System in TypeScript portrays the different data types that are supported by the language. It is divided into three major sections that are Any Type, Built-In Type, and User-Defined Type. The Type System in TypeScript is responsible for checking the data type of any value taken before it can be provided as an input to the program. 

An Interface in TypeScript is a syntactical obligation that all entities must follow. It can only contain the declaration of the members and is responsible for defining the properties, methods, and events. In a way, it is responsible for defining a standard structure that the derived classes will have to follow.

## Can you give an example of how to use generics in TypeScript.
In TypeScript, they allow the types of components and functions to be "SPECIFIED LATER" which allows them to be used in creating reusable components that can apply to different use cases. To use generics, you need to use angular brackets and then specify a type variable inside them. Developers generally use T, X and Y. But it can be anything depending upon your preference. You can then assign the same variable name as the type to the parameter of the function. Now, whatever argument you pass to the function, it gets inferred and there's no need to hardcode the type anywhere

## What is the difference between an "unknown" and "any" type in TypeScript?
Unknown which is the type-safe counterpart of any. Anything is assignable to unknown, but unknown isn't assignable to anything but itself and any without a type assertion or a control flow based narrowing. Likewise, no operations are permitted on an unknown without first asserting or narrowing to a more specific type.

A few examples:

let vAny: any = 10;          // We can assign anything to any
let vUnknown: unknown =  10; // We can assign anything to unknown just like any 


let s1: string = vAny;     // Any is assignable to anything 
let s2: string = vUnknown; // Invalid; we can't assign vUnknown to any other type (without an explicit assertion)

vAny.method();     // Ok; anything goes with any
vUnknown.method(); // Not ok; we don't know anything about this variable

## Can you explain how to use "type guards" with "in" and "typeof" operators in TypeScript?
A type guard is a TypeScript technique used to get information about the type of a variable, usually within a conditional block. Type guards are regular functions that return a boolean, taking a type and telling TypeScript if it can be narrowed down to something more specific. Type guards have the unique property of assuring that the value tested is of a set type depending on the returned boolean.

TypeScript uses some built-in JavaScript operators like typeof, instanceof, and the in operator, which is used to determine if an object contains a property. Type guards enable you to instruct the TypeScript compiler to infer a specific type for a variable in a particular context, ensuring that the type of an argument is what you say it is.

Type guards are typically used for narrowing a type and are quite similar to feature detection, allowing you to detect the correct methods, prototypes, and properties of a value. Therefore, you can easily figure out how to handle that value.