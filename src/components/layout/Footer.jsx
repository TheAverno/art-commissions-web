export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-neutral-500">
        © {new Date().getFullYear()} AliceHan096. All rights reserved.
      </div>
    </footer>
  );
}
