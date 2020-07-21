//define generateTrashtalk function
function generateTrashtalk() {
    // define things user might want
    const task = {
        engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
        designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
        entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
    }
    const phrase = ['很簡單', '很容易', '很快', '很正常']

    //假的取值資料
    const options = {
        occupation: 'engineer'
    }

    //比對取值是否相同
    let trashtalk = ''
    for (let prop in task) {
        if (prop === options.occupation) {
            const taskIndex = Math.floor(Math.random() * task[prop].length)
            const phraseIndex = Math.floor(Math.random() * phrase.length)
            trashtalk += `身為一個${prop}，${task[prop][taskIndex]}，${phrase[phraseIndex]}吧!`
            console.log(trashtalk)
        }
    }
    // return the generated trashtalk
    // return password
}

//invoke generateTrashtalk function
generateTrashtalk()