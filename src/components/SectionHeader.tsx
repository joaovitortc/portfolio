
import clsx from 'clsx';

export default function SectionHeader({ icon, className, title, description }: { icon: React.ReactNode; className?: string; title: string; description: React.ReactNode }) {
  return (
    <div className={clsx('flex flex-col gap-6 mt-12 text-white text-center items-center md:items-start md:text-left', className)}>
      <div className="flex gap-6">
        <div>{icon}</div>
        <div><h2 className="text-xl md:text-2xl leading-6">{title}</h2></div>
      </div>
      <div className="w-full text-5xl">
          {description}
      </div>
    </div>
  );
}
