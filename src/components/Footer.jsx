export default function Footer() {
  return (
    <footer className="mt-16 border-t border-charcoal/10 bg-charcoal">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-cream/60">
        <p>© {new Date().getFullYear()} KhelGhar. Built for the React course project.</p>
      </div>
    </footer>
  );
}
