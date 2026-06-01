interface LegalPageProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{title}</h1>
        <p className="mt-3 text-sm text-gray-400">最終更新日：{lastUpdated}</p>
      </div>
      <div className="prose-wellsy">{children}</div>
    </div>
  );
}
