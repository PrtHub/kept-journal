import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#242830] py-8">
      <div className="max-w-270 mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-meta text-[#6b7178]">
        <div>
          <span>© Kept</span>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/privacy"
            className="hover:text-[#9aa0a6] transition-colors duration-220"
          >
            Privacy
          </Link>
          <span>·</span>
          <Link
            href="/terms"
            className="hover:text-[#9aa0a6] transition-colors duration-220"
          >
            Terms
          </Link>
          <span>·</span>
          <Link
            href="/support"
            className="hover:text-[#9aa0a6] transition-colors duration-220"
          >
            Support
          </Link>
        </div>
      </div>
    </footer>
  );
}
