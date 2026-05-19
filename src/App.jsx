export default function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white p-8">
      <h1 className="text-5xl font-bold text-green-400 mb-6">Minecraft Crafting Tree</h1>
      <p className="text-lg text-zinc-300 mb-8">Interactive crafting graph deployed with GitHub Pages.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {['Crafting Table','Furnace','Chest','Torch','Pickaxe','Sword','Shield','Enchanting Table'].map((item)=>(
          <div key={item} className="rounded-xl border border-green-500/40 bg-zinc-800 p-4 hover:scale-105 transition">
            <div className="text-2xl mb-2">⛏️</div>
            <div className="font-bold">{item}</div>
          </div>
        ))}
      </div>
    </div>
  )
}