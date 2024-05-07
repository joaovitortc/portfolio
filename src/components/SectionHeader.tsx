
import clsx from 'clsx';

export default function SectionHeader({ icon, className, title, description }: { icon: React.ReactNode; className?: string; title: string; description: React.ReactNode }) {
  return (
    <div className={clsx('flex flex-col gap-6 pl-5 sm:pl-0 mt-12 text-white', className)}>
      <div className="flex gap-6">
        <div>{icon}</div>
        <div><h2 className="text-2xl leading-6">{title}</h2></div>
      </div>
      <div className="w-full text-5xl">
          {description}
      </div>
    </div>
  );
}
