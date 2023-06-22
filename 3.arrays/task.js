function compareArrays(arr1, arr2) {
    return arr1.length == arr2.length && arr1.every((b,i)=>b === arr2[i])
}

function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(genus => genus.gender === gender).map(years => years.age).reduce((acc, item, index, users) => {
        acc += item;
        if(index === users.length -1) {
            return acc / users.length;
        }
        return acc;
    }, 0)
    return result;
}