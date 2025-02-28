interface SectionHeaderProps {
  title: string
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="w-5 h-5 flex items-center justify-center bg-black rounded-full border border-gray-700">
        <span className="transform rotate-90">›</span>
      </div>
    </div>
  )
}

