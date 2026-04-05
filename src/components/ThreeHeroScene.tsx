import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeHeroScene() {
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      host.clientWidth / host.clientHeight,
      0.1,
      100,
    );
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(host.clientWidth, host.clientHeight);
    renderer.setClearColor(0x050816, 0);
    host.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0x7dd3fc, 1.3);
    const keyLight = new THREE.DirectionalLight(0x8b5cf6, 2.2);
    keyLight.position.set(-2, 3, 5);
    const fillLight = new THREE.DirectionalLight(0x67e8f9, 1.8);
    fillLight.position.set(3, -1, 4);
    scene.add(ambient, keyLight, fillLight);

    const geometry = new THREE.TorusKnotGeometry(1.35, 0.42, 180, 24);
    const material = new THREE.MeshStandardMaterial({
      color: 0x6d7cff,
      metalness: 0.75,
      roughness: 0.2,
      emissive: 0x13224f,
      emissiveIntensity: 0.7,
    });
    const knot = new THREE.Mesh(geometry, material);
    scene.add(knot);

    const ringGeometry = new THREE.RingGeometry(2.6, 2.72, 64);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x67e8f9,
      transparent: true,
      opacity: 0.18,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 2.35;
    scene.add(ring);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 220;
    const positions = new Float32Array(particlesCount * 3);

    for (let index = 0; index < particlesCount; index += 1) {
      positions[index * 3] = (Math.random() - 0.5) * 12;
      positions[index * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[index * 3 + 2] = (Math.random() - 0.5) * 12;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );
    const particles = new THREE.Points(
      particlesGeometry,
      new THREE.PointsMaterial({
        color: 0x8b5cf6,
        size: 0.03,
        transparent: true,
        opacity: 0.8,
      }),
    );
    scene.add(particles);

    let mouseX = 0;
    let mouseY = 0;

    const handlePointerMove = (event: PointerEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleResize = () => {
      camera.aspect = host.clientWidth / host.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(host.clientWidth, host.clientHeight);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("resize", handleResize);

    const clock = new THREE.Clock();
    let animationFrame = 0;

    const animate = () => {
      const time = clock.getElapsedTime();
      knot.rotation.x = time * 0.32 + mouseY * 0.2;
      knot.rotation.y = time * 0.55 + mouseX * 0.4;
      ring.rotation.z = time * 0.08;
      particles.rotation.y = time * 0.03;
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.04;
      camera.position.y += (mouseY * 0.35 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      ringGeometry.dispose();
      particlesGeometry.dispose();
      material.dispose();
      ringMaterial.dispose();
      renderer.dispose();
      host.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={hostRef} className="absolute inset-0" aria-hidden="true" />;
}
