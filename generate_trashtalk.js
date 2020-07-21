//define generateTrashtalk function
function generateTrashtalk() {
    // define things user might want
    const task = {
        engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
        designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
        entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
    }
    const phrase = ['很簡單', '很容易', '很快', '很正常']

    //define dummy data
    const options = {
        occupation: 'designer'
    }

    console.log(task.engineer)

    for ( let i = 1; i <= task.length; i++) {
        if ( task[i] !== options.occupation ) {
            console.log(task[i])
        }
    }


    // create a collection to store things user picked up
    let collection = []
    // start generating password
    //define sample function to randomly reture an item in an array
    function sample(task) {
        const index = Math.floor(Math.random()* task.length)
        return array[index]
    }


    // return the generated password
    

    console.log('THis fuction will generate trash talk')

}

//invoke generateTrashtalk function
generateTrashtalk()