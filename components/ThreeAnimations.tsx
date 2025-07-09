// import React, { useEffect, useState } from "react";


// const ThreeDAnimation = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   // Kursorun mövqeyini izləmək üçün useEffect istifadə edirik
//   useEffect(() => {
//     const handleMouseMove = (event: MouseEvent) => {
//       setMousePosition({ x: event.clientX, y: event.clientY });
//     };

//     // Kursor hərəkəti izləmək üçün eventListener əlavə edirik
//     window.addEventListener("mousemove", handleMouseMove);

//     // Təmizləmə üçün eventListener çıxarılır
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   // Kursor mövqeyinə əsaslanaraq transformasiya tətbiq edirik
//   const rotationX = (mousePosition.y / window.innerHeight - 0.5) * 10; // Y oxu üzrə döndürmə
//   const rotationY = (mousePosition.x / window.innerWidth - 0.5) * 10; // X oxu üzrə döndürmə

//   return (
//     <div
//       className="svg-frame"
//       style={{
//         transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`, // Kursor hərəkətinə görə 3D döndürmə
//       }}
//     >
//       {/* SVG kodlarınızı burada saxlayın */}
//       <svg style={{ ["--i" as any]: 0, ["--j" as any]: 0 }}>
//         <g id="out1">
//           <path
//             d="M72 172C72 116.772 116.772 72 172 72C227.228 72 272 116.772 272 172C272 227.228 227.228 272 172 272C116.772 272 72 227.228 72 172ZM197.322 172C197.322 158.015 185.985 146.678 172 146.678C158.015 146.678 146.678 158.015 146.678 172C146.678 185.985 158.015 197.322 172 197.322C185.985 197.322 197.322 185.985 197.322 172Z"
//           ></path>
//           <path
//             d="M72 172C72 116.772 116.772 72 172 72C227.228 72 272 116.772 272 172C272 227.228 227.228 272 172 272C116.772 272 72 227.228 72 172ZM197.322 172C197.322 158.015 185.985 146.678 172 146.678C158.015 146.678 146.678 158.015 146.678 172C146.678 185.985 158.015 197.322 172 197.322C185.985 197.322 197.322 185.985 197.322 172Z"
//             stroke="#00FFFF"
//             strokeWidth="2"
//             strokeMiterlimit="16"
//             mask="url(#path-1-inside-1_111_3212)"
//           ></path>
//         </g>
//       </svg>

//       {/* Digər SVG-lər və animasiyalar */}
//     </div>
//   );
// };

// export default ThreeDAnimation;
