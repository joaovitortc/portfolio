import clsx from 'clsx';

export default function ExpandArrowLink({ href, className, content }: 
    { href: string; className: string; content?: string}) {
  return (
    <div className="flex w-max my-work-button-container cursor-pointer mt-8">
      <a href={href} target="_blank" rel="noreferrer" className={clsx('my-work-button text-2xl text-white font-semibold relative', className)}>
        {content || 'Learn More'}
      </a>
      <span className="flex items-center h-6 mt-auto transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className=" overflow-hidden" width={18} height={18} fill="none" viewBox="0 0 18 24">
          <path stroke="currentColor" className="translate-x-full my-work-button-arrow text-white transition-all duration-200" d="M4 11.25a.75.75 0 000 1.5v-1.5zm0 1.5h16v-1.5H4v1.5z" strokeWidth="1.5"></path>
          <path stroke="currentColor" className="text-white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 6l6 6-6 6"></path>
        </svg>
      </span>
    </div>
  );
}