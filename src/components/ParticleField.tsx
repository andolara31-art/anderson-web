import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ParticleField() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    const particleCount = isMobile ? 200 : 350;
    const lineCount = 120;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 35;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Particles
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;     // x: -30 to 30
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60; // y: -30 to 30
      positions[i * 3 + 2] = (Math.random() - 0.5) * 36; // z: -18 to 18

      velocities.push({
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02
      });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Create circular texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.5, 'rgba(255,255,255,0.5)');
      gradient.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
    }
    const circleTexture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.8,
      transparent: true,
      opacity: 0.15,
      sizeAttenuation: true,
      map: circleTexture,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Lines
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(lineCount * lineCount * 6); // Max possible lines
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.03
    });

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    if (!isMobile) {
      window.addEventListener('mousemove', onMouseMove);
    }

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onWindowResize);

    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const time = clock.getElapsedTime();
      const positions = points.geometry.attributes.position.array as Float32Array;

      let lineIndex = 0;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        // Update positions
        positions[i3] += velocities[i].x + Math.sin(time * 0.4 + i * 0.1) * 0.003;
        positions[i3 + 1] += velocities[i].y + Math.cos(time * 0.3 + i * 0.1) * 0.003;
        positions[i3 + 2] += velocities[i].z;

        // Bounce
        if (Math.abs(positions[i3]) > 30) velocities[i].x *= -1;
        if (Math.abs(positions[i3 + 1]) > 30) velocities[i].y *= -1;
        if (Math.abs(positions[i3 + 2]) > 18) velocities[i].z *= -1;

        // Lines (only for first 120 particles)
        if (i < lineCount) {
          for (let j = i + 1; j < lineCount; j++) {
            const j3 = j * 3;
            const dx = positions[i3] - positions[j3];
            const dy = positions[i3 + 1] - positions[j3 + 1];
            const dz = positions[i3 + 2] - positions[j3 + 2];
            const distSq = dx * dx + dy * dy + dz * dz;

            if (distSq < 25) {
              linePositions[lineIndex++] = positions[i3];
              linePositions[lineIndex++] = positions[i3 + 1];
              linePositions[lineIndex++] = positions[i3 + 2];
              linePositions[lineIndex++] = positions[j3];
              linePositions[lineIndex++] = positions[j3 + 1];
              linePositions[lineIndex++] = positions[j3 + 2];
            }
          }
        }
      }

      points.geometry.attributes.position.needsUpdate = true;
      
      lines.geometry.setDrawRange(0, lineIndex / 3);
      lines.geometry.attributes.position.needsUpdate = true;

      points.rotation.y = time * 0.02;
      lines.rotation.y = time * 0.02;

      if (!isMobile) {
        camera.position.x += (mouseX * 4 - camera.position.x) * 0.015;
        camera.position.y += (mouseY * 4 - camera.position.y) * 0.015;
        camera.lookAt(scene.position);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      if (!isMobile) {
        window.removeEventListener('mousemove', onMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
      
      geometry.dispose();
      material.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      circleTexture.dispose();
      renderer.dispose();
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none" />;
}
