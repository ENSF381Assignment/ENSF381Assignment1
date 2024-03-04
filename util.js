let mainBody;

document.addEventListener('DOMContentLoaded', function() {
    // Your code goes here
    mainBody = document.getElementById('main');
});

function clearAlerts(index=2) {
    if (mainBody.childElementCount <= index) return;
    mainBody.children[index].innerHTML = '';
}

function displayAlert(message, index=2) {
    let pHTML = `<p>${message}</p>`
    console.log(index)
    if (mainBody.childElementCount === index) {
        let div = document.createElement('div');
        div.setAttribute('style', 'width: 100%; border: 2px solid #000; background-color: #f9f9f9; padding: 10px; margin: 20px')
        div.innerHTML = pHTML;
        mainBody.appendChild(div);
    } else {
        mainBody.children[index].innerHTML += pHTML;
    }
}
