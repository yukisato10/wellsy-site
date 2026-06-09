import type { LegalContent, LegalSection, Subsection } from "@/lib/content";

function renderSubsection(sub: Subsection, idx: number) {
  return (
    <div key={idx} className="mt-4">
      {sub.heading && (
        <h3 className="text-base font-semibold text-gray-800 mb-2">{sub.heading}</h3>
      )}
      {sub.body && <p className="text-sm text-gray-600 leading-relaxed mb-2">{sub.body}</p>}
      {sub.bullets && sub.bullets.length > 0 && (
        <ul className="list-disc pl-5 space-y-1">
          {sub.bullets.map((b, i) => (
            <li key={i} className="text-sm text-gray-600 leading-relaxed">{b}</li>
          ))}
        </ul>
      )}
      {sub.numbered && sub.numbered.length > 0 && (
        <ol className="list-decimal pl-5 space-y-1">
          {sub.numbered.map((n, i) => (
            <li key={i} className="text-sm text-gray-600 leading-relaxed">{n}</li>
          ))}
        </ol>
      )}
    </div>
  );
}

function renderSection(section: LegalSection, idx: number) {
  return (
    <section key={idx} className="mt-8 first:mt-0">
      {section.heading && (
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-2 mb-4">
          {section.heading}
        </h2>
      )}

      {section.warning && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4 flex gap-2">
          <span className="text-amber-500 flex-shrink-0 mt-0.5">⚠</span>
          <p className="text-sm text-amber-800 leading-relaxed">{section.warning}</p>
        </div>
      )}

      {section.body && (
        <p className="text-sm text-gray-600 leading-relaxed mb-3 whitespace-pre-line">
          {section.body}
        </p>
      )}

      {section.bullets && section.bullets.length > 0 && (
        <ul className="list-disc pl-5 space-y-1.5 mb-3">
          {section.bullets.map((b, i) => (
            <li key={i} className="text-sm text-gray-600 leading-relaxed">{b}</li>
          ))}
        </ul>
      )}

      {section.numbered && section.numbered.length > 0 && (
        <ol className="list-decimal pl-5 space-y-1.5 mb-3">
          {section.numbered.map((n, i) => (
            <li key={i} className="text-sm text-gray-600 leading-relaxed">{n}</li>
          ))}
        </ol>
      )}

      {section.subsections && section.subsections.length > 0 && (
        <div className="pl-0 space-y-2">
          {section.subsections.map((sub, i) => renderSubsection(sub, i))}
        </div>
      )}

      {section.table && (
        <div className="overflow-x-auto mt-3 mb-3">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                {section.table.headers.map((h, i) => (
                  <th
                    key={i}
                    className="bg-gray-50 font-semibold text-gray-700 text-left px-3 py-2 border border-gray-200"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? "" : "bg-gray-50/50"}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-3 py-2 border border-gray-200 text-gray-600 align-top text-sm">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {section.note && (
        <p className="text-xs text-gray-400 leading-relaxed mt-3 border-l-2 border-gray-200 pl-3">
          {section.note}
        </p>
      )}
    </section>
  );
}

export default function JsonLegalPage({ content }: { content: LegalContent }) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      {/* Page header */}
      <div className="mb-10 pb-6 border-b border-gray-100">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{content.title}</h1>
        <p className="mt-2 text-sm text-gray-400">{content.lastUpdated}</p>
      </div>

      {/* Intro */}
      {content.intro && (
        <p className="text-sm text-gray-600 leading-relaxed mb-8 whitespace-pre-line">
          {content.intro}
        </p>
      )}

      {/* Sections */}
      <div className="space-y-2">
        {content.sections.map((section, i) => renderSection(section, i))}
      </div>
    </div>
  );
}
