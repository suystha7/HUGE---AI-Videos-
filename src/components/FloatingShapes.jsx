export default function FloatingShapes() {
  return (
    <>
      <div className="pointer-events-none fixed top-20 left-10 w-40 h-40 bg-pink-400 rounded-full opacity-20 animate-floatSlow blur-3xl mix-blend-multiply"></div>

      <div className="pointer-events-none fixed bottom-32 right-20 w-20 h-20 bg-purple-400 rounded-md opacity-30 animate-floatMedium blur-xl mix-blend-multiply"></div>

      <div className="pointer-events-none fixed top-48 right-40 w-10 h-10 bg-indigo-500 rounded-full opacity-25 animate-floatFast blur-md mix-blend-multiply"></div>
    </>
  );
}
