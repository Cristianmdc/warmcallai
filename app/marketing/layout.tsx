import MarketingNav from '../../components/MarketingNav';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <MarketingNav />
      <main>{children}</main>
    </div>
  );
} 