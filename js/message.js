AFRAME.registerComponent('message',{
    init:async function(){
        this.fetchData();
    },
   fetchData: async function(){
    return await firebase.database().ref('Messages').on('value', readMessage);
    },

    readMessage : async function(data){
        var messages = data.val()
        console.log(messages)
    }
})