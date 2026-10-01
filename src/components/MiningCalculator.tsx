import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Zap, Cpu, TrendingUp, DollarSign, RefreshCw, BarChart2, Info } from 'lucide-react';

export default function MiningCalculator() {
  // Inputs
  const [powerCapacity, setPowerCapacity] = useState<number>(50); // MW
  const [asicEfficiency, setAsicEfficiency] = useState<number>(22); // J/TH
  const [powerCost, setPowerCost] = useState<number>(0.035); // $/kWh
  const [btcPrice, setBtcPrice] = useState<number>(95000); // USD

  // Outputs
  const [hashrate, setHashrate] = useState<number>(0); // EH/s
  const [dailyPowerCost, setDailyPowerCost] = useState<number>(0); // USD
  const [dailyBtcMined, setDailyBtcMined] = useState<number>(0); // BTC
  const [dailyRevenue, setDailyRevenue] = useState<number>(0); // USD
  const [dailyProfit, setDailyProfit] = useState<number>(0); // USD

  // Constants
  const NETWORK_HASHRATE_EHS = 650; // Total Bitcoin network hashrate ≈ 650 EH/s
  const DAILY_BLOCK_REWARD = 450; // Total daily block rewards (3.125 * 144 blocks)

  useEffect(() => {
    // 1 MW = 1,000,000 Joules/second
    // Hashrate (TH/s) = Power (J/s) / Efficiency (J/TH)
    const powerJoulesSec = powerCapacity * 1000000;
    const hashrateThs = powerJoulesSec / asicEfficiency;
    const hashrateEhs = hashrateThs / 1000000; // 1 EH/s = 1,000,000 TH/s
    setHashrate(hashrateEhs);

    // Daily Power Cost = Power Capacity (kW) * 24 hours * Electricity Cost ($/kWh)
    const powerKw = powerCapacity * 1000;
    const cost = powerKw * 24 * powerCost;
    setDailyPowerCost(cost);

    // Daily BTC Mined = (Your Hashrate / Network Hashrate) * Daily Network Rewards
    const btcMined = (hashrateEhs / NETWORK_HASHRATE_EHS) * DAILY_BLOCK_REWARD;
    setDailyBtcMined(btcMined);

    // Daily Revenue = Daily BTC Mined * BTC Price
    const rev = btcMined * btcPrice;
    setDailyRevenue(rev);

    // Daily Profit = Daily Revenue - Daily Power Cost
    setDailyProfit(rev - cost);
  }, [powerCapacity, asicEfficiency, powerCost, btcPrice]);

  const resetCalculator = () => {
    setPowerCapacity(50);
    setAsicEfficiency(22);
    setPowerCost(0.035);
    setBtcPrice(95000);
  };

  return (
    <section id="calculator" className="py-24 bg-[#010402] relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono text-brand-green tracking-widest uppercase font-semibold mb-3">
            INTERACTIVE FINANCIAL MODEL
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight" id="calc-title">
            Industrial Bitcoin Mining Profitability Calculator
          </h2>
          <p className="mt-4 font-sans text-neutral-400 font-light" id="calc-desc">
            Model the raw economics of utility-scale Bitcoin mining operations. Adjust the operational inputs below to see estimated hashrate yield, power costs, and daily corporate margins.
          </p>
        </div>

        {/* Calculator Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="calc-grid">
          
          {/* Inputs Column */}
          <div className="lg:col-span-6 bg-neutral-950/40 border border-neutral-800/80 rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative">
            <div className="space-y-8">
              <div className="flex justify-between items-center pb-4 border-b border-neutral-900">
                <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                  <BarChart2 className="h-4 w-4 text-brand-green" /> OPERATIONAL VARIABLES
                </span>
                <button
                  onClick={resetCalculator}
                  className="text-neutral-500 hover:text-white transition-colors cursor-pointer text-xs font-mono flex items-center gap-1"
                >
                  <RefreshCw className="h-3 w-3" /> RESET
                </button>
              </div>

              {/* 1. Power Capacity Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="font-sans text-xs font-semibold text-neutral-300 uppercase tracking-wide flex items-center gap-1.5">
                    <Zap className="h-3.5 w-3.5 text-brand-green" /> Power Allocation
                  </label>
                  <span className="font-mono text-sm text-white font-bold bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded">
                    {powerCapacity} <span className="text-brand-green text-xs font-medium">MW</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="500"
                  step="5"
                  value={powerCapacity}
                  onChange={(e) => setPowerCapacity(Number(e.target.value))}
                  className="w-full h-1.5 bg-neutral-900 rounded-lg appearance-none cursor-pointer accent-brand-green"
                  id="calc-power-slider"
                />
                <div className="flex justify-between text-[10px] font-mono text-neutral-600">
                  <span>10 MW</span>
                  <span>500 MW (Grid Scale)</span>
                </div>
              </div>

              {/* 2. ASIC Efficiency Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="font-sans text-xs font-semibold text-neutral-300 uppercase tracking-wide flex items-center gap-1.5">
                    <Cpu className="h-3.5 w-3.5 text-brand-cyan" /> ASIC Hardware Efficiency
                  </label>
                  <span className="font-mono text-sm text-white font-bold bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded">
                    {asicEfficiency} <span className="text-brand-cyan text-xs font-medium">J/TH</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="40"
                  step="1"
                  value={asicEfficiency}
                  onChange={(e) => setAsicEfficiency(Number(e.target.value))}
                  className="w-full h-1.5 bg-neutral-900 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                  id="calc-efficiency-slider"
                />
                <div className="flex justify-between text-[10px] font-mono text-neutral-600">
                  <span>15 J/TH (Next-Gen)</span>
                  <span>40 J/TH (Legacy)</span>
                </div>
              </div>

              {/* 3. Power Cost Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="font-sans text-xs font-semibold text-neutral-300 uppercase tracking-wide flex items-center gap-1.5">
                    <DollarSign className="h-3.5 w-3.5 text-brand-green" /> Power Rate (All-In)
                  </label>
                  <span className="font-mono text-sm text-white font-bold bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded">
                    ${powerCost.toFixed(4)} <span className="text-neutral-500 text-xs font-medium">/kWh</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="0.02"
                  max="0.10"
                  step="0.005"
                  value={powerCost}
                  onChange={(e) => setPowerCost(Number(e.target.value))}
                  className="w-full h-1.5 bg-neutral-900 rounded-lg appearance-none cursor-pointer accent-brand-green"
                  id="calc-cost-slider"
                />
                <div className="flex justify-between text-[10px] font-mono text-neutral-600">
                  <span>$0.020 / kWh (West TX)</span>
                  <span>$0.100 / kWh (Commercial)</span>
                </div>
              </div>

              {/* 4. Bitcoin Price Input */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="font-sans text-xs font-semibold text-neutral-300 uppercase tracking-wide flex items-center gap-1.5">
                    <TrendingUp className="h-3.5 w-3.5 text-emerald-400" /> Market BTC Valuation
                  </label>
                  <span className="font-mono text-sm text-white font-bold bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded">
                    ${btcPrice.toLocaleString()} <span className="text-neutral-500 text-xs font-medium">USD</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="30000"
                  max="150000"
                  step="5000"
                  value={btcPrice}
                  onChange={(e) => setBtcPrice(Number(e.target.value))}
                  className="w-full h-1.5 bg-neutral-900 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                  id="calc-btc-slider"
                />
                <div className="flex justify-between text-[10px] font-mono text-neutral-600">
                  <span>$30,000</span>
                  <span>$150,000</span>
                </div>
              </div>
            </div>

            {/* Disclaimer notice */}
            <div className="mt-8 bg-neutral-900/60 border border-neutral-800 p-4 rounded-xl flex gap-3 text-left">
              <Info className="h-5 w-5 text-neutral-500 shrink-0 mt-0.5" />
              <p className="font-sans text-[10.5px] text-neutral-500 leading-normal">
                Models are theoretical. Actual mining output fluctuates based on global Bitcoin network difficulty adjustments, pools commission fees, and seasonal ambient temperature variations.
              </p>
            </div>
          </div>

          {/* Outputs Column */}
          <div className="lg:col-span-6 flex flex-col gap-6 justify-between">
            
            {/* Primary metric card - daily net margin */}
            <div className="bg-neutral-950/40 border border-brand-green/20 rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-green/5 rounded-full blur-3xl" />
              <div className="space-y-3 relative z-10">
                <span className="font-mono text-[10px] text-brand-green font-bold uppercase tracking-widest bg-brand-green/5 border border-brand-green/25 px-2 py-1 rounded">
                  PROJECTED DAILY NET PROFIT
                </span>
                <div className="flex items-baseline gap-1.5 pt-2" id="calc-net-profit">
                  <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                    ${dailyProfit >= 0 ? dailyProfit.toLocaleString(undefined, { maximumFractionDigits: 0 }) : '0'}
                  </span>
                  <span className="font-display text-lg font-bold text-brand-green">USD / DAY</span>
                </div>
                <p className="font-sans text-xs text-neutral-400 leading-normal font-light">
                  Daily revenue minus raw electricity costs, demonstrating the massive profitability margin at Cipher’s industry-leading power rates.
                </p>
              </div>
              
              {/* Output bars mini list */}
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-neutral-900 pt-6 relative z-10" id="calc-metrics-grid">
                <div className="space-y-1">
                  <p className="font-sans text-[10px] text-neutral-500 uppercase font-semibold">ESTIMATED HASHRATE</p>
                  <p className="font-display text-lg font-bold text-white">
                    {hashrate.toFixed(2)} <span className="text-brand-cyan text-xs font-semibold">EH/s</span>
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-sans text-[10px] text-neutral-500 uppercase font-semibold">DAILY BTC MINED</p>
                  <p className="font-display text-lg font-bold text-white">
                    {dailyBtcMined.toFixed(4)} <span className="text-brand-green text-xs font-semibold">BTC</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Income Statement Breakdowns */}
            <div className="bg-neutral-950/40 border border-neutral-800/80 rounded-3xl p-8 shadow-2xl space-y-5">
              <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider block border-b border-neutral-900 pb-3">
                FINANCIAL BREAKDOWN BREAKDOWN
              </span>

              {/* Line items */}
              <div className="space-y-4 font-sans" id="calc-statement">
                
                {/* Gross Revenue */}
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-400">Daily Gross Revenue</span>
                  <span className="font-mono text-sm text-white font-semibold" id="calc-gross-revenue">
                    +${dailyRevenue.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </span>
                </div>

                {/* Power Cost (Loss) */}
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-400">Daily Power Expenses</span>
                  <span className="font-mono text-sm text-red-400 font-semibold" id="calc-power-expense">
                    -${dailyPowerCost.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </span>
                </div>

                {/* Operating Ratio */}
                <div className="flex justify-between items-center border-t border-neutral-900 pt-4">
                  <span className="text-sm text-neutral-300 font-medium">Estimated Power Margin</span>
                  <span className="font-mono text-sm text-brand-green font-bold" id="calc-margin-percentage">
                    {dailyRevenue > 0 ? ((dailyProfit / dailyRevenue) * 100).toFixed(1) : '0.0'}%
                  </span>
                </div>

                {/* Monthly projection */}
                <div className="flex justify-between items-center pt-1">
                  <span className="text-sm text-neutral-300 font-medium">Projected Monthly Margin</span>
                  <span className="font-mono text-sm text-white font-bold" id="calc-monthly-profit">
                    ${(dailyProfit * 30).toLocaleString(undefined, { maximumFractionDigits: 0 })} / mo
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
