function addStudentData(index,student){
    const output = document.getElementById('output')

   let row = document.createElement('tr')
   let cell = document.createElement('th')
   cell.setAttribute('score','row')
   cell.innerHTML = index
   row.appendChild(cell)
   cell = document.createElement('td')
   cell.innerHTML = student.name
   row.appendChild(cell)
   cell = document.createElement('td')
   let image = document.createElement('img')
   image.src = student.imageLink
   image.width = 200
   image.height = 200
   cell.appendChild(image)
   row.appendChild(cell)
   cell = document.createElement('td')
   cell.innerHTML = student.gender
   row.appendChild(cell)
   output.appendChild(row)

}
function addStudentList(StudentList){
    let counter = 1;
    for (student of StudentList){
        addStudentData(counter++,student)
    }
}
var x
function onLoad(){
    fetch('assets/students2.json').then(response =>{
        return response.json()
    }).then(data => {
        addStudentList(data)
    })
    
}