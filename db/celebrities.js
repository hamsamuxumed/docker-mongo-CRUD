db = connect("localhost:27017/shelter");




db.celebrities2.insertMany([
    { name: "Beyonce", age: 40, birthplace: "USA", relationship_status: "married", children: 3, awards: 30, achievements: "Grammy" },
    { name: "Kranium", age: 28, birthplace: "Jamaica", relationship_status: "single", awards: 5, achievements: "Grammy" },
    { name: "Angelina Jolie", age: 46, birthplace: "USA", relationship_status: "single", children: 6, awards: 15, achievements: "Oscar" },
    { name: "Jackie Chan", age: 67, birthplace: "Hong Kong", relationship_status: "married", children: 2, awards: 25, achievements: "Oscar" },
])
