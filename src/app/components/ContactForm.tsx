"use client";
export default function ContactForm() {
  return (
    <form className="flex flex-col gap-4">
      <input
        className="input input-bordered bg-transparent"
        type="text"
        placeholder="Name"
      />
      <input
        className="input input-bordered bg-transparent"
        type="email"
        placeholder="Email"
      />
      <input
        className="input input-bordered bg-transparent"
        type="text"
        placeholder="Subject"
      />
      <textarea className="textarea input-bordered bg-transparent textarea-lg " />
      <br />
      <button className="btn btn-primary bg-transparent text-primary rounded-full ">
        Let us Talk
      </button>
    </form>
  );
}
