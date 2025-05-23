export default function Contact() {
    return (
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="flex flex-col gap-8 max-w-screen justify-start sm:px-6"
      >
        <h2 className="text-4xl font-bold">Contact</h2>
        {/* Hidden input for Netlify */}
        <input type="hidden" name="form-name" value="contact" />
        {/* Honeypot anti-bot field */}
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>

        {/* Name & Email side-by-side */}
        <div className="flex flex-col sm:flex-row gap-4 ">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="flex-1 p-3 rounded-2xl border-2 border-gray-50/20"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="flex-1 p-3 rounded-2xl border-2 border-gray-50/20"
            required
          />
        </div>

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          className="p-3 rounded-2xl border-2 border-gray-50/20"
          maxLength={500}
          required
          style={{ resize: "none" }} // Prevent resizing
        ></textarea>

        {/* Submit */}
        <button
          type="submit"
          className="self-start p-3 border-2 border-gray-50/20 bg-black text-white px-6 py-2 rounded-2xl transition-colors duration-200 hover:bg-gray-800"
        >
          Send
        </button>
      </form>
    );
}
