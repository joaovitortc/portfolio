import React, { useState, FormEvent, useId} from 'react';
import toast from 'react-hot-toast';
import SectionHeader from './SectionHeader';
import Envelope from '../icons/envelope';
import ArrowIcon from '../icons/ArrowIcon';

interface FormData {
  person_name: string;
  email: string;
  company: string;
  message: string;
}

function TextInput({ label, value, onChange }: { label: string, value: string, onChange: (value: string) => void }) {
    let id = useId();
  
    return (
      <div className="group relative z-0 transition-all focus-within:z-10">
        <input
          type="text"
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder=" "
          className="peer block w-full border border-gray-500/20 bg-transparent px-6 pb-4 pt-12 text-base/6 text-white ring-2 ring-transparent transition focus:outline-none focus:ring-blue-400 group-first:rounded-t-2xl group-last:rounded-b-2xl"
        />
        <label
          htmlFor={id}
          className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-white transition-all duration-200 peer-focus:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-90 peer-focus:scale-90 peer-focus:font-semibold peer-focus:text-blue-400 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:text-blue-400"
        >
          {label}
        </label>
      </div>
    );
  }

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    person_name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (key: keyof FormData, value: string) => {
    setFormData(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://contact-ltrd.onrender.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Postmark-Server-Token': process.env.POSTMARK_SERVER_TOKEN!,
        },
        body: JSON.stringify({
          From: process.env.EMAIL_FROM!,
          To: process.env.EMAIL_TO!,
          Subject: 'Portfolio Contact Form',
          HtmlBody: `
            <h1>Portfolio Contact Form</h1>
            <p><strong>Name:</strong> ${formData.person_name}</p>
            <p><strong>Company:</strong> ${formData.company}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
          `,
          ReplyTo: formData.email,
        }),
      });

      if (response.ok) {
        console.log('Email sent!');
        toast.success('Email sent!');
        setFormData({
          person_name: '',
          email: '',
          company: '',
          message: '',
        });
      } else {
        toast.error('Something went wrong, please try again later.');
      }
    } catch (error) {
      toast.error('Something went wrong, please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="relative z-10 ml-16 mr-16 pt-4">
    <SectionHeader
      icon={<Envelope height="28" width="28" />}
      title="Contact me"
      description={
        <div>
          Get in <span className="text-blue-400">contact </span> 
          and let&apos;s <span className="text-blue-400">work together</span>
        </div>
      }
    />
      <form className="py-10" method="POST" onSubmit={handleSubmit}>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-gray-900/20">
        <TextInput
        label="Your Name"
        value={formData.person_name}
        onChange={(value) => handleChange('person_name', value)}
      />
      <TextInput
        label="Your Email"
        value={formData.email}
        onChange={(value) => handleChange('email', value)}
      />
      <TextInput
        label="Company"
        value={formData.company}
        onChange={(value) => handleChange('company', value)}
      />
      <TextInput
        label="Message"
        value={formData.message}
        onChange={(value) => handleChange('message', value)}
      />
        </div>
        <div className="flex justify-end">
          <button disabled={loading} type="submit" className=" mt-2 ml-3 inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition button-hover-shadow rounded-full bg-zinc-100 py-1 px-3 text-zinc-900 hover:bg-zinc-200 flex items-center gap-x-2" 
        >
        Send
        <ArrowIcon className='mt-0.5 h-5 w-5'/>
        </button>
        </div>
      </form>
    </div>
  );
}
