## Type

1. Primitive
   1. boolean
   2. number
   3. string
   4. Object
   5. Array
   6. Tuple
   7. Enum
   8. Any
   9. Union
   10. Literal
   11. Function
   12. Unknow
   13. Never
   14. Custom
   <!-- 4. BigInt
   15. Symbol : typeof instance == "symbol" 
      + Immutable and unique. Make a keys of object properties -->


> Checking typeof 
` if (typeof a === 'number')`

### Object type

Declare object type with predefine object schema
```ts
   const you: {
      userName : string,
      isTrue: boolean
   }
```

#### Array type
```ts
   const you : {
      name: string,
      age: number
   }[] = [
      {
         name: 'abc',
         age: 123
      },
      {
         name: 'zxc',
         age: 13
      }
   ]
```

### Tuples 

Allow you to express an array with a fixed number of elements

```ts
const properties : {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string;
    };
    contact: [number, string];
    isAvailable: boolean;
}[] = [
    {
        image: 'images/colombia-property.jpg',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: [+1123495082908, 'marywinkle@gmail.com'],
        isAvailable: true  
    },
    {
        image: 'images/poland-property.jpg',
        title: 'Polish Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: [+1123495082908, 'garydavis@hotmail.com'],
        isAvailable: false 
    },
    {
        image: 'images/london-property.jpg',
        title: 'London Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom',
        },
        contact: [ +1123495082908, 'andyluger@aol.com'],
        isAvailable: true
    }
]
```

### Function
using optional parameter
```ts
function concatValue(a: string, b:? number) {
        console.log(`a + b = ${a + b}`);

concatValues("first", "second");
concatValues("third");
}
```

default param
`function concatValue(a: string ="hello")` 

> TypeScript also allows us to use what are known as literals, which are almost a hybrid of enums and type aliases. A literal will limit the allowed values to a set of values > specified. A literal can be made of string, number, or boolean values. Consider the following code:

```ts
type AllowedStringValues = "one" | "two" | "three";
type AllowedNumericValues = 1 | 20 | 65535;
function withLiteral(input: 
    AllowedStringValues | AllowedNumericValues) {
    console.log(`called with : ${input}`);
}
```

### Generic syntax

We can have multiple generic types
```ts
function usingTwoTypes<A,B> ( first: A, second: B) {
}
```
usage:
```ts
usingTwoTypes<number, string> ( 1, "test");
usingTwoTypes(1, "test");
usingTwoTypes<boolean, boolean>(true, false);
usingTwoTypes("first", "second");
```

#### Using type T
To limit the number of types that can be used. we can do like that:
For example we have `IPrintId{}` and `IPrintName{}` is 2 interfaces. and We only accept type of those interfaces:
```ts
function useT<T extends IPrintID | IPrintName>(item: T)
    : void {    }
```

Here, we have defined a function named useT that accepts a type named T that can
be either an instance of the IPrintId interface, or an instance of the IPrintName
interface.

#### Generic constrain
> We use keyof to get the value depend on key value 
> 

```ts
    function pluck<T, K extends keyof T>(array: T[],key: K ): T[K][] { // K will be constrained to the property names of the type T
        return array.map(item => item[key])
    }
    
    interface Car{
        make: string;
        model: string;
        year: number
    }

    let cars: Car[] = [
        { make: "Toyota", model: "Corolla", year: 2021 },
        { make: "Honda", model: "Civic", year: 2020 }
    ]

    let models = pluck(cars, 'model');
    console.log(models); // ["Corolla", "Civic"] // 

```

Incase we do not use `K extends keyof T` then we got error `Chạy nhưng trả về undefined vì không có khóa 'abc...'` 

:check: Incase we use `K extends keyof T` then we got error `Lỗi biên dịch: Argument of type '"abc"' is not assignable to parameter of type '"xyz" '.`


#### Create new Object within generics
```ts
class ClassB {}

fucntion createClassInstance<T> (arg: { new(): T }): T{
    return new arg1();
}
let classBIsntance = createClassInstance(classB)
```

#### Mapped types
```ts
interface IAbRequired {
    a: number,
    b: string
}

let ab: IAbRequired = {
    a: 1,
    b: "test"
}

// transform into optional properties
type WeakInterface<T> = {
    [K in keyof T]?: T[K]
}

let allOptional: WeakInterface<IAbRequired>= {}
```
> We can transform required properties into optional by doing this. BUT we can not define new property that are not available on IAbRquired interface

! Another way to make any properties become Optional
#### Partial & Readonly, Record and Pick

`Partial` transform each property in the type named T into optional property

```ts
type Partial<T> = {
    [P in keyof T]: T[P];
}
```

! Otherwise, to make each property in the type named T into required property. use `required`

-=- READONLY TYPE -=-
```ts
/**
 * Make all properties in T readonly
 */
type Readonly<T> = {
 readonly [P in keyof T]: T[P];
};
```
if trying to modify property, error log will show:
> error TS2540: Cannot assign to 'a' because it is a read-only property.

---
##### Pick and Record

==== PICK ====

> Used to construct new type named based on subset of properties of another type

```ts
interface IAbc {
    a: number;
    b: string;
    c: boolean
}

type PickAb = Pick<IAbc, "a" | "b">

let pickAbObject : PickAb = {
    a: 1,
    b: "Zxczxc"
}
```
==== RECORD ====
```ts
// first agurment is string, second argument is number
type RecordedCd = Record<"c" | "d", number>;
let recordCdVar: REcordedCd = {
    c: 1,
    d: 1
}
```