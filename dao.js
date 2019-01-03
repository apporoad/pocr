require('pplugins.js').unimplemented(module,'pocr-db')


exports.addTask = (task) =>{
    throw new Error('unimplement , pliz pp use pocr-db-*')
}

exports.getTask = taskId=>{
    throw new Error('unimplement , pliz pp use pocr-db-*')
}

exports.ocuppyOneTask= (worker)=>{
    throw new Error('unimplement , pliz pp use pocr-db-*')
}

exports.setTaskStatus =(task,fromStatus,toStatus,errInfo) =>{
    throw new Error('unimplement , pliz pp use pocr-db-*')  
}

exports.addResult = (result) =>{
    throw new Error('unimplement , pliz pp use pocr-db-*')
}

exports.rmResult = taskId =>{
    throw new Error('unimplement , pliz pp use pocr-db-*')
}