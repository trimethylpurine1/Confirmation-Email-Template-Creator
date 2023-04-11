const startDate = document.getElementById('coach')


function gatherAnswer(){
    return startDate
}

function produceAnswer(){
    const answer = (`Look how cool of a coach I am ${gatherAnswer()}`)
    const shipment = document.getElementById('title_collector')
    return shipment.innerText(answer)
}

function theCombiningFunction(){
    gatherAnswer()
    produceAnswer()
}

document.getElementById('sub').addEventListener('click', theCombiningFunction())
