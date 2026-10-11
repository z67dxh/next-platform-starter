'use client';

import { useEffect, useRef, useState } from 'react';

/* Fades + lifts its children in the first time they scroll into view. */
export function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <Tag
            ref={ref}
            className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </Tag>
    );
}

/* Drifting hearts & petals behind the hero. Positions are generated after mount to avoid hydration mismatches. */
export function FloatingHearts({ count = 18 }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(
            Array.from({ length: count }, (_, i) => ({
                id: i,
                left: Math.random() * 100,
                size: 10 + Math.random() * 22,
                duration: 9 + Math.random() * 10,
                delay: Math.random() * -18,
                glyph: i % 3 === 0 ? '✿' : '♥',
                opacity: 0.25 + Math.random() * 0.45
            }))
        );
    }, [count]);

    return (
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            {items.map((h) => (
                <span
                    key={h.id}
                    className="floating-heart"
                    style={{
                        left: `${h.left}%`,
                        fontSize: `${h.size}px`,
                        animationDuration: `${h.duration}s`,
                        animationDelay: `${h.delay}s`,
                        opacity: h.opacity
                    }}
                >
                    {h.glyph}
                </span>
            ))}
        </div>
    );
}

/* Sealed envelope that opens into the aged letter. */
export function Letter({ letter, herName, yourName }) {
    const [opened, setOpened] = useState(false);

    return (
        <div className="relative mx-auto w-full max-w-2xl">
            {!opened && (
                <button
                    type="button"
                    onClick={() => setOpened(true)}
                    className="envelope group mx-auto block"
                    aria-label="Open the letter"
                >
                    <span className="envelope-flap" />
                    <span className="envelope-body">
                        <span className="font-script text-3xl text-ink/80 sm:text-4xl">For {herName}</span>
                    </span>
                    <span className="wax-seal">
                        <span>♥</span>
                    </span>
                    <span className="mt-8 block text-center font-typewriter text-sm tracking-widest text-cream/70 uppercase transition group-hover:text-cream">
                        tap the seal to open
                    </span>
                </button>
            )}

            {opened && (
                <article className="letter-unfold relative">
                    <svg className="absolute h-0 w-0" aria-hidden>
                        <filter id="worn-edges">
                            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" seed="7" />
                            <feDisplacementMap in="SourceGraphic" scale="14" />
                        </filter>
                    </svg>
                    <div className="paper" aria-hidden />
                    <div className="relative px-8 py-12 sm:px-16 sm:py-16 text-ink">
                        <p className="mb-8 text-right font-typewriter text-sm opacity-70">{letter.date}</p>
                        <p className="mb-6 font-script text-4xl sm:text-5xl">{letter.greeting}</p>
                        <div className="space-y-5 font-letter text-lg leading-relaxed sm:text-xl">
                            {letter.paragraphs.map((p, i) => (
                                <p key={i} className="first-letter:text-2xl">
                                    {p}
                                </p>
                            ))}
                        </div>
                        <p className="mt-10 font-letter text-lg italic sm:text-xl">{letter.closing}</p>
                        <p className="mt-2 font-script text-4xl sm:text-5xl">{yourName}</p>
                        <span className="wax-seal wax-seal-small" aria-hidden>
                            <span>♥</span>
                        </span>
                    </div>
                </article>
            )}
        </div>
    );
}

/* Polaroid-style photo with a placeholder if the image hasn't been added yet. */
export function Polaroid({ src, caption, index }) {
    const [failed, setFailed] = useState(!src);
    const imgRef = useRef(null);
    const tilt = [-4, 3, -2, 5][index % 4];

    // Catch images that failed to load before hydration attached onError
    useEffect(() => {
        const img = imgRef.current;
        if (img && img.complete && img.naturalWidth === 0) setFailed(true);
    }, []);

    return (
        <figure className="polaroid" style={{ '--tilt': `${tilt}deg` }}>
            <span className="tape" aria-hidden />
            <div className="aspect-[4/5] w-full overflow-hidden bg-sepia-dark/20">
                {failed ? (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-ink/50">
                        <span className="text-4xl">♥</span>
                        <span className="font-typewriter text-xs uppercase tracking-widest">photo {index + 1}</span>
                    </div>
                ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        ref={imgRef}
                        src={src}
                        alt={caption}
                        className="h-full w-full object-cover sepia-[.25]"
                        onError={() => setFailed(true)}
                        loading="lazy"
                    />
                )}
            </div>
            <figcaption className="pt-4 text-center font-script text-2xl text-ink sm:text-3xl">{caption}</figcaption>
        </figure>
    );
}

/* Video message, framed like an old film reel, with a placeholder until the file exists. */
export function VideoMessage({ src, poster }) {
    const [failed, setFailed] = useState(!src);
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current?.error) setFailed(true);
    }, []);

    return (
        <div className="film-frame">
            {failed ? (
                <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 bg-ink text-cream/70">
                    <span className="text-5xl">▶</span>
                    <span className="font-typewriter text-xs uppercase tracking-widest">your video goes here</span>
                </div>
            ) : (
                <video
                    ref={videoRef}
                    className="aspect-video w-full bg-ink"
                    src={src}
                    poster={poster || undefined}
                    controls
                    playsInline
                    preload="metadata"
                    onError={() => setFailed(true)}
                />
            )}
        </div>
    );
}
