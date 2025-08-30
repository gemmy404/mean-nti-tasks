function grouping(arr, by) {
    let groups = {};

    for (let i = 0, len = arr.length; i < len; i++) {
        if (groups[arr[i][by]]) {
            groups[arr[i][by]].push(arr[i]);
            continue;
        }
        groups[arr[i][by]] = [arr[i]];

    }
    return groups;
}

let students = [
    {name: "Mahmoud Gamal", level: "Four"},
    {name: "Ahmed Nader", level: "Four"},
    {name: "Youssef Samy", level: "Two"},
    {name: "Ibrahim Maher", level: "One"},
    {name: "Mohammed Ramy", level: "One"}
];

console.log(grouping(students, "level"));