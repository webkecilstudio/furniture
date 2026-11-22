import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Product } from '../../types';
import { FaTimes, FaRedo, FaSun, FaPalette } from 'react-icons/fa';

interface ThreeDViewerModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ThreeDViewerModal: React.FC<ThreeDViewerModalProps> = ({ product, onClose }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [materialColor, setMaterialColor] = useState('#8B5A2B'); // Teak brown default
  const [wireframe, setWireframe] = useState(false);
  const [lightIntensity, setLightIntensity] = useState(1.2);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xF5F5F5);

    // Grid Floor
    const gridHelper = new THREE.GridHelper(10, 20, 0x0A0A0A, 0xD4D4D4);
    gridHelper.position.y = -1.2;
    scene.add(gridHelper);

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(3.5, 2.2, 4.5);

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, lightIntensity * 0.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, lightIntensity);
    dirLight.position.set(5, 8, 5);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const fillLight = new THREE.DirectionalLight(0xffecd2, 0.4);
    fillLight.position.set(-5, 3, -5);
    scene.add(fillLight);

    // 5. Furniture Procedural Group (Realistic Nordic Armchair / Table Model)
    const furnitureGroup = new THREE.Group();

    // Wood Material
    const woodMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(materialColor),
      roughness: 0.35,
      metalness: 0.1,
      wireframe: wireframe
    });

    // Cushion / Fabric Material
    const cushionMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x333333),
      roughness: 0.85,
      metalness: 0.05,
      wireframe: wireframe
    });

    // Metal / Brass Material
    const metalMat = new THREE.MeshStandardMaterial({
      color: 0x111111,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: wireframe
    });

    // Seat Cushion
    const seatGeo = new THREE.BoxGeometry(1.6, 0.25, 1.5);
    const seatMesh = new THREE.Mesh(seatGeo, cushionMat);
    seatMesh.position.y = 0;
    furnitureGroup.add(seatMesh);

    // Wooden Frame Base under seat
    const baseGeo = new THREE.BoxGeometry(1.7, 0.12, 1.6);
    const baseMesh = new THREE.Mesh(baseGeo, woodMat);
    baseMesh.position.y = -0.15;
    furnitureGroup.add(baseMesh);

    // Backrest Cushion
    const backGeo = new THREE.BoxGeometry(1.5, 1.2, 0.22);
    const backMesh = new THREE.Mesh(backGeo, cushionMat);
    backMesh.position.set(0, 0.7, -0.65);
    backMesh.rotation.x = -0.15;
    furnitureGroup.add(backMesh);

    // Wooden Back Outer Spine
    const backSpineGeo = new THREE.BoxGeometry(1.6, 1.3, 0.08);
    const backSpine = new THREE.Mesh(backSpineGeo, woodMat);
    backSpine.position.set(0, 0.7, -0.78);
    backSpine.rotation.x = -0.15;
    furnitureGroup.add(backSpine);

    // 4 Legs (Angled Nordic legs)
    const legGeo = new THREE.CylinderGeometry(0.04, 0.025, 1.1, 16);

    const legPositions = [
      { x: 0.7, z: 0.65, rotZ: -0.1, rotX: 0.1 },
      { x: -0.7, z: 0.65, rotZ: 0.1, rotX: 0.1 },
      { x: 0.7, z: -0.65, rotZ: -0.1, rotX: -0.1 },
      { x: -0.7, z: -0.65, rotZ: 0.1, rotX: -0.1 }
    ];

    legPositions.forEach((pos) => {
      const leg = new THREE.Mesh(legGeo, woodMat);
      leg.position.set(pos.x, -0.65, pos.z);
      leg.rotation.z = pos.rotZ;
      leg.rotation.x = pos.rotX;
      furnitureGroup.add(leg);
    });

    // Wooden Armrests
    const armGeo = new THREE.BoxGeometry(0.12, 0.06, 1.4);
    const armLeft = new THREE.Mesh(armGeo, woodMat);
    armLeft.position.set(0.85, 0.45, -0.05);
    furnitureGroup.add(armLeft);

    const armRight = new THREE.Mesh(armGeo, woodMat);
    armRight.position.set(-0.85, 0.45, -0.05);
    furnitureGroup.add(armRight);

    scene.add(furnitureGroup);

    // 6. Mouse Interaction & Orbit Dragging
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let rotationSpeed = 0.005;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      furnitureGroup.rotation.y += deltaX * rotationSpeed;
      furnitureGroup.rotation.x += deltaY * rotationSpeed;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      camera.position.z = Math.max(2, Math.min(8, camera.position.z + e.deltaY * 0.005));
    };

    const container = mountRef.current;
    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('wheel', onWheel, { passive: false });

    // Animation Loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      if (!isDragging) {
        furnitureGroup.rotation.y += 0.002; // Auto gentle orbit
      }
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };
    animate();

    // Resize Handler
    const handleResize = () => {
      if (!mountRef.current) return;
      const newWidth = mountRef.current.clientWidth;
      const newHeight = mountRef.current.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('wheel', onWheel);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [materialColor, wireframe, lightIntensity]);

  return (
    <div className="fixed inset-0 z-50 bg-[#0A0A0A]/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#FAFAFA] border-4 border-[#0A0A0A] w-full max-w-4xl h-[85vh] flex flex-col shadow-none">
        
        {/* Top Header */}
        <div className="bg-[#0A0A0A] text-[#FAFAFA] p-4 flex items-center justify-between border-b-2 border-[#0A0A0A]">
          <div className="flex items-center gap-3">
            <span className="bg-[#EF4444] text-[#FAFAFA] text-[10px] font-mono font-bold uppercase px-2 py-0.5">
              3D PRODUCT VIEWER
            </span>
            <h3 className="font-display text-base uppercase text-[#FAFAFA]">
              {product ? product.name : 'Model 3D Nordic Armchair Teak'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="text-[#FAFAFA] hover:text-[#EF4444] text-lg p-1 transition-colors"
          >
            <FaTimes />
          </button>
        </div>

        {/* 3D Canvas Mount */}
        <div className="flex-1 relative cursor-grab active:cursor-grabbing" ref={mountRef}>
          {/* Overlay Guide */}
          <div className="absolute top-4 left-4 bg-[#0A0A0A]/90 text-[#FAFAFA] p-3 text-[11px] font-mono border border-[#0A0A0A] pointer-events-none">
            <div>• Drag kursor untuk memutar sudut 360°</div>
            <div>• Scroll mouse untuk zoom in / zoom out</div>
          </div>

          {/* Interactive Material / Lighting Control Toolbar */}
          <div className="absolute bottom-4 left-4 right-4 bg-[#FAFAFA] border-2 border-[#0A0A0A] p-3 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            
            {/* Color Swatches */}
            <div className="flex items-center gap-2">
              <span className="font-bold uppercase">Warna Kayu:</span>
              <button
                onClick={() => setMaterialColor('#8B5A2B')}
                className={`w-6 h-6 border-2 ${materialColor === '#8B5A2B' ? 'border-[#0A0A0A]' : 'border-transparent'}`}
                style={{ backgroundColor: '#8B5A2B' }}
                title="Natural Teak"
              />
              <button
                onClick={() => setMaterialColor('#4A2E18')}
                className={`w-6 h-6 border-2 ${materialColor === '#4A2E18' ? 'border-[#0A0A0A]' : 'border-transparent'}`}
                style={{ backgroundColor: '#4A2E18' }}
                title="Dark Walnut"
              />
              <button
                onClick={() => setMaterialColor('#C2A377')}
                className={`w-6 h-6 border-2 ${materialColor === '#C2A377' ? 'border-[#0A0A0A]' : 'border-transparent'}`}
                style={{ backgroundColor: '#C2A377' }}
                title="Bleached Oak"
              />
              <button
                onClick={() => setMaterialColor('#1A1A1A')}
                className={`w-6 h-6 border-2 ${materialColor === '#1A1A1A' ? 'border-[#0A0A0A]' : 'border-transparent'}`}
                style={{ backgroundColor: '#1A1A1A' }}
                title="Noir Black"
              />
            </div>

            {/* Wireframe toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setWireframe(!wireframe)}
                className={`px-3 py-1 border-2 border-[#0A0A0A] uppercase font-bold text-[10px] ${
                  wireframe ? 'bg-[#0A0A0A] text-[#FAFAFA]' : 'bg-[#FAFAFA] text-[#0A0A0A]'
                }`}
              >
                {wireframe ? 'Shaded View' : 'Wireframe View'}
              </button>

              <button
                onClick={() => setLightIntensity((prev) => (prev > 1.5 ? 0.8 : prev + 0.4))}
                className="px-3 py-1 border-2 border-[#0A0A0A] uppercase font-bold text-[10px] flex items-center gap-1.5 hover:bg-[#0A0A0A] hover:text-[#FAFAFA]"
              >
                <FaSun />
                <span>Pencahayaan</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
