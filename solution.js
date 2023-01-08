function hackerrankInString(s) {
    // Write your code here
    let hr = 'hackerrank'
    if(s.length < hr){
        return 'NO'
    }
    let startingPoint = 0
    for(let i = 0; i < hr.length; i++){
        startingPoint = s.indexOf(hr[i], startingPoint)
        if(startingPoint === -1){
            return 'NO'
        }
        else{
            startingPoint += 1
        }
    }
    return 'YES'
}
