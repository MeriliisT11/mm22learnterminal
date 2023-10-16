import inquirer from 'inquirer';

function write(text) {
    process.stdout.write(text);
}
inquirer
  .prompt([
    {type:'input', name:'name', message:'What is your name?'},

    {
        type:'list', 
        name:'gender', 
        message:'What is your gender?', 
        choices: ['male', 'female', 'bigender', 'other']
    },

    {type:'number', name:'age', message:'How old are you?'},

    {
        type:'checkbox', 
        name:'Mammal', 
        message:'Which one of them is mammal?',
        choices: ['Frog',{value:'Pig', checked: true}, 'Chicken'],
    },

    {
        type:'rawlist',
        name:'pizza topping', 
        message:'Which one of these is your favourite pizza topping?',
        choices: ['Cheese', 'Olives', 'Pineapple', 'Beef', 'Chicken']
    },

    {type:'password', name:'password', message:'Enter a password', mask:'*' },

    {
        type:'confirm', 
        name:'not a robot', 
        message:'Confirm that you are not a robot', 
        choices: ['Y', 'N'] },

    {type:'input', name:'Time', message:'What is the time?'},

    {
        type:'confirm', 
        name:'You like school', 
        message:'Do you like school?', 
        choices: ['Y', 'N'] 
    },
  ])
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });