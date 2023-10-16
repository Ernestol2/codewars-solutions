function sortAnimal(array) {
    return array
        .map((e) => e)
        .sort((a, b) => {
            if(a.numberOfLegs !== b.numberOfLegs) {
                return a.numberOfLegs - b.numberOfLegs;
            }
            if(a.name < b.name) return -1
        })
}

/////////

function sortAnimal(array) {
    return [...array]
        .sort((a, b) => a.numberOfLegs - b.numberOfLegs || a.name.localeCompare(b.name))
}