// departments cards on click 

const deps = [
    {
        id: 1,
        name: 'Emergency',
        img: "departments/emergency.png",
        text: " The emergency department provides urgent medical care<br>for life-threatening and severe conditions.Operating 24/7,<br>it prioritizes patients based on urgency to ensure timely treatment."
    },
    {
        id: 2,
        name: 'Urology',
        img: "departments/Urology.jpg",
        text: "The Urology Department specializes in treating conditions<br> of the urinary tract and male reproductive system,<br> including kidney stones, bladder issues, and prostate problems."
    },
    {
        id: 3,
        name: 'Hematology',
        img: 'departments/hematology.jpg',
        text: "The Hematology Department is a medical specialty focused <br>on the study, diagnosis, treatment, and prevention of<br> diseases related to blood and blood-forming organs."
    },
    {
        id: 4,
        name: 'Rheumatology',
        img: 'departments/rheumatology.png',
        text: 'The Rheumatology Department focuses on diagnosing and treating<br> autoimmune and inflammatory conditions,such as arthritis<br> and lupus, affecting the joints and connective tissues.'
    },
    {
        id: 5,
        name: 'Radiology',
        img: 'departments/radiology.jpg',
        text: "The Radiology Department is a medical specialty that focuses <br>on diagnosing and treating diseases using imaging technologies<br> such as X-rays, CT scans, MRIs, and ultrasounds."
    },
    {
        id: 6,
        name: 'Neurology',
        img: 'departments/neurology.png',
        text: "The Neurology Department specializes in diagnosing and <br>treating conditions affecting the brain, spinal cord, and nerves."
    },
    {
        id: 7,
        name: 'Cardiology',
        img: 'departments/cardiology.png',
        text: "The Cardiology Department focuses on diagnosing and treating<br> heart diseases using tests like angiography and ECG."
    },
    {
        id: 8,
        name: 'Orthopedic',
        img: 'departments/orthopedic.jpg',
        text: "The Orthopedic Department treats bone,and muscle conditions,<br> with both surgical and non-surgical care."
    },
    {
        id: 9,
        name: 'Anesthesiology',
        img: 'departments/Anaesthesia.jpg',
        text: "Anesthesiology is the medical specialty that involves administering<br> anesthesia during surgeries and procedures."
    },
    {
        id: 10,
        name: 'Ophthalmology',
        img: 'departments/opathology.jpg',
        text: "Ophthalmology is the medical specialty that diagnoses,<br> treats, and prevents eye diseases.<br> It treats conditions like cataracts and glaucoma."
    },
];

// selecting the elements from the document
const img = document.getElementById('dep-img')
const dep = document.getElementById('dep')
const info = document.getElementById('info')

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")

// start at item 0 in the array 
let currentDepartment = 0;
window.addEventListener('DOMContentLoaded', function(){
    department(currentDepartment);
})

function department(eachDep){
    const item = deps[eachDep]
    img.src = item.img
    dep.textContent = item.name
    info.innerHTML = item.text
}

nextBtn.addEventListener("click", function(){
    console.log("NEXT BUTTON CLICKED")
    currentDepartment++;
    if(currentDepartment > deps.length - 1){
        currentDepartment = 0;
    }
    department(currentDepartment)
})

prevBtn.addEventListener("click", function(){
    console.log("PREV BUTTON CLICKED")
    currentDepartment--;
    if(currentDepartment < 0){
        currentDepartment = deps.length - 1
    }
    department(currentDepartment)
})