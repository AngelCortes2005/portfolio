interface FooterProps {
  dict: any;
}

export default function Footer({ dict }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl flex justify-between items-center">
        <p className="font-serif text-sm text-muted-foreground italic">
          Angel Cortes — {currentYear}
        </p>
        <p className="font-mono text-xs text-subtle">
          Built with Next.js
        </p>
      </div>
    </footer>
  );
}
