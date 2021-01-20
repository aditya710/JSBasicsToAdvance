const task3Element = document.getElementById('task-3');

function hello(){
    alert('Hello Aditya');
}

function recieveName(name){
    alert(name);
}

function addStrings(str1, str2, str3){
    concatString = str1 + str2 + str3;
    return concatString;
}

hello();
recieveName('Aditya');
task3Element.addEventListener('click', hello);
alert(addStrings('Happy', 'New', 'Year'));