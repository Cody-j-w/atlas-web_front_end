const studentHogwarts = function() {

    let name = null;
    let privateScore = 0;

    function changeScoreBy(points) {
        privateScore += points;
    }

    return {
        setName: (newName) => {name = newName},
        rewardStudent: () => changeScoreBy(1),
        penalizeStudent: () => changeScoreBy(-1),
        getScore: () => {return `${name}: ${privateScore}`}
    }
};

const harry = new studentHogwarts();
const draco = new studentHogwarts();

harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(harry.getScore());
console.log(draco.getScore());