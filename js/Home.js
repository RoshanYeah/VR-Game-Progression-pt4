AFRAME.registerComponent("home", {
  schema:{
      state:{type:"string",default:"start"},
      selectedWorld:{type:"string",default:"home"}
  },
  init: function () {
      this.placesContainer = this.el;
      this.cameraEl = document.querySelector("#camera");
      this.createCards(); 
      this.showWorld()
  },
  tick: function () {
    const { state } = this.el.getAttribute('home');
    if(state==="play"){
      this.hideAllElement([this.placesContainer])
      this.showWorld()
    }
    // const { selectedWorld } = this.placesContainer.getAttribute('game-states')
    // var forestB = document.querySelector("#forest-button")
    // if(state === "start" && selectedWorld === "#homeWorld"){
    //   forestB.addEventListener("click", (evt) => {
    //     this.el.setAttribute('home',{
    //       state:'play',
    //       selectedWorld:'forest'
    //     })
    //     this.hideAllElement([this.placesContainer])
    //   })
    // }
    // if(state === "forest-state"){
    //   var forestEl = document.createElement('a-entity');
    //   forestEl.getAttribute('forest')

    // }
    //this.changeGameState();
  },
  showWorld:function(){
    const {selectedWorld} = this.data;
    const skyEl = document.querySelector("#main-container");

    skyEl.setAttribute("material", {
      src: `assets/images/${selectedWorld}.jpg`,
      color: "white"
    });
  },
  hideAllElement: function(buttons){
   buttons.map(el=>{el.setAttribute('visible',false)})
  },
  changeGameState: function () {
      const { state } = this.el.getAttribute('home')
      var forestB = document.querySelector("#forest-button")
      var cityB = document.querySelector("#city-button")
      var mountainB = document.querySelector("#mountain-button")

      
      forestB.addEventListener("click", (evt) => {
        if(state == 'start'){
          this.el.setAttribute('home',{
            state:'forest-state'
          })
          // this.el.setAttribute('visible',false)
          }
      
          if(state == 'forest-state'){

            var forestEl = document.createElement('a-entity');
            forestEl.getAttribute('forest')
            this.el.setAttribute('visible',false)
            // window.location="js/Forest.js"
          }
      })
      cityB.addEventListener("click", (evt) => {
          if(state == 'start'){
            this.el.setAttribute('home',{
              state:'city-state'
            })
            }
        
            if(state == 'city-state'){
              window.location="js/City.js"
            }
      })
        mountainB.addEventListener("click", (evt) => {
          if(state == 'start'){
            this.el.setAttribute('home',{
              state:'mountain-state'
            })
            }
        
            if(state == 'mountain-state'){
              window.location="js/Mountain.js"
            }
      })
  },
  createCards: function () {
      const thumbNailsRef = [
          {
              id: "mountain",
              title: "Mountains",
              url: "./assets/mountain-tumbnail.jpg"
          },
          {
              id: "city",
              title: "City",
              url: "./assets/city-thumbnail.jpg"
          },

          {
              id: "forest",
              title: "Forest",
              url: "./assets/forest-thumbnail.jpg"
          }
      ];
      let prevoiusXPosition = -50;
      for (var item of thumbNailsRef) {
          const posX = prevoiusXPosition + 25;
          const posY = 5;
          const posZ = -40;
          const position = { x: posX, y: posY, z: posZ };
          prevoiusXPosition = posX;

          // Border Element
          const borderEl = this.createBorder(position, item.id);

          // Thubnail Element
          const thumbNail = this.createThumbNail(item);
          borderEl.appendChild(thumbNail);

          // // Button Element
          // const buttonEl = this.createButtonEl(position);
          // borderEl.appendChild(buttonEl);

          // Title Text Element
          const titleEl = this.createTitleEl(position, item);
          borderEl.appendChild(titleEl);

          this.placesContainer.appendChild(borderEl);
      }
  },
  createBorder: function (position, id) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("id", id);
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
          primitive: "plane",
          width:22,
          height:14
      });
      entityEl.setAttribute("position", position);
      entityEl.setAttribute("material", {
          color: "#0077CC",
          opacity: 1
      });
      entityEl.setAttribute("cursor-listener", {});
      return entityEl;
  },
  createThumbNail: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
          primitive: "plane",
          width:20,
          height:12,
      });
      entityEl.setAttribute("position",{x:0,y:0,z:1})
      entityEl.setAttribute("material", { src: item.url });
      entityEl.setAttribute("cursor-listener", {});
      return entityEl;
  },
  createTitleEl: function (position, item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("text", {
          font: "exo2bold",
          align: "center",
          width: 100,
          color: "#e65100",
          value: item.title
      });
      const elPosition = position;
      elPosition.y = -12;
      entityEl.setAttribute("position", elPosition);
      entityEl.setAttribute("visible", true);
      return entityEl;
  },
  // createButtonEl: function (position) {
  //     const entityEl = document.createElement("a-entity");
  //     entityEl.setAttribute("visible", true);
  //     entityEl.setAttribute("geometry", {
  //         primitive: "plane",
  //         width:20,
  //         height:5,
  //     });
  //     entityEl.setAttribute("material", {src:"./assets/start-button.png"});
  //     const elPosition = position;
  //     elPosition.y = -20;
  //     entityEl.setAttribute("position", elPosition);
  //     entityEl.setAttribute("cursor-listener", {});
  //     return entityEl;
  // },
  

});  