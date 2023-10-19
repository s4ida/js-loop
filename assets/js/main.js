let students=[
    {id:1, name:"Ali", surname:"Alisoy", age:20, grade:95},
    {id:2, name:"Vusala", surname:"Nabiyeva", age:34, grade:77},
    {id:3, name:"Aliya", surname:"Gurbanzade", age:14, grade:98},
    {id:4, name: "Sabir", surname: "Nuruyev", age:15, grade: 54},
    {id:5, name: "Mehman", surname: "Heydarov", age:22, grade: 100},
    {id:6, name: "Sevana", surname: "Mammadli", age:41, grade: 35},
    {id:7, name: "Ilham", surname: "Babayev", age:24, grade: 95},
    {id:8, name: "Namiq", surname: "Gulahmedov", age:20, grade: 95},
    {id:9, name: "Aygun", surname: "Kazimova", age:24, grade: 100}
    ]
    
   2.  
   // let cutIndexliTelebeler=[];
      //for (let i=0; i<students.length; i++){
        //if (students[i].id % 2 ===0){
           // cutIndexliTelebeler.push(students[i].name);
       //}
       //  console.log(cutIndexliTelebeler)
     // }



    3.
      
   //let tekIndexliTelebeler=[];
      //for (let i=0; i<students.length; i++){
       // if (students[i].id % 2 ===1){
          // tekIndexliTelebeler.push(students[i].name);
      // }
      // console.log(tekIndexliTelebeler)
      //}
      
      4.

     // let YasiYirmidenBoyukTelebeler= [];
//for (let i = 0; i < students.length; i++){
  //  if (students[i].age>20) {
      // YasiYirmidenBoyukTelebeler.push(students[i].name);
   // }
   // }
   // console.log( YasiYirmidenBoyukTelebeler);


   5.

   //let Grade95BoyukCutSayliTelebeler=[];
 //for (let i = 0; i < students.length; i++){
   // if(students[i].id % 2===0 && students[i].grade>90){
      //  Grade95BoyukCutSayliTelebeler.push(students[i].name);
    //}
//}
//console.log( Grade95BoyukCutSayliTelebeler);

6.

let GradeYuksekOlanTelebeler=[];
for (let i = 0; i < students.length; i++){
if (students[i].grade==95 || students[i].grade==100){
    GradeYuksekOlanTelebeler.push(students[i].name);
}

}
console.log( GradeYuksekOlanTelebeler);

   