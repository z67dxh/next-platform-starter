import { content } from '../content';
import { FloatingHearts, Letter, Polaroid, Reveal, VideoMessage } from '../components/birthday';

function SectionTitle({ kicker, children }) {
    return (
        <Reveal className="mb-12 text-center sm:mb-16">
            <p className="mb-3 font-typewriter text-xs uppercase tracking-[0.35em] text-rose">{kicker}</p>
            <h2 className="font-display text-4xl text-cream italic sm:text-6xl">{children}</h2>
            <div className="divider mx-auto mt-6" aria-hidden>
                <span>❦</span>
            </div>
        </Reveal>
    );
}

export default function Page() {
    const { herName, yourName, hero, letter, photos, reasons, video, finale } = content;

    return (
        <main className="overflow-x-hidden">
            {/* ── Hero ─────────────────────────────────────────── */}
            <section className="hero relative flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
                <FloatingHearts />
                <div className="relative z-10 max-w-3xl">
                    <p className="hero-in mb-6 font-typewriter text-xs uppercase tracking-[0.4em] text-rose sm:text-sm">
                        {hero.eyebrow}
                    </p>
                    <h1 className="hero-in hero-in-2 font-display text-6xl leading-[0.95] text-cream sm:text-8xl md:text-9xl">
                        Happy
                        <br />
                        <span className="italic">Birthday</span>
                    </h1>
                    <p className="hero-in hero-in-3 mt-4 font-script text-5xl text-gold sm:text-7xl">{herName}</p>
                    <p className="hero-in hero-in-4 mx-auto mt-10 max-w-xl font-letter text-lg leading-relaxed text-cream/80 sm:text-xl">
                        {hero.message}
                    </p>
                </div>
                <a href="#letter" className="scroll-cue absolute bottom-10 z-10" aria-label="Scroll to the letter">
                    <span className="font-typewriter text-[10px] uppercase tracking-[0.35em]">scroll</span>
                    <span className="scroll-cue-line" />
                </a>
            </section>

            {/* ── Letter ───────────────────────────────────────── */}
            <section id="letter" className="relative px-6 py-24 sm:py-32">
                <SectionTitle kicker="Chapter one">A letter for you</SectionTitle>
                <Reveal>
                    <Letter letter={letter} herName={herName} yourName={yourName} />
                </Reveal>
            </section>

            {/* ── Photos ───────────────────────────────────────── */}
            <section className="relative px-6 py-24 sm:py-32">
                <SectionTitle kicker="Chapter two">Us, in pictures</SectionTitle>
                <div className="mx-auto flex max-w-5xl flex-col gap-24 sm:gap-32">
                    {photos.map((photo, i) => (
                        <Reveal
                            key={i}
                            className={`flex flex-col items-center gap-10 md:flex-row md:gap-16 ${
                                i % 2 === 1 ? 'md:flex-row-reverse' : ''
                            }`}
                        >
                            <div className="w-full max-w-xs shrink-0 sm:max-w-sm">
                                <Polaroid src={photo.src} caption={photo.caption} index={i} />
                            </div>
                            <div className={`max-w-md text-center ${i % 2 === 1 ? 'md:text-right' : 'md:text-left'}`}>
                                <p className="mb-3 font-typewriter text-xs uppercase tracking-[0.3em] text-rose">
                                    No. {String(i + 1).padStart(2, '0')}
                                </p>
                                <p className="font-display text-2xl leading-snug text-cream italic sm:text-3xl">
                                    “{photo.message}”
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* ── Reasons ──────────────────────────────────────── */}
            <section className="relative px-6 py-24 sm:py-32">
                <SectionTitle kicker="Chapter three">Reasons I love you</SectionTitle>
                <ol className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {reasons.map((reason, i) => (
                        <Reveal as="li" key={i} delay={(i % 3) * 120} className="reason-card">
                            <span className="reason-number">{i + 1}</span>
                            <p className="font-letter text-lg leading-relaxed text-ink">{reason}</p>
                        </Reveal>
                    ))}
                </ol>
            </section>

            {/* ── Video ────────────────────────────────────────── */}
            <section className="relative px-6 py-24 sm:py-32">
                <SectionTitle kicker="Chapter four">A message from me</SectionTitle>
                <Reveal className="mx-auto max-w-4xl">
                    <p className="mx-auto mb-10 max-w-xl text-center font-letter text-lg text-cream/80 sm:text-xl">
                        {video.intro}
                    </p>
                    <VideoMessage src={video.src} poster={video.poster} />
                </Reveal>
            </section>

            {/* ── Finale ───────────────────────────────────────── */}
            <footer className="px-6 pt-16 pb-24 text-center">
                <Reveal>
                    <p className="heartbeat mb-6 text-4xl text-rose">♥</p>
                    <p className="font-script text-4xl text-gold sm:text-6xl">{finale}</p>
                    <p className="mt-6 font-typewriter text-xs uppercase tracking-[0.35em] text-cream/50">
                        — {yourName}
                    </p>
                </Reveal>
            </footer>
        </main>
    );
}
