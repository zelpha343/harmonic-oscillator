import * as THREE from 'three';
import textureUrl from './textures/Abstract-Gradient-1.png';

const canvas = document.getElementById("canvas");
const width = canvas.offsetWidth;
const height = canvas.offsetHeight;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.set(0, 0, 30);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
canvas.appendChild(renderer.domElement);

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load(textureUrl, console.log('loaded'));

const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(3),
    new THREE.MeshBasicMaterial({ map: texture })
);
scene.add(sphere);

const animate = () => {
    requestAnimationFrame(animate);
    sphere.position.set(3 * Math.sin(1), 0, 0)
    renderer.render(scene, camera);
};

animate();