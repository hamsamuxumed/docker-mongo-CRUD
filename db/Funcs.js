db = connect("localhost:27017/shelter");

function getCelebByAge(queryAge) {
    return db.celebrities2.find({ age: { $gt: queryAge } })
}


//get all the names of the celeb
function getAllNames() {
    return db.celebrities2.find({ name: { $exists: true } })
}


// get all celebs with kids
function getCelebWithKids() {
    return db.celebrities2.count({ children: { $exists: true } })
}


//summary of total number of awards won grouped by birthplace
function totalNumGroupedBp() {
    return db.celebrities2.aggregate([{ $group: { _id: "$birthplace", total: { $sum: "$awards" } } }
    ])
}