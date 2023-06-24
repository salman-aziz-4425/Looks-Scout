
const expres=document.getElementsByClassName('expression')[0].innerText.trim()

console.log(expres)

// Get all the calculator buttons
const buttons = document.querySelectorAll('.btn');

// Add event listeners to each button
buttons.forEach(button => {
  button.addEventListener('click', function() {
    console.log('Button clicked:', button.textContent);
    document.getElementsByClassName('expression')[0].innerText+=button.textContent
  });
});

const Clear = document.querySelectorAll('.clear');

// Add event listeners to each button
Clear.forEach(button => {
  button.addEventListener('click', function() {
    document.getElementsByClassName('expression')[0].innerText=""
  });
});

const evaluation=document.querySelectorAll('.eval1');
evaluation.forEach(button=>{
    button.addEventListener('click',()=>{
        let expres=document.getElementsByClassName('expression')[0].innerText.trim()
        console.log(expres)
    })
}
    )
