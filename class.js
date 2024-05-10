import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green("I ask some question than i told you  Are you introvert OR extrovert"));
let ans = [];
let extrovert = ["hang out with friends", "sociable", "don't controls emotions", "learn through experience ", "easily make friends "];
let introvert = ["live alone", "work independently", "keep emotion private", "learn through observation", "very chosse to make friends"];
let persnality = await inquirer.prompt([{
        name: "name",
        type: "input",
        message: "Enter you name please"
    },
    {
        name: "q1",
        type: "list",
        message: "How to do you recharge yourself ?",
        choices: ["hang out with friends", "live alone"]
    },
    {
        name: "q2",
        message: "Are you like to work independently or sociable",
        type: "list",
        choices: ["work independently", "sociable"]
    }, {
        name: "q3",
        message: "Are you keep emotions private or you dont control you emotions?",
        type: "list",
        choices: ["keep emotion private", "don't controls emotions"]
    }, {
        name: "q4",
        type: "list",
        message: "How to you learn well",
        choices: ["learn through observation", "learn through experience "]
    }, {
        name: "q5",
        type: "list",
        choices: ["easily make friends ", "very chosse to make friends"],
        message: "which type of person in  making friendship?"
    }
]);
ans.push(persnality.q1);
ans.push(persnality.q2);
ans.push(persnality.q3);
ans.push(persnality.q4);
ans.push(persnality.q5);
class person {
    name;
    behave;
    constructor(name, behave) {
        this.name = name;
        this.behave = behave;
    }
    meet() {
         return `Dear ${this.name} your personality match to the  ${this.behave} person`;
    }
}
    const person2 = new person(persnality.name, "extrovert");
    const person1 = new person(persnality.name, "introvert");

let final = ans.every(value => introvert.includes(value));
let final2 = ans.every(value => extrovert.includes(value));
if (final === true) {
        console.log(person1.meet())
}
else if (final2 === true) {
        console.log(person2.meet())
}
else {
    console.log("we can't find your personality ");
}
