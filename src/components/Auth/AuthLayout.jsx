export default function AuthLayout({ title, children, desc }) {
  return (
    <div className="w-full min-h-screen px-4 py-12 flex flex-col">
      
      {/* Top Section */}
      <div>
        <h1 className="text-[32px] font-bold leading-tight">{title}</h1>
        <p className="text-[16px] leading-tight font-light text-var(--label-color)">{desc}</p>
      </div>

      {/* Children centered vertically & horizontally */}
      <div className="pt-12">
        
          {children}
       
      </div>

    </div>
  );
}
