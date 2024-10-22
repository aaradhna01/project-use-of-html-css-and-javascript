const colors=['red' ,'blue', 'pink', 'green', 'purple', 'black', 'grey'];

function changecolor(){
    const colorIndex = parseInt(Math.random()*colors.length)
    document.body.style.background=colors[colorIndex];
}
