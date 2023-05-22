AFRAME.registerComponent("forest", {
  schema: {
    // id:{type:"string",default:"forestWorld"}
  },
  init: function () {
    const wolfPos = [
      [-9, 0, 10], [-8, 0, 11], [-10, 0, 8], 
      [-10, 0, 7], [-8, 0, 5], [-9, 0, 3], 
      [-8, 0, -2], [-10, 0, -3], [-7, 0, -5], 
      [-5, 0, -3], [-3, 0, -5], [-1, 0, -4], 
      [1, 0, -5], [1, 0, -3], [-1, 0, -1], 
      [-1, 0, 1], [1, 0, 3], [-1, 0, 4], 
      [1, 0, 5],
    ]
    for (var i = 0; i < 19; i++) {
      //id
      var id = `hurdle${i}`;

      //position variables
      //  * 10 + -7;
      //  * 10 + -7;
      var posX = wolfPos[i[0]]
      var posY = wolfPos[i[1]]
      var posZ = wolfPos[i[2]]

      var position = { x: posX, y: posY, z: posZ };

      //call the function
      this.runningWolf(id, position);
    }
    this.barrier();
  },
  forestEl: function () {

  },
  runningWolf: (id, position) => {
    //Get the terrain element
    var terrainEl = document.querySelector("#forestWorld");
    // terrainEl.setAttribute("visible",true)

    //creating the wolf model entity
    var wolfEl = document.createElement("a-entity");

    //Setting multiple attributes
    wolfEl.setAttribute("id", id);

    wolfEl.setAttribute("position", position);
    wolfEl.setAttribute("scale", { x: 0.5, y: 0.5, z: 0.5 });

    //set the gLTF model attribute
    wolfEl.setAttribute("gltf-model", "assets/wolf/scene.gltf");

    //set animation mixer of models with animation
    wolfEl.setAttribute("animation-mixer", {});

    wolfEl.setAttribute("static-body", { shape: "sphere", sphereRaidus: 1 })

    //append the wolf entity as the child of the terrain entity
    terrainEl.appendChild(wolfEl);
  },
  barrier: function () {
    const wallPos = [[-11, 1, 6], [-7, 1, 6]]
    const wallSize = [[1, 1, 12], [1, 1, 10]]

    for (var i = 0; i < 6; i++) {
      var wall = document.createElement("a-box")
      var px = wallPos[i[0]]
      var py = wallPos[i[1]]
      var pz = wallPos[i[2]]
      wall.setAttribute("position", { x: px, y: py, z: pz })
      var sx = wallSize[i[0]]
      var sy = wallSize[i[1]]
      var sz = wallSize[i[2]]
      wall.setAttribute("geometry", {
        width: sx,
        height: sy,
        depth: sz
      })
      wall.setAttribute("material", "color","red")
    }
  }
})