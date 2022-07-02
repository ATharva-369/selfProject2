AFRAME.registerComponent("marker-handler",{
    init:async function(){
        this.el.addEventListener("markerFound",()=>{
            console.log("Marker Found!");        
            const dbRef = firebase.database().ref('/Messages').on("value", this.readMessage, this.errorMessage)
        });
        this.el.addEventListener("markerLost",()=>{
            console.log("Marker Lost!");
        });    
    },
    readMessage : async function(data){
      messages = data.val();
      console.log(messages);
      index = Math.floor(Math.random() * 2);
      console.log(index)
      // $("#text-plane").html = "HELLO"
      var marker = document.getElementById("message-marker")
              // Dish review plane
              var reviewPlane = document.createElement("a-entity");
              reviewPlane.setAttribute("id", `review-plane-${index}`);
              reviewPlane.setAttribute("position", { x: 2, y: 0, z: 0 });
              reviewPlane.setAttribute("geometry", {
                primitive: "plane",
                width: 1.5,
                height: 0.5
              });
      
              reviewPlane.setAttribute("material", {
                color: "#F0C30F"
              });
              reviewPlane.setAttribute("rotation", { x: -90, y: 0, z: 0 });
              reviewPlane.setAttribute("visible", false);
      
              // Dish review
              var review = document.createElement("a-entity");
              review.setAttribute("id", `review-${index}`);
              review.setAttribute("position", { x: 0, y: 0.05, z: 0.1 });
              review.setAttribute("rotation", { x: 0, y: 0, z: 0 });
              review.setAttribute("text", {
                font: "mozillavr",
                color: "white",
                width: 2.4,
                align: "center",
                value: index
              });
              
              reviewPlane.appendChild(review);
              marker.appendChild(reviewPlane);

    },
    errorMessage: async function(error) {
      console.log(error)
    },
    getRandomInt : function (max) {
    }
})