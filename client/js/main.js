var camera, scene, renderer,
geometry, material, box;




var init = function() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 1000;
    scene.add( camera );
    var light = new THREE.PointLight(0xffffff);
    light.position.set(-100,120,100);
    scene.add(light);
    createBoxes(10);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( renderer.domElement );
    controls = new THREE.OrbitControls(camera, renderer.domElement);

}

var animate = function(){
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
  controls.update();

}

var createBoxes = function(num){
	for(var i = 0; i < num; i++){
		geometry = new THREE.CubeGeometry( 100, 100, 100 );
    material = new THREE.MeshLambertMaterial({color: 0x55B663});
    box = new THREE.Mesh( geometry, material );
    box.position.y = 150 + i * 201
    scene.add( box );
	}

}




init();
animate();
