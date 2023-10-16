function filterList(args) {
    return args.filter((e) => typeof e === 'number');
}

//////////

function filterList(arg) {
    return arg.filter(Number.isInteger)
}