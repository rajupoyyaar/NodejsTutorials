const {readFile,writeFile} = require('fs');

readFile('./Content/subfolder/test.txt', 'utf8', (err,result)=>{
    if(err){
        console.log(err);
        return err;
    }
    const first = result;
    readFile('./Content/subfolder/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err);
            return err;
        }
        const second = result;
        writeFile('./Content/subfolder/sync-write.txt', `Here is the Result: ${first}, ${second}`, (err,result)=>{
            if(err){
                console.log(err);
                return err;
            }
            console.log(result);
        })
    })
})