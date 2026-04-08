import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' fill='%23814882'%3E%3Cpath d='M32 12c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm16 8c-3.3 0-6 2.7-6 6v2c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2v-2c0-7.7-8-6-10-6H48zM16 36c-3.3 0-10 1.7-10 6v2c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2v-2c0-4.3-6.7-6-10-6H16z'/%3E%3C/svg%3E",
    text: ['Talk to our Interior Designer', '& Get an Estimate'],
  },
  {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' fill='%23814882'%3E%3Cpath d='M50 8H14c-2.2 0-4 1.8-4 4v40c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4V12c0-2.2-1.8-4-4-4zM28 44l-8-8 2.8-2.8L28 38.4l13.2-13.2L44 28 28 44z'/%3E%3C/svg%3E",
    text: ['Detailed Drawing', 'and Approval'],
  },
  {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' fill='%23814882'%3E%3Cpath d='M52 20H42V12c0-2.2-1.8-4-4-4H26c-2.2 0-4 1.8-4 4v8H12c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V24c0-2.2-1.8-4-4-4zM26 12h12v8H26V12zm10 28h-4v4c0 1.1-.9 2-2 2s-2-.9-2-2v-4h-4c-1.1 0-2-.9-2-2s.9-2 2-2h4v-4c0-1.1.9-2 2-2s2 .9 2 2v4h4c1.1 0 2 .9 2 2s-.9 2-2 2z'/%3E%3C/svg%3E",
    text: ['Production at Own', 'Factories'],
  },
  {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' fill='%23814882'%3E%3Cpath d='M56 28h-4V16c0-2.2-1.8-4-4-4H8c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h2c0 4.4 3.6 8 8 8s8-3.6 8-8h12c0 4.4 3.6 8 8 8s8-3.6 8-8h2c2.2 0 4-1.8 4-4v-8l-4-4zM18 48c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm28 0c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6-12h-8V28h5.2l2.8 2.8V36z'/%3E%3C/svg%3E",
    text: ['Material Delivery', '& Execution'],
  },
  {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' fill='%23814882'%3E%3Cpath d='M42 18c-2 0-3.8.8-5.2 2H27.2c-1.4-1.2-3.2-2-5.2-2-4.4 0-8 3.6-8 8v2c0 5 3.2 9.2 7.6 10.8L32 46l10.4-7.2C46.8 37.2 50 33 50 28v-2c0-4.4-3.6-8-8-8z'/%3E%3C/svg%3E",
    text: ['On Time Project', 'Hand Over'],
  },
];

const ProjCompletion = () => {
  const sectionRef = useRef(null);
  const stepsFlxRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const stepEls = section.querySelectorAll('.Step');
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1.5,
      paused: true,
    });

    stepEls.forEach((stepEl, i) => {
      const round = stepEl.querySelector('.Round');
      const icon = stepEl.querySelector('.Round img');
      const progrsLine = stepEl.querySelector('.Progrs .line');
      const progrsArrow = stepEl.querySelector('.Progrs .Arrow');

      // Fill circle purple
      tl.to(round, {
        backgroundColor: '#814882',
        borderColor: '#814882',
        duration: 0.4,
        ease: 'power2.inOut',
      }, i * 0.7);

      // Invert icon to white
      tl.to(icon, {
        filter: 'invert(1) brightness(22)',
        duration: 0.3,
        ease: 'power2.inOut',
      }, i * 0.7);

      // Scale bounce on circle
      tl.fromTo(round, { scale: 1 }, {
        scale: 1.08,
        duration: 0.2,
        ease: 'power2.out',
        yoyo: true,
        repeat: 1,
      }, i * 0.7);

      // Animate progress line width
      if (progrsLine) {
        tl.to(progrsLine, {
          width: '100%',
          duration: 0.5,
          ease: 'power1.inOut',
        }, i * 0.7 + 0.3);
      }

      // Animate arrow color
      if (progrsArrow) {
        tl.to(progrsArrow, {
          borderColor: '#814882',
          duration: 0.3,
          ease: 'power1.inOut',
        }, i * 0.7 + 0.5);
      }
    });

    // At the end, hold then reset all
    const totalDur = tl.duration();
    tl.to({}, { duration: 1.5 }); // hold pause

    // Reset everything
    stepEls.forEach((stepEl) => {
      const round = stepEl.querySelector('.Round');
      const icon = stepEl.querySelector('.Round img');
      const progrsLine = stepEl.querySelector('.Progrs .line');
      const progrsArrow = stepEl.querySelector('.Progrs .Arrow');

      tl.to(round, {
        backgroundColor: '#fff',
        borderColor: '#707070',
        scale: 1,
        duration: 0.3,
        ease: 'power2.inOut',
      }, totalDur + 1.5);

      tl.to(icon, {
        filter: 'none',
        duration: 0.3,
        ease: 'power2.inOut',
      }, totalDur + 1.5);

      if (progrsLine) {
        tl.to(progrsLine, {
          width: '0%',
          duration: 0.3,
          ease: 'power2.inOut',
        }, totalDur + 1.5);
      }

      if (progrsArrow) {
        tl.to(progrsArrow, {
          borderColor: '#000',
          duration: 0.3,
          ease: 'power2.inOut',
        }, totalDur + 1.5);
      }
    });

    // Add a small gap before repeat
    tl.to({}, { duration: 0.8 });

    tlRef.current = tl;

    // Trigger on scroll
    ScrollTrigger.create({
      trigger: section,
      start: 'top 75%',
      onEnter: () => tl.play(),
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section id="ProjCompletion" ref={sectionRef}>
      {/* Section heading */}
      <div
        className="MainHead"
        style={{ width: '100%', position: 'relative', marginBottom: 25, textAlign: 'center' }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            margin: 'auto',
            top: '50%',
            transform: 'translateY(-50%)',
            height: 1,
            width: '100%',
            background: 'rgba(112,112,112,0.2)',
            zIndex: 0,
          }}
        ></div>
        <h1
          className="Head"
          style={{
            fontWeight: 400,
            color: '#000',
            textTransform: 'uppercase',
            width: 'fit-content',
            padding: '0 20px',
            background: '#fff',
            position: 'relative',
            zIndex: 1,
            margin: 'auto',
            lineHeight: 'normal',
            fontFamily: "'Mulish', sans-serif",
          }}
        >
          PROJECT COMPLETION IN{' '}
          <span style={{ color: '#814882', fontWeight: 600 }}>40 WORKING DAYS*</span>
        </h1>
      </div>

      <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
        <div className="StepsFlx" ref={stepsFlxRef}>
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            return (
              <div key={i} className="Step">
                <div className="Round">
                  <div className="Icon">
                    <img src={step.icon} alt="" width="75" height="71" />
                  </div>
                </div>
                <div className="Txt">
                  {step.text[0]}
                  <br />
                  {step.text[1]}
                </div>
                {!isLast && (
                  <div className="Progrs">
                    <div className="line"></div>
                    <div className="Arrow"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjCompletion;
