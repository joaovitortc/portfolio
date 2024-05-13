import React from 'react';

function LinkedinIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"></path>
      </svg>
    );
  }
  
  function GitHubIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
        />
      </svg>
    );
  }

  function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9" />
      </svg>
    );
  }

  function Socials(){
    return(
    <div className="flex mt-3">
        <a href="https://www.linkedin.com/in/joaovitortc/" target="_blank" rel="noreferrer">
            <LinkedinIcon className="w-7 h-7 fill-current text-white" />
        </a>
        <a className="ml-3" href="https://www.github.com/joaovitortc" target="_blank" rel="noreferrer">
            <GitHubIcon className="w-7 h-7 fill-current text-white" />
        </a>
        <a className=" ml-3 inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition button-hover-shadow rounded-full bg-zinc-100 py-1 px-3 text-zinc-900 hover:bg-zinc-200 flex items-center gap-x-2" 
        href="#contact">
        Contact me 
        <ArrowIcon className='mt-0.5 h-5 w-5'/>
        </a>
    </div>
    )
  }

  export default Socials;