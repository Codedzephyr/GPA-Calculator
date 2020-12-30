const form = document.getElementById('GPA-Form');
const hunt = document.querySelector('.blob');
const calculate = document.querySelector('#tokyo');
const result = document.getElementById("sicko");
const current = document.getElementById('smoke');

//Load all event listeners
loadEventListeners();

function loadEventListeners(){
    form.addEventListener('submit',addCourse);
    hunt.addEventListener('click',removeTask);
    calculate.addEventListener('click', getMultipleSelected);
}

//Add Course
function addCourse(e){
const right = document.createElement('div');
right.className = "form-group";
const formgro = document.createElement('div');
formgro.className = 'form-group';
const formgr = document.createElement('div');
formgr.className = 'form-group';  
const rowl = document.createElement('div');
rowl.className = "row";
const column = document.createElement('div');
column.className = "col-sm";
column.id = "colt"
const colum = document.createElement('div');
colum.className = "col-sm";
colum.id = 'frag';
const colu = document.createElement('div');
colu.className = 'col-sm';
colu.id = "grad";
const col = document.createElement('div');
col.className = 'col-sm';
col.id = "grad";



const labe = document.createElement('label');
labe.appendChild(document.createTextNode("Course Code"));

//Create Text node and append to form


//Create new Input Element
put = document.createElement('input');
put.placeholder = "Input Course Code";
//Add Class
put.className = "form-control comfort";
//Add ID
put.id ="myinput";
//Append input type to label
right.appendChild(labe);
right.appendChild(put);
column.appendChild(right);
rowl.appendChild(column);
hunt.appendChild(rowl);




//2nd part
const label = document.createElement('label');
label.appendChild(document.createTextNode("Course Unit"));
label.className = "timber";
//Create Text node and append to form


//Create new Input Element
//var array = ["1","2","3","4","5","6"];
var array = ["Select the Course Unit",1,2,3,4,5,6];
var ar = ["",1,2,3,4,5,6];
//Create and append select list
var selectlist = document.createElement("Select");
selectlist.id = "mSelect";
selectlist.className = "form-control selector";
for (var i = 0; i<array.length; i++){
//for (const property in object){
  var option = document.createElement("option");
  option.value = ar[i];
  option.text = array[i];
  selectlist.appendChild(option);
}
formgro.appendChild(label);
formgro.appendChild(selectlist);
colum.appendChild(formgro);
rowl.appendChild(colum);
//Add Class



//3rd part

babel = document.createElement('label');
babel.className = 'd-block';
babel.appendChild(document.createTextNode("Course Grade"));
//Create Text node and append to form


//Create new Input Element
const arra = ["Select The Course Grade","A","B","C","D","F"];
const arr = ["",5,4,3,2,1];
//Create and append select list
var selectlis = document.createElement("Select");
selectlis.id = "mySelect";
selectlis.className = "form-control selection";
for (var i = 0; i<arra.length; i++){
  var opti = document.createElement("option");
  opti.id = "wide";
  opti.value = arr[i];
  opti.text = arra[i];
  selectlis.appendChild(opti);
};

const blink = document.createElement('a');
blink.className = 'delete-item secondary-content float-right';
blink.id = "boom";
//Add icon html
blink.innerHTML = '<i class="fa fa-remove"></i>';
babel.appendChild(blink);
col.appendChild(babel);
col.appendChild(selectlis);
rowl.appendChild(col);//Create new link element
document.getElementById("response").style.display = "none";

//Add class
e.preventDefault();


}

//Remove Task
function removeTask(e){

  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.parentElement.parentElement.remove();
    }
  }
}


function getMultipleSelected(e) {
  const selectInputs = document.querySelectorAll('.selection');
  const selectInput = document.querySelectorAll('.selector');
  const selectInp = document.querySelectorAll('.comfort');
  
  


  const grades = [];
  let valid = true;
  const info = [];
  selectInp.forEach(selectInp => {
    info.push(selectInp.value);
    console.log(selectInp.value);
    if (selectInp.value == ""){
      valid = false;
    }
  })
  
  
  
  selectInputs.forEach(selectInput => {
      grades.push(selectInput.value);
      var res = grades.toString().split(",");
      for(var i = 0; i<res.length; i++){
      res[i] = parseInt(res[i],10);
      if (isNaN(res[i])){
        valid = false;
      }
      }
  });
  const grade = [];
  selectInput.forEach(selectInput => {
      grade.push(selectInput.value);
      var reste = grade.toString().split(",");
      for(var i = 0; i<reste.length; i++){
      reste[i] = parseInt(reste[i],10);
      if (isNaN(reste[i])){
        valid = false;
      }
      }
});






  if (valid === true){
    const grad = [];
    selectInput.forEach(selectInpu => {
      grad.push(selectInpu.value);
    var rest = grad.toString().split(",");
      for(var i = 0; i<rest.length; i++){
      rest[i] = parseInt(rest[i],10);
      }
      bang = rest.reduce (function (total,num){
        return total + num;
      },);
      console.log(bang);
    });
    
  grades.reduce (function (r,a,i){
    return sum  = r + a * grade[i]},0);
    console.log (sum);
  const mirage = sum / bang;
  gibby = mirage.toFixed(2);
  console.log(gibby);
    console.log('GPA Calculated Successfully');
    result.innerHTML = `Your Current GPA IS ${gibby}`;
   if (gibby <= 5.00 && gibby >= 4.50){
     current.innerHTML = "First Class";
   }else if (gibby <= 4.49 && gibby >= 3.50){
    current.innerHTML = "Second Class Upper";
   }else if (gibby <= 3.49 && gibby >= 2.50){
     current.innerHTML = "Second Class Lower";
   }else if(gibby < 2.50){
    current.innerHTML = "Third Class";
   }
   document.getElementById("response").style.display = 'block';
  }else{
    alert('Please fill in all fields');
  }
  e.preventDefault();

}



