function todoList(){
    let input = document.getElementById("inputBox").value ;
    let list = document.getElementById("todoList") ;
    let item = document.createElement("li");
    item.innerHTML = input ;
    list.appendChild(item) ;
}
 

/*
    let item = document.getElementById("inputBox").value 
    
    let text = document.createTextNode(item)       //createElement se tag create hota h and createTextNode se actual text jo display karvaana h vo aayega
    // pehle hume value milli phir usko hum ek naye variable text mein store karvaa rahe h
    
    let newItem = document.createElement("li")
    newItem.appendChild(text)    // now hum naye text ko enter karvaa rahe h list mein
    document.getElementById("todoList").appendChild(newItem)
*/
function removal(){
    let list = document.getElementById("todoList")
    list.removeChild(list.childNodes[0]);
}

//--------------------------------------------------------------------------------------

// const todoState = [{
//     title: 'radiohead'
//     striked: false
// }]

const todoState = []

const render = (state) => {
    return state.reduce((accum, todo) => {
        const classString = todo.striked ? 'class = "striked"':''
        return accum + `<li ${classString}> ${todo.title} </li>`
    },'')
}

const paint = function(){
    const html = render(todoState)
    document.getElementById('list').innerHTML = html
}

// eventlistners

document.getElementById("addButton").addEventListener('click', e => {
    const inpuText = document.getElementById("inputBox")
    bindsState.push({
        title: inpuText

    })
})

document.getElementById('list').addEventListener('click' , e=> {

})

document.getElementById('clearButton').addEventListener('click' , e=> {
    bandsState = bandsState.filter(band => !band.striked)
    paint()
})