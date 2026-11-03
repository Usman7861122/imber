import { useState } from 'react';

type Props = { endpoint?: string; to: string };
type State = 'idle' | 'sending' | 'sent' | 'error';

const field =
  'peer w-full border-0 border-b border-ink/30 bg-transparent px-0 pb-2 pt-6 text-[16px] text-ink outline-none transition-colors placeholder-transparent focus:border-gold focus:ring-0';
const label =
  'pointer-events-none absolute left-0 top-1 text-[11px] font-medium uppercase tracking-[0.2em] text-ink/55 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-[13px] peer-placeholder-shown:tracking-[0.12em] peer-focus:top-1 peer-focus:text-[11px] peer-focus:tracking-[0.2em] peer-focus:text-gold';

export default function ContactForm({ endpoint, to }: Props) {
  const [state, setState] = useState<State>('idle');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get('website')) return; // honeypot
    const v = (k: string) => String(data.get(k) ?? '').trim();

    if (!endpoint) {
      const body = `${v('message')}\n\n— ${v('name')}\n${v('email')}\n${v('phone')}`;
      window.location.href = `mailto:${to}?subject=${encodeURIComponent(v('subject') || 'Website enquiry')}&body=${encodeURIComponent(body)}`;
      setState('sent');
      return;
    }
    setState('sending');
    try {
      const res = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setState('sent');
    } catch {
      setState('error');
    }
  };

  if (state === 'sent') {
    return (
      <div role="status" className="border border-gold/50 bg-white/70 p-8 backdrop-blur">
        <p className="font-display text-3xl text-ink">Thank you.</p>
        <p className="mt-3 text-[16px] leading-relaxed text-ink/75">
          {endpoint ? 'Your message is on its way. Our team will reply soon.' : 'Your email app should now be open. Press send there and our team will reply soon.'}
        </p>
        <button type="button" onClick={() => setState('idle')} className="mt-6 inline-flex items-center justify-center border border-gold px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.24em] text-ink transition-colors hover:bg-gold hover:text-black">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-x-8 gap-y-3 sm:grid-cols-2" noValidate={false}>
      <div className="relative">
        <input id="cf-name" name="name" required autoComplete="name" placeholder="Name" className={field} />
        <label htmlFor="cf-name" className={label}>Name</label>
      </div>
      <div className="relative">
        <input id="cf-email" name="email" type="email" required autoComplete="email" placeholder="Email" className={field} />
        <label htmlFor="cf-email" className={label}>Email</label>
      </div>
      <div className="relative">
        <input id="cf-phone" name="phone" type="tel" autoComplete="tel" placeholder="Phone" className={field} />
        <label htmlFor="cf-phone" className={label}>Phone</label>
      </div>
      <div className="relative">
        <input id="cf-subject" name="subject" placeholder="Subject" className={field} />
        <label htmlFor="cf-subject" className={label}>Subject</label>
      </div>
      <div className="relative sm:col-span-2">
        <textarea id="cf-message" name="message" required rows={4} placeholder="Message" className={`${field} resize-none`} />
        <label htmlFor="cf-message" className={label}>How can we help?</label>
      </div>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="mt-4 flex flex-wrap items-center gap-5 sm:col-span-2">
        <button
          type="submit"
          disabled={state === 'sending'}
          className="inline-flex items-center justify-center gap-3 bg-black px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.26em] text-gold transition-colors hover:bg-gold hover:text-black disabled:opacity-60"
        >
          {state === 'sending' ? 'Sending…' : 'Send message'}
          <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </button>
        {state === 'error' && (
          <p role="alert" className="text-[14px] text-ink/80">
            We could not send that. Please call us or email <a className="underline decoration-gold decoration-2 underline-offset-4" href={`mailto:${to}`}>{to}</a>.
          </p>
        )}
      </div>
    </form>
  );
}
