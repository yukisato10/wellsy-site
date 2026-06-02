const weights = [69.2, 68.8, 68.5, 68.0, 67.8, 68.2, 68.5];
const maxW = Math.max(...weights);
const minW = 66;

export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[260px] select-none">
      {/* Phone frame */}
      <div className="relative bg-gray-900 rounded-[2.8rem] p-[10px] shadow-[0_40px_80px_-10px_rgba(0,0,0,0.35)]">
        {/* Dynamic island */}
        <div className="absolute top-[18px] left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-full z-20" />

        {/* Screen */}
        <div className="bg-gray-50 rounded-[2.3rem] overflow-hidden" style={{ height: 520 }}>
          {/* Status bar */}
          <div className="bg-green-600 px-5 pb-3 pt-8">
            <div className="flex items-center justify-between">
              <span className="text-white font-bold text-base tracking-tight">Wellsy</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-2 border border-white/80 rounded-sm relative">
                  <div className="absolute inset-[2px] right-auto w-[55%] bg-white/80 rounded-[1px]" />
                </div>
              </div>
            </div>
          </div>

          {/* App content */}
          <div className="px-3 pt-3 pb-2 space-y-2 overflow-hidden bg-gray-50" style={{ height: 440 }}>
            {/* Today summary */}
            <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-50">
              <p className="text-[10px] font-semibold text-gray-400 mb-2 uppercase tracking-wide">今日の記録</p>
              <div className="grid grid-cols-3 gap-1">
                <div className="text-center bg-green-50 rounded-xl py-2">
                  <p className="text-green-600 text-base font-bold leading-none">2,100</p>
                  <p className="text-[9px] text-gray-400 mt-0.5">kcal</p>
                </div>
                <div className="text-center bg-blue-50 rounded-xl py-2">
                  <p className="text-blue-500 text-base font-bold leading-none">68.5</p>
                  <p className="text-[9px] text-gray-400 mt-0.5">kg</p>
                </div>
                <div className="text-center bg-purple-50 rounded-xl py-2">
                  <p className="text-purple-500 text-base font-bold leading-none">7.5</p>
                  <p className="text-[9px] text-gray-400 mt-0.5">時間</p>
                </div>
              </div>
            </div>

            {/* AI meal card */}
            <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-50">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[10px] font-semibold text-gray-700">AI食事解析</p>
                <span className="text-[9px] text-green-600 font-medium bg-green-50 px-1.5 py-0.5 rounded-full">完了</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-xl">🥗</div>
                <div>
                  <p className="text-[11px] font-semibold text-gray-800">ランチセット</p>
                  <p className="text-[9px] text-gray-400 mt-0.5">620 kcal · P 28g · F 14g · C 82g</p>
                </div>
              </div>
            </div>

            {/* Weight chart */}
            <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-50">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[10px] font-semibold text-gray-700">体重の推移</p>
                <p className="text-[10px] text-green-600 font-medium">−0.7 kg 今週</p>
              </div>
              <div className="flex items-end gap-1" style={{ height: 40 }}>
                {weights.map((w, i) => {
                  const h = Math.round(((w - minW) / (maxW - minW)) * 100);
                  return (
                    <div
                      key={i}
                      className={`flex-1 rounded-sm transition-all ${i === weights.length - 1 ? "bg-green-500" : "bg-green-200"}`}
                      style={{ height: `${h}%` }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Group card */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-400 rounded-2xl p-3">
              <p className="text-[10px] text-white/80 font-medium mb-1">グループ</p>
              <p className="text-[11px] text-white font-semibold">田中さんが目標達成！🎉</p>
              <div className="flex -space-x-1.5 mt-2">
                {["🟢", "🔵", "🟣", "🟡"].map((c, i) => (
                  <div key={i} className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center text-[8px] border border-white/50">
                    {c}
                  </div>
                ))}
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[8px] text-white border border-white/50">+2</div>
              </div>
            </div>
          </div>
        </div>

        {/* Home indicator */}
        <div className="h-5 flex items-center justify-center">
          <div className="w-20 h-[3px] bg-gray-600 rounded-full" />
        </div>
      </div>

      {/* Floating badge: achievement */}
      <div className="absolute -right-14 top-20 bg-white rounded-2xl shadow-xl p-2.5 border border-gray-100 hidden sm:block">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-yellow-100 rounded-full flex items-center justify-center text-sm">🎯</div>
          <div>
            <p className="text-[11px] font-bold text-gray-800">目標達成！</p>
            <p className="text-[9px] text-gray-400">今週の食事記録</p>
          </div>
        </div>
      </div>

      {/* Floating badge: sleep */}
      <div className="absolute -left-14 bottom-28 bg-white rounded-2xl shadow-xl p-2.5 border border-gray-100 hidden sm:block">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-purple-100 rounded-full flex items-center justify-center text-sm">😴</div>
          <div>
            <p className="text-[11px] font-bold text-gray-800">睡眠スコア 88</p>
            <p className="text-[9px] text-gray-400">昨日より +12</p>
          </div>
        </div>
      </div>
    </div>
  );
}
