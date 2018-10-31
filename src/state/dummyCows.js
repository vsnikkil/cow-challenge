const randomOf = arr => {
    const r = Math.floor(Math.random() * arr.length);

    return arr[r];
};
const createRandomName = () => {
    const partOne = ["mustikki", "mansikki", "keijo", "pekka"];
    const partTwo = ["A", "B", "C", "D"];

    return `${randomOf(partOne)} ${randomOf(partTwo)}`;
};
const breeds = ["rotu1", "rotu2", "rotu3", "rotu4"];
const colors = ["red", "green", "blue"];

const createCows = (numberOfCows = 10) => {
    return Array(numberOfCows)
        .fill()
        .map(() => ({
            breed: randomOf(breeds),
            color: randomOf(colors),
            dateOfBirth: new Date(
                new Date() - Math.random() * 1e3 * 60 ** 2 * 24 * 362 * 5
            ),
            details: "asdasd",
            name: createRandomName(),
        }));
};

export default createCows(20);
