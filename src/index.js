'use strict'

import './styles/main.scss'
import "regenerator-runtime/runtime.js";
import getGitRepos from './js/repos'
import updateFooter from './js/footer'

import * as THREE from 'three'

getGitRepos()
updateFooter()

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#background')
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)

renderer.render(scene, camera)

const sunGeometry = new THREE.SphereGeometry( 2, 32, 16 );
const sunMaterial = new THREE.MeshStandardMaterial( { color: 0xeb910c } );
const sun = new THREE.Mesh( sunGeometry, sunMaterial );
sun.position.setY(10)
sun.position.setZ(-18)
scene.add( sun );

const pointLight = new THREE.PointLight(0xffffcf)
pointLight.position.setY(10)
pointLight.position.setX(-18)
scene.add(pointLight)

function addStar() {
  const starGeometry = new THREE.SphereGeometry(0.25, 24, 24)
  const starMaterial = new THREE.MeshStandardMaterial( {color: 0xffffff} )
  const star = new THREE.Mesh(starGeometry, starMaterial)

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100))

  star.position.set(x,y,z)
  scene.add(star)
}

Array(250).fill().forEach(addStar)

function moveCamera() {
  const top = document.body.getBoundingClientRect().top
 
  sun.rotation.x += 0.05;

  camera.position.z = top * -0.01
  camera.position.y = top * -0.0002;
  camera.position.x = top * -0.0002;
}

document.body.onscroll = moveCamera

// Animation Loop
function animate() {
  requestAnimationFrame( animate )
  renderer.render(scene, camera)
}

animate()