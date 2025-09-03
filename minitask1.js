const obj = {
    str: [
        null,
        null,
        null,
        [
            null,
            [
                null,
                null,
                {
                    man: [
                        {
                            the: {
                                name: {
                                    of: {
                                        us: "Koda"
                                    }
                                }
                            }
                        }
                    ]
                }
            ]
        ]
    ]
}
console.log(obj.str[3][1][2].man[0].the.name.of.us)
// Koda

const hello = {
    world: "Hello World"
}
console.log(hello.world)
// "Hello World"

const my = [
    {
        favourite: [
            null,
            null,
            null,
            {
                fruit: {
                    is: "Apple"
                }
            }
        ]
    }
]
console.log(my[0].favourite[3].fruit.is)
// "Apple"

