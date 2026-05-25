'use client';

export default function UIOverlays() {
  return (
    <>
      <div className="noise" />
      <div className="scanlines" />
      <div className="fixed inset-0 tech-grid pointer-events-none opacity-[0.05] z-0" />
      <div className="fixed inset-0 tech-grid-fine pointer-events-none opacity-[0.02] z-0" />
    </>
  );
}
