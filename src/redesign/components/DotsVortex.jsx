/**
 * Procedural 3D Dot Vortex / Funnel Asset
 * Inspired by LangSmith's visual identity, tailored for RASSID with high-contrast electric lime tones.
 * - Desktop: Horizontal funnel tapering into a beam toward the content (auto-mirrored in RTL).
 * - Mobile: Vertical funnel tapering downwards into a beam.
 */
export default function DotsVortex({ className = '' }) {
  return (
    <div className={`relative w-full overflow-hidden select-none pointer-events-none ${className}`}>
      {/* Desktop Horizontal Vortex (tapers rightward, flips in RTL) */}
      <div className="hidden md:block w-full max-w-[560px] mx-auto rtl:scale-x-[-1] transition-transform duration-300">
        <svg 
          viewBox="0 0 560 380" 
          className="w-full h-auto block"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="vortex-lines">
            <line x1="35.0" y1="340.0" x2="50.6" y2="327.7" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="50.6" y1="327.7" x2="65.2" y2="316.0" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="65.2" y1="316.0" x2="79.3" y2="304.9" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="79.3" y1="304.9" x2="93.3" y2="294.4" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="93.3" y1="294.4" x2="107.0" y2="284.5" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="107.0" y1="284.5" x2="120.7" y2="275.2" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="120.7" y1="275.2" x2="134.2" y2="266.5" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="134.2" y1="266.5" x2="147.6" y2="258.4" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="147.6" y1="258.4" x2="160.9" y2="250.8" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="160.9" y1="250.8" x2="174.2" y2="243.8" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="174.2" y1="243.8" x2="187.4" y2="237.4" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="187.4" y1="237.4" x2="200.5" y2="231.4" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="200.5" y1="231.4" x2="213.6" y2="226.0" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="213.6" y1="226.0" x2="226.6" y2="221.2" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="226.6" y1="221.2" x2="239.6" y2="216.8" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="239.6" y1="216.8" x2="252.5" y2="212.9" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="252.5" y1="212.9" x2="265.4" y2="209.5" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="265.4" y1="209.5" x2="278.3" y2="206.5" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="278.3" y1="206.5" x2="291.1" y2="204.0" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="291.1" y1="204.0" x2="303.9" y2="201.9" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="303.9" y1="201.9" x2="316.6" y2="200.2" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="316.6" y1="200.2" x2="329.4" y2="198.9" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="329.4" y1="198.9" x2="342.1" y2="198.0" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="342.1" y1="198.0" x2="354.7" y2="197.4" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="354.7" y1="197.4" x2="367.4" y2="197.1" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="367.4" y1="197.1" x2="380.0" y2="197.0" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="42.8" y1="332.7" x2="57.8" y2="320.9" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="57.8" y1="320.9" x2="71.7" y2="309.8" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="71.7" y1="309.8" x2="85.3" y2="299.2" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="85.3" y1="299.2" x2="98.7" y2="289.3" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="98.7" y1="289.3" x2="112.0" y2="279.9" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="112.0" y1="279.9" x2="125.1" y2="271.0" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="125.1" y1="271.0" x2="138.2" y2="262.8" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="138.2" y1="262.8" x2="151.1" y2="255.0" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="151.1" y1="255.0" x2="164.1" y2="247.8" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="164.1" y1="247.8" x2="177.0" y2="241.2" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="177.0" y1="241.2" x2="189.8" y2="235.0" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="189.8" y1="235.0" x2="202.7" y2="229.4" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="202.7" y1="229.4" x2="215.5" y2="224.3" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="215.5" y1="224.3" x2="228.2" y2="219.6" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="228.2" y1="219.6" x2="241.0" y2="215.5" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="241.0" y1="215.5" x2="253.7" y2="211.8" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="253.7" y1="211.8" x2="266.4" y2="208.5" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="266.4" y1="208.5" x2="279.1" y2="205.7" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="279.1" y1="205.7" x2="291.8" y2="203.3" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="291.8" y1="203.3" x2="304.5" y2="201.3" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="304.5" y1="201.3" x2="317.2" y2="199.7" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="317.2" y1="199.7" x2="329.8" y2="198.5" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="329.8" y1="198.5" x2="342.5" y2="197.6" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="342.5" y1="197.6" x2="355.1" y2="197.0" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="355.1" y1="197.0" x2="367.7" y2="196.7" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="367.7" y1="196.7" x2="380.4" y2="196.7" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="49.8" y1="311.4" x2="64.2" y2="301.4" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="64.2" y1="301.4" x2="77.6" y2="291.9" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="77.6" y1="291.9" x2="90.7" y2="282.9" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="90.7" y1="282.9" x2="103.6" y2="274.4" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="103.6" y1="274.4" x2="116.4" y2="266.5" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="116.4" y1="266.5" x2="129.1" y2="258.9" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="129.1" y1="258.9" x2="141.7" y2="251.9" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="141.7" y1="251.9" x2="154.4" y2="245.3" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="154.4" y1="245.3" x2="166.9" y2="239.2" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="166.9" y1="239.2" x2="179.5" y2="233.5" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="179.5" y1="233.5" x2="192.1" y2="228.3" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="192.1" y1="228.3" x2="204.6" y2="223.5" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="204.6" y1="223.5" x2="217.1" y2="219.2" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="217.1" y1="219.2" x2="229.7" y2="215.2" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="229.7" y1="215.2" x2="242.2" y2="211.7" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="242.2" y1="211.7" x2="254.8" y2="208.5" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="254.8" y1="208.5" x2="267.3" y2="205.7" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="267.3" y1="205.7" x2="279.9" y2="203.4" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="279.9" y1="203.4" x2="292.5" y2="201.3" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="292.5" y1="201.3" x2="305.1" y2="199.6" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="305.1" y1="199.6" x2="317.7" y2="198.3" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="317.7" y1="198.3" x2="330.3" y2="197.2" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="330.3" y1="197.2" x2="342.9" y2="196.5" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="342.9" y1="196.5" x2="355.5" y2="196.0" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="355.5" y1="196.0" x2="368.1" y2="195.7" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="368.1" y1="195.7" x2="380.7" y2="195.7" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="55.4" y1="278.2" x2="69.3" y2="270.9" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="69.3" y1="270.9" x2="82.3" y2="264.0" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="82.3" y1="264.0" x2="95.0" y2="257.5" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="95.0" y1="257.5" x2="107.5" y2="251.4" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="107.5" y1="251.4" x2="119.9" y2="245.5" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="119.9" y1="245.5" x2="132.3" y2="240.1" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="132.3" y1="240.1" x2="144.6" y2="235.0" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="144.6" y1="235.0" x2="156.9" y2="230.2" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="156.9" y1="230.2" x2="169.2" y2="225.7" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="169.2" y1="225.7" x2="181.5" y2="221.6" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="181.5" y1="221.6" x2="193.8" y2="217.8" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="193.8" y1="217.8" x2="206.1" y2="214.4" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="206.1" y1="214.4" x2="218.5" y2="211.2" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="218.5" y1="211.2" x2="230.8" y2="208.3" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="230.8" y1="208.3" x2="243.2" y2="205.7" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="243.2" y1="205.7" x2="255.6" y2="203.4" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="255.6" y1="203.4" x2="268.1" y2="201.4" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="268.1" y1="201.4" x2="280.5" y2="199.7" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="280.5" y1="199.7" x2="293.0" y2="198.2" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="293.0" y1="198.2" x2="305.5" y2="197.0" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="305.5" y1="197.0" x2="318.0" y2="196.0" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="318.0" y1="196.0" x2="330.6" y2="195.2" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="330.6" y1="195.2" x2="343.2" y2="194.7" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="343.2" y1="194.7" x2="355.7" y2="194.3" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="355.7" y1="194.3" x2="368.3" y2="194.2" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="368.3" y1="194.2" x2="381.0" y2="194.1" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="59.0" y1="236.4" x2="72.6" y2="232.5" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="72.6" y1="232.5" x2="85.3" y2="228.9" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="85.3" y1="228.9" x2="97.7" y2="225.5" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="97.7" y1="225.5" x2="110.0" y2="222.3" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="110.0" y1="222.3" x2="122.1" y2="219.2" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="122.1" y1="219.2" x2="134.3" y2="216.3" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="134.3" y1="216.3" x2="146.4" y2="213.6" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="146.4" y1="213.6" x2="158.5" y2="211.1" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="158.5" y1="211.1" x2="170.6" y2="208.8" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="170.6" y1="208.8" x2="182.8" y2="206.6" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="182.8" y1="206.6" x2="194.9" y2="204.6" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="194.9" y1="204.6" x2="207.1" y2="202.8" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="207.1" y1="202.8" x2="219.3" y2="201.1" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="219.3" y1="201.1" x2="231.6" y2="199.6" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="231.6" y1="199.6" x2="243.9" y2="198.3" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="243.9" y1="198.3" x2="256.2" y2="197.1" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="256.2" y1="197.1" x2="268.5" y2="196.0" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="268.5" y1="196.0" x2="280.9" y2="195.1" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="280.9" y1="195.1" x2="293.3" y2="194.3" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="293.3" y1="194.3" x2="305.8" y2="193.7" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="305.8" y1="193.7" x2="318.3" y2="193.2" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="318.3" y1="193.2" x2="330.8" y2="192.8" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="330.8" y1="192.8" x2="343.3" y2="192.5" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="343.3" y1="192.5" x2="355.9" y2="192.3" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="355.9" y1="192.3" x2="368.5" y2="192.2" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="368.5" y1="192.2" x2="381.1" y2="192.2" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="60.2" y1="190.0" x2="73.7" y2="190.0" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="73.7" y1="190.0" x2="86.3" y2="190.0" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="86.3" y1="190.0" x2="98.6" y2="190.0" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="98.6" y1="190.0" x2="110.8" y2="190.0" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="110.8" y1="190.0" x2="122.9" y2="190.0" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="122.9" y1="190.0" x2="135.0" y2="190.0" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="135.0" y1="190.0" x2="147.0" y2="190.0" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="147.0" y1="190.0" x2="159.1" y2="190.0" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="159.1" y1="190.0" x2="171.1" y2="190.0" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="171.1" y1="190.0" x2="183.2" y2="190.0" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="183.2" y1="190.0" x2="195.3" y2="190.0" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="195.3" y1="190.0" x2="207.5" y2="190.0" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="207.5" y1="190.0" x2="219.6" y2="190.0" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="219.6" y1="190.0" x2="231.8" y2="190.0" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="231.8" y1="190.0" x2="244.1" y2="190.0" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="244.1" y1="190.0" x2="256.4" y2="190.0" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="256.4" y1="190.0" x2="268.7" y2="190.0" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="268.7" y1="190.0" x2="281.1" y2="190.0" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="281.1" y1="190.0" x2="293.5" y2="190.0" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="293.5" y1="190.0" x2="305.9" y2="190.0" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="305.9" y1="190.0" x2="318.4" y2="190.0" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="318.4" y1="190.0" x2="330.9" y2="190.0" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="330.9" y1="190.0" x2="343.4" y2="190.0" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="343.4" y1="190.0" x2="356.0" y2="190.0" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="356.0" y1="190.0" x2="368.6" y2="190.0" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="368.6" y1="190.0" x2="381.2" y2="190.0" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="59.0" y1="143.6" x2="72.6" y2="147.5" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="72.6" y1="147.5" x2="85.3" y2="151.1" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="85.3" y1="151.1" x2="97.7" y2="154.5" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="97.7" y1="154.5" x2="110.0" y2="157.7" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="110.0" y1="157.7" x2="122.1" y2="160.8" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="122.1" y1="160.8" x2="134.3" y2="163.7" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="134.3" y1="163.7" x2="146.4" y2="166.4" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="146.4" y1="166.4" x2="158.5" y2="168.9" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="158.5" y1="168.9" x2="170.6" y2="171.2" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="170.6" y1="171.2" x2="182.8" y2="173.4" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="182.8" y1="173.4" x2="194.9" y2="175.4" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="194.9" y1="175.4" x2="207.1" y2="177.2" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="207.1" y1="177.2" x2="219.3" y2="178.9" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="219.3" y1="178.9" x2="231.6" y2="180.4" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="231.6" y1="180.4" x2="243.9" y2="181.7" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="243.9" y1="181.7" x2="256.2" y2="182.9" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="256.2" y1="182.9" x2="268.5" y2="184.0" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="268.5" y1="184.0" x2="280.9" y2="184.9" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="280.9" y1="184.9" x2="293.3" y2="185.7" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="293.3" y1="185.7" x2="305.8" y2="186.3" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="305.8" y1="186.3" x2="318.3" y2="186.8" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="318.3" y1="186.8" x2="330.8" y2="187.2" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="330.8" y1="187.2" x2="343.3" y2="187.5" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="343.3" y1="187.5" x2="355.9" y2="187.7" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="355.9" y1="187.7" x2="368.5" y2="187.8" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="368.5" y1="187.8" x2="381.1" y2="187.8" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="55.4" y1="101.8" x2="69.3" y2="109.1" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="69.3" y1="109.1" x2="82.3" y2="116.0" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="82.3" y1="116.0" x2="95.0" y2="122.5" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="95.0" y1="122.5" x2="107.5" y2="128.6" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="107.5" y1="128.6" x2="119.9" y2="134.5" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="119.9" y1="134.5" x2="132.3" y2="139.9" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="132.3" y1="139.9" x2="144.6" y2="145.0" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="144.6" y1="145.0" x2="156.9" y2="149.8" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="156.9" y1="149.8" x2="169.2" y2="154.3" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="169.2" y1="154.3" x2="181.5" y2="158.4" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="181.5" y1="158.4" x2="193.8" y2="162.2" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="193.8" y1="162.2" x2="206.1" y2="165.6" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="206.1" y1="165.6" x2="218.5" y2="168.8" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="218.5" y1="168.8" x2="230.8" y2="171.7" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="230.8" y1="171.7" x2="243.2" y2="174.3" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="243.2" y1="174.3" x2="255.6" y2="176.6" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="255.6" y1="176.6" x2="268.1" y2="178.6" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="268.1" y1="178.6" x2="280.5" y2="180.3" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="280.5" y1="180.3" x2="293.0" y2="181.8" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="293.0" y1="181.8" x2="305.5" y2="183.0" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="305.5" y1="183.0" x2="318.0" y2="184.0" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="318.0" y1="184.0" x2="330.6" y2="184.8" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="330.6" y1="184.8" x2="343.2" y2="185.3" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="343.2" y1="185.3" x2="355.7" y2="185.7" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="355.7" y1="185.7" x2="368.3" y2="185.8" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="368.3" y1="185.8" x2="381.0" y2="185.9" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="49.8" y1="68.6" x2="64.2" y2="78.6" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="64.2" y1="78.6" x2="77.6" y2="88.1" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="77.6" y1="88.1" x2="90.7" y2="97.1" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="90.7" y1="97.1" x2="103.6" y2="105.6" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="103.6" y1="105.6" x2="116.4" y2="113.5" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="116.4" y1="113.5" x2="129.1" y2="121.1" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="129.1" y1="121.1" x2="141.7" y2="128.1" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="141.7" y1="128.1" x2="154.4" y2="134.7" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="154.4" y1="134.7" x2="166.9" y2="140.8" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="166.9" y1="140.8" x2="179.5" y2="146.5" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="179.5" y1="146.5" x2="192.1" y2="151.7" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="192.1" y1="151.7" x2="204.6" y2="156.5" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="204.6" y1="156.5" x2="217.1" y2="160.8" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="217.1" y1="160.8" x2="229.7" y2="164.8" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="229.7" y1="164.8" x2="242.2" y2="168.3" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="242.2" y1="168.3" x2="254.8" y2="171.5" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="254.8" y1="171.5" x2="267.3" y2="174.3" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="267.3" y1="174.3" x2="279.9" y2="176.6" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="279.9" y1="176.6" x2="292.5" y2="178.7" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="292.5" y1="178.7" x2="305.1" y2="180.4" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="305.1" y1="180.4" x2="317.7" y2="181.7" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="317.7" y1="181.7" x2="330.3" y2="182.8" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="330.3" y1="182.8" x2="342.9" y2="183.5" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="342.9" y1="183.5" x2="355.5" y2="184.0" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="355.5" y1="184.0" x2="368.1" y2="184.3" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="368.1" y1="184.3" x2="380.7" y2="184.3" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="42.8" y1="47.3" x2="57.8" y2="59.1" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="57.8" y1="59.1" x2="71.7" y2="70.2" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="71.7" y1="70.2" x2="85.3" y2="80.8" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="85.3" y1="80.8" x2="98.7" y2="90.7" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="98.7" y1="90.7" x2="112.0" y2="100.1" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="112.0" y1="100.1" x2="125.1" y2="109.0" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="125.1" y1="109.0" x2="138.2" y2="117.2" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="138.2" y1="117.2" x2="151.1" y2="125.0" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="151.1" y1="125.0" x2="164.1" y2="132.2" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="164.1" y1="132.2" x2="177.0" y2="138.8" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="177.0" y1="138.8" x2="189.8" y2="145.0" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="189.8" y1="145.0" x2="202.7" y2="150.6" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="202.7" y1="150.6" x2="215.5" y2="155.7" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="215.5" y1="155.7" x2="228.2" y2="160.4" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="228.2" y1="160.4" x2="241.0" y2="164.5" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="241.0" y1="164.5" x2="253.7" y2="168.2" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="253.7" y1="168.2" x2="266.4" y2="171.5" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="266.4" y1="171.5" x2="279.1" y2="174.3" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="279.1" y1="174.3" x2="291.8" y2="176.7" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="291.8" y1="176.7" x2="304.5" y2="178.7" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="304.5" y1="178.7" x2="317.2" y2="180.3" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="317.2" y1="180.3" x2="329.8" y2="181.5" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="329.8" y1="181.5" x2="342.5" y2="182.4" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="342.5" y1="182.4" x2="355.1" y2="183.0" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="355.1" y1="183.0" x2="367.7" y2="183.3" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="367.7" y1="183.3" x2="380.4" y2="183.3" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="35.0" y1="40.0" x2="50.6" y2="52.3" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="50.6" y1="52.3" x2="65.2" y2="64.0" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="65.2" y1="64.0" x2="79.3" y2="75.1" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="79.3" y1="75.1" x2="93.3" y2="85.6" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="93.3" y1="85.6" x2="107.0" y2="95.5" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="107.0" y1="95.5" x2="120.7" y2="104.8" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="120.7" y1="104.8" x2="134.2" y2="113.5" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="134.2" y1="113.5" x2="147.6" y2="121.6" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="147.6" y1="121.6" x2="160.9" y2="129.2" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="160.9" y1="129.2" x2="174.2" y2="136.2" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="174.2" y1="136.2" x2="187.4" y2="142.6" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="187.4" y1="142.6" x2="200.5" y2="148.6" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="200.5" y1="148.6" x2="213.6" y2="154.0" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="213.6" y1="154.0" x2="226.6" y2="158.8" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="226.6" y1="158.8" x2="239.6" y2="163.2" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="239.6" y1="163.2" x2="252.5" y2="167.1" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="252.5" y1="167.1" x2="265.4" y2="170.5" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="265.4" y1="170.5" x2="278.3" y2="173.5" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="278.3" y1="173.5" x2="291.1" y2="176.0" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="291.1" y1="176.0" x2="303.9" y2="178.1" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="303.9" y1="178.1" x2="316.6" y2="179.8" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="316.6" y1="179.8" x2="329.4" y2="181.1" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="329.4" y1="181.1" x2="342.1" y2="182.0" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="342.1" y1="182.0" x2="354.7" y2="182.6" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="354.7" y1="182.6" x2="367.4" y2="182.9" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="367.4" y1="182.9" x2="380.0" y2="183.0" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="27.2" y1="47.3" x2="43.5" y2="59.1" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="43.5" y1="59.1" x2="58.6" y2="70.2" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="58.6" y1="70.2" x2="73.4" y2="80.8" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="73.4" y1="80.8" x2="87.9" y2="90.7" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="87.9" y1="90.7" x2="102.1" y2="100.1" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="102.1" y1="100.1" x2="116.2" y2="109.0" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="116.2" y1="109.0" x2="130.2" y2="117.2" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="130.2" y1="117.2" x2="144.0" y2="125.0" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="144.0" y1="125.0" x2="157.8" y2="132.2" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="157.8" y1="132.2" x2="171.4" y2="138.8" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="171.4" y1="138.8" x2="184.9" y2="145.0" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="184.9" y1="145.0" x2="198.4" y2="150.6" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="198.4" y1="150.6" x2="211.7" y2="155.7" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="211.7" y1="155.7" x2="225.0" y2="160.4" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="225.0" y1="160.4" x2="238.2" y2="164.5" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="238.2" y1="164.5" x2="251.3" y2="168.2" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="251.3" y1="168.2" x2="264.4" y2="171.5" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="264.4" y1="171.5" x2="277.4" y2="174.3" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="277.4" y1="174.3" x2="290.4" y2="176.7" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="290.4" y1="176.7" x2="303.3" y2="178.7" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="303.3" y1="178.7" x2="316.1" y2="180.3" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="316.1" y1="180.3" x2="328.9" y2="181.5" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="328.9" y1="181.5" x2="341.7" y2="182.4" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="341.7" y1="182.4" x2="354.4" y2="183.0" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="354.4" y1="183.0" x2="367.0" y2="183.3" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="367.0" y1="183.3" x2="379.6" y2="183.3" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="20.2" y1="68.6" x2="37.0" y2="78.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="37.0" y1="78.6" x2="52.7" y2="88.1" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="52.7" y1="88.1" x2="68.0" y2="97.1" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="68.0" y1="97.1" x2="83.0" y2="105.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="83.0" y1="105.6" x2="97.7" y2="113.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="97.7" y1="113.5" x2="112.3" y2="121.1" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="112.3" y1="121.1" x2="126.6" y2="128.1" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="126.6" y1="128.1" x2="140.8" y2="134.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="140.8" y1="134.7" x2="154.9" y2="140.8" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="154.9" y1="140.8" x2="168.9" y2="146.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="168.9" y1="146.5" x2="182.7" y2="151.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="182.7" y1="151.7" x2="196.4" y2="156.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="196.4" y1="156.5" x2="210.0" y2="160.8" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="210.0" y1="160.8" x2="223.5" y2="164.8" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="223.5" y1="164.8" x2="236.9" y2="168.3" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="236.9" y1="168.3" x2="250.3" y2="171.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="250.3" y1="171.5" x2="263.5" y2="174.3" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="263.5" y1="174.3" x2="276.6" y2="176.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="276.6" y1="176.6" x2="289.7" y2="178.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="289.7" y1="178.7" x2="302.7" y2="180.4" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="302.7" y1="180.4" x2="315.6" y2="181.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="315.6" y1="181.7" x2="328.5" y2="182.8" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="328.5" y1="182.8" x2="341.3" y2="183.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="341.3" y1="183.5" x2="354.0" y2="184.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="354.0" y1="184.0" x2="366.7" y2="184.3" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="366.7" y1="184.3" x2="379.3" y2="184.3" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="14.6" y1="101.8" x2="31.9" y2="109.1" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="31.9" y1="109.1" x2="48.1" y2="116.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="48.1" y1="116.0" x2="63.7" y2="122.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="63.7" y1="122.5" x2="79.1" y2="128.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="79.1" y1="128.6" x2="94.2" y2="134.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="94.2" y1="134.5" x2="109.1" y2="139.9" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="109.1" y1="139.9" x2="123.8" y2="145.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="123.8" y1="145.0" x2="138.3" y2="149.8" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="138.3" y1="149.8" x2="152.7" y2="154.3" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="152.7" y1="154.3" x2="166.9" y2="158.4" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="166.9" y1="158.4" x2="180.9" y2="162.2" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="180.9" y1="162.2" x2="194.9" y2="165.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="194.9" y1="165.6" x2="208.7" y2="168.8" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="208.7" y1="168.8" x2="222.4" y2="171.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="222.4" y1="171.7" x2="235.9" y2="174.3" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="235.9" y1="174.3" x2="249.4" y2="176.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="249.4" y1="176.6" x2="262.8" y2="178.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="262.8" y1="178.6" x2="276.0" y2="180.3" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="276.0" y1="180.3" x2="289.2" y2="181.8" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="289.2" y1="181.8" x2="302.3" y2="183.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="302.3" y1="183.0" x2="315.3" y2="184.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="315.3" y1="184.0" x2="328.2" y2="184.8" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="328.2" y1="184.8" x2="341.0" y2="185.3" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="341.0" y1="185.3" x2="353.7" y2="185.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="353.7" y1="185.7" x2="366.4" y2="185.8" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="366.4" y1="185.8" x2="379.0" y2="185.9" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="11.0" y1="143.6" x2="28.6" y2="147.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="28.6" y1="147.5" x2="45.0" y2="151.1" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="45.0" y1="151.1" x2="61.0" y2="154.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="61.0" y1="154.5" x2="76.6" y2="157.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="76.6" y1="157.7" x2="91.9" y2="160.8" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="91.9" y1="160.8" x2="107.1" y2="163.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="107.1" y1="163.7" x2="122.0" y2="166.4" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="122.0" y1="166.4" x2="136.7" y2="168.9" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="136.7" y1="168.9" x2="151.2" y2="171.2" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="151.2" y1="171.2" x2="165.6" y2="173.4" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="165.6" y1="173.4" x2="179.8" y2="175.4" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="179.8" y1="175.4" x2="193.9" y2="177.2" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="193.9" y1="177.2" x2="207.8" y2="178.9" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="207.8" y1="178.9" x2="221.6" y2="180.4" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="221.6" y1="180.4" x2="235.3" y2="181.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="235.3" y1="181.7" x2="248.9" y2="182.9" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="248.9" y1="182.9" x2="262.3" y2="184.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="262.3" y1="184.0" x2="275.6" y2="184.9" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="275.6" y1="184.9" x2="288.9" y2="185.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="288.9" y1="185.7" x2="302.0" y2="186.3" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="302.0" y1="186.3" x2="315.0" y2="186.8" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="315.0" y1="186.8" x2="327.9" y2="187.2" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="327.9" y1="187.2" x2="340.8" y2="187.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="340.8" y1="187.5" x2="353.6" y2="187.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="353.6" y1="187.7" x2="366.3" y2="187.8" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="366.3" y1="187.8" x2="378.9" y2="187.8" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="9.8" y1="190.0" x2="27.5" y2="190.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="27.5" y1="190.0" x2="44.0" y2="190.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="44.0" y1="190.0" x2="60.0" y2="190.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="60.0" y1="190.0" x2="75.7" y2="190.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="75.7" y1="190.0" x2="91.2" y2="190.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="91.2" y1="190.0" x2="106.4" y2="190.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="106.4" y1="190.0" x2="121.3" y2="190.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="121.3" y1="190.0" x2="136.1" y2="190.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="136.1" y1="190.0" x2="150.7" y2="190.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="150.7" y1="190.0" x2="165.1" y2="190.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="165.1" y1="190.0" x2="179.4" y2="190.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="179.4" y1="190.0" x2="193.5" y2="190.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="193.5" y1="190.0" x2="207.5" y2="190.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="207.5" y1="190.0" x2="221.4" y2="190.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="221.4" y1="190.0" x2="235.1" y2="190.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="235.1" y1="190.0" x2="248.7" y2="190.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="248.7" y1="190.0" x2="262.2" y2="190.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="262.2" y1="190.0" x2="275.5" y2="190.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="275.5" y1="190.0" x2="288.7" y2="190.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="288.7" y1="190.0" x2="301.9" y2="190.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="301.9" y1="190.0" x2="314.9" y2="190.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="314.9" y1="190.0" x2="327.9" y2="190.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="327.9" y1="190.0" x2="340.7" y2="190.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="340.7" y1="190.0" x2="353.5" y2="190.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="353.5" y1="190.0" x2="366.2" y2="190.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="366.2" y1="190.0" x2="378.8" y2="190.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="11.0" y1="236.4" x2="28.6" y2="232.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="28.6" y1="232.5" x2="45.0" y2="228.9" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="45.0" y1="228.9" x2="61.0" y2="225.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="61.0" y1="225.5" x2="76.6" y2="222.3" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="76.6" y1="222.3" x2="91.9" y2="219.2" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="91.9" y1="219.2" x2="107.1" y2="216.3" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="107.1" y1="216.3" x2="122.0" y2="213.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="122.0" y1="213.6" x2="136.7" y2="211.1" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="136.7" y1="211.1" x2="151.2" y2="208.8" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="151.2" y1="208.8" x2="165.6" y2="206.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="165.6" y1="206.6" x2="179.8" y2="204.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="179.8" y1="204.6" x2="193.9" y2="202.8" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="193.9" y1="202.8" x2="207.8" y2="201.1" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="207.8" y1="201.1" x2="221.6" y2="199.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="221.6" y1="199.6" x2="235.3" y2="198.3" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="235.3" y1="198.3" x2="248.9" y2="197.1" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="248.9" y1="197.1" x2="262.3" y2="196.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="262.3" y1="196.0" x2="275.6" y2="195.1" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="275.6" y1="195.1" x2="288.9" y2="194.3" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="288.9" y1="194.3" x2="302.0" y2="193.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="302.0" y1="193.7" x2="315.0" y2="193.2" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="315.0" y1="193.2" x2="327.9" y2="192.8" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="327.9" y1="192.8" x2="340.8" y2="192.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="340.8" y1="192.5" x2="353.6" y2="192.3" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="353.6" y1="192.3" x2="366.3" y2="192.2" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="366.3" y1="192.2" x2="378.9" y2="192.2" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="14.6" y1="278.2" x2="31.9" y2="270.9" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="31.9" y1="270.9" x2="48.1" y2="264.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="48.1" y1="264.0" x2="63.7" y2="257.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="63.7" y1="257.5" x2="79.1" y2="251.4" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="79.1" y1="251.4" x2="94.2" y2="245.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="94.2" y1="245.5" x2="109.1" y2="240.1" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="109.1" y1="240.1" x2="123.8" y2="235.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="123.8" y1="235.0" x2="138.3" y2="230.2" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="138.3" y1="230.2" x2="152.7" y2="225.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="152.7" y1="225.7" x2="166.9" y2="221.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="166.9" y1="221.6" x2="180.9" y2="217.8" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="180.9" y1="217.8" x2="194.9" y2="214.4" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="194.9" y1="214.4" x2="208.7" y2="211.2" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="208.7" y1="211.2" x2="222.4" y2="208.3" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="222.4" y1="208.3" x2="235.9" y2="205.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="235.9" y1="205.7" x2="249.4" y2="203.4" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="249.4" y1="203.4" x2="262.8" y2="201.4" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="262.8" y1="201.4" x2="276.0" y2="199.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="276.0" y1="199.7" x2="289.2" y2="198.2" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="289.2" y1="198.2" x2="302.3" y2="197.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="302.3" y1="197.0" x2="315.3" y2="196.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="315.3" y1="196.0" x2="328.2" y2="195.2" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="328.2" y1="195.2" x2="341.0" y2="194.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="341.0" y1="194.7" x2="353.7" y2="194.3" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="353.7" y1="194.3" x2="366.4" y2="194.2" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="366.4" y1="194.2" x2="379.0" y2="194.1" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="20.2" y1="311.4" x2="37.0" y2="301.4" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="37.0" y1="301.4" x2="52.7" y2="291.9" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="52.7" y1="291.9" x2="68.0" y2="282.9" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="68.0" y1="282.9" x2="83.0" y2="274.4" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="83.0" y1="274.4" x2="97.7" y2="266.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="97.7" y1="266.5" x2="112.3" y2="258.9" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="112.3" y1="258.9" x2="126.6" y2="251.9" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="126.6" y1="251.9" x2="140.8" y2="245.3" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="140.8" y1="245.3" x2="154.9" y2="239.2" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="154.9" y1="239.2" x2="168.9" y2="233.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="168.9" y1="233.5" x2="182.7" y2="228.3" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="182.7" y1="228.3" x2="196.4" y2="223.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="196.4" y1="223.5" x2="210.0" y2="219.2" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="210.0" y1="219.2" x2="223.5" y2="215.2" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="223.5" y1="215.2" x2="236.9" y2="211.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="236.9" y1="211.7" x2="250.3" y2="208.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="250.3" y1="208.5" x2="263.5" y2="205.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="263.5" y1="205.7" x2="276.6" y2="203.4" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="276.6" y1="203.4" x2="289.7" y2="201.3" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="289.7" y1="201.3" x2="302.7" y2="199.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="302.7" y1="199.6" x2="315.6" y2="198.3" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="315.6" y1="198.3" x2="328.5" y2="197.2" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="328.5" y1="197.2" x2="341.3" y2="196.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="341.3" y1="196.5" x2="354.0" y2="196.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="354.0" y1="196.0" x2="366.7" y2="195.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="366.7" y1="195.7" x2="379.3" y2="195.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="27.2" y1="332.7" x2="43.5" y2="320.9" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="43.5" y1="320.9" x2="58.6" y2="309.8" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="58.6" y1="309.8" x2="73.4" y2="299.2" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="73.4" y1="299.2" x2="87.9" y2="289.3" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="87.9" y1="289.3" x2="102.1" y2="279.9" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="102.1" y1="279.9" x2="116.2" y2="271.0" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="116.2" y1="271.0" x2="130.2" y2="262.8" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="130.2" y1="262.8" x2="144.0" y2="255.0" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="144.0" y1="255.0" x2="157.8" y2="247.8" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="157.8" y1="247.8" x2="171.4" y2="241.2" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="171.4" y1="241.2" x2="184.9" y2="235.0" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="184.9" y1="235.0" x2="198.4" y2="229.4" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="198.4" y1="229.4" x2="211.7" y2="224.3" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="211.7" y1="224.3" x2="225.0" y2="219.6" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="225.0" y1="219.6" x2="238.2" y2="215.5" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="238.2" y1="215.5" x2="251.3" y2="211.8" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="251.3" y1="211.8" x2="264.4" y2="208.5" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="264.4" y1="208.5" x2="277.4" y2="205.7" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="277.4" y1="205.7" x2="290.4" y2="203.3" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="290.4" y1="203.3" x2="303.3" y2="201.3" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="303.3" y1="201.3" x2="316.1" y2="199.7" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="316.1" y1="199.7" x2="328.9" y2="198.5" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="328.9" y1="198.5" x2="341.7" y2="197.6" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="341.7" y1="197.6" x2="354.4" y2="197.0" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="354.4" y1="197.0" x2="367.0" y2="196.7" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="367.0" y1="196.7" x2="379.6" y2="196.7" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="35.0" y1="340.0" x2="42.8" y2="332.7" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="42.8" y1="332.7" x2="49.8" y2="311.4" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="49.8" y1="311.4" x2="55.4" y2="278.2" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="55.4" y1="278.2" x2="59.0" y2="236.4" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="59.0" y1="236.4" x2="60.2" y2="190.0" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="60.2" y1="190.0" x2="59.0" y2="143.6" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="59.0" y1="143.6" x2="55.4" y2="101.8" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="55.4" y1="101.8" x2="49.8" y2="68.6" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="49.8" y1="68.6" x2="42.8" y2="47.3" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="42.8" y1="47.3" x2="35.0" y2="40.0" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="35.0" y1="40.0" x2="27.2" y2="47.3" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="27.2" y1="47.3" x2="20.2" y2="68.6" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="20.2" y1="68.6" x2="14.6" y2="101.8" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="14.6" y1="101.8" x2="11.0" y2="143.6" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="11.0" y1="143.6" x2="9.8" y2="190.0" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="9.8" y1="190.0" x2="11.0" y2="236.4" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="11.0" y1="236.4" x2="14.6" y2="278.2" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="14.6" y1="278.2" x2="20.2" y2="311.4" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="20.2" y1="311.4" x2="27.2" y2="332.7" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="27.2" y1="332.7" x2="35.0" y2="340.0" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="65.2" y1="316.0" x2="71.7" y2="309.8" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="71.7" y1="309.8" x2="77.6" y2="291.9" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="77.6" y1="291.9" x2="82.3" y2="264.0" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="82.3" y1="264.0" x2="85.3" y2="228.9" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="85.3" y1="228.9" x2="86.3" y2="190.0" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="86.3" y1="190.0" x2="85.3" y2="151.1" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="85.3" y1="151.1" x2="82.3" y2="116.0" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="82.3" y1="116.0" x2="77.6" y2="88.1" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="77.6" y1="88.1" x2="71.7" y2="70.2" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="71.7" y1="70.2" x2="65.2" y2="64.0" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="65.2" y1="64.0" x2="58.6" y2="70.2" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="58.6" y1="70.2" x2="52.7" y2="88.1" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="52.7" y1="88.1" x2="48.1" y2="116.0" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="48.1" y1="116.0" x2="45.0" y2="151.1" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="45.0" y1="151.1" x2="44.0" y2="190.0" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="44.0" y1="190.0" x2="45.0" y2="228.9" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="45.0" y1="228.9" x2="48.1" y2="264.0" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="48.1" y1="264.0" x2="52.7" y2="291.9" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="52.7" y1="291.9" x2="58.6" y2="309.8" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="58.6" y1="309.8" x2="65.2" y2="316.0" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="93.3" y1="294.4" x2="98.7" y2="289.3" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="98.7" y1="289.3" x2="103.6" y2="274.4" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="103.6" y1="274.4" x2="107.5" y2="251.4" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="107.5" y1="251.4" x2="110.0" y2="222.3" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="110.0" y1="222.3" x2="110.8" y2="190.0" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="110.8" y1="190.0" x2="110.0" y2="157.7" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="110.0" y1="157.7" x2="107.5" y2="128.6" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="107.5" y1="128.6" x2="103.6" y2="105.6" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="103.6" y1="105.6" x2="98.7" y2="90.7" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="98.7" y1="90.7" x2="93.3" y2="85.6" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="93.3" y1="85.6" x2="87.9" y2="90.7" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="87.9" y1="90.7" x2="83.0" y2="105.6" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="83.0" y1="105.6" x2="79.1" y2="128.6" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="79.1" y1="128.6" x2="76.6" y2="157.7" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="76.6" y1="157.7" x2="75.7" y2="190.0" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="75.7" y1="190.0" x2="76.6" y2="222.3" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="76.6" y1="222.3" x2="79.1" y2="251.4" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="79.1" y1="251.4" x2="83.0" y2="274.4" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="83.0" y1="274.4" x2="87.9" y2="289.3" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="87.9" y1="289.3" x2="93.3" y2="294.4" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="120.7" y1="275.2" x2="125.1" y2="271.0" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="125.1" y1="271.0" x2="129.1" y2="258.9" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="129.1" y1="258.9" x2="132.3" y2="240.1" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="132.3" y1="240.1" x2="134.3" y2="216.3" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="134.3" y1="216.3" x2="135.0" y2="190.0" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="135.0" y1="190.0" x2="134.3" y2="163.7" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="134.3" y1="163.7" x2="132.3" y2="139.9" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="132.3" y1="139.9" x2="129.1" y2="121.1" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="129.1" y1="121.1" x2="125.1" y2="109.0" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="125.1" y1="109.0" x2="120.7" y2="104.8" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="120.7" y1="104.8" x2="116.2" y2="109.0" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="116.2" y1="109.0" x2="112.3" y2="121.1" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="112.3" y1="121.1" x2="109.1" y2="139.9" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="109.1" y1="139.9" x2="107.1" y2="163.7" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="107.1" y1="163.7" x2="106.4" y2="190.0" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="106.4" y1="190.0" x2="107.1" y2="216.3" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="107.1" y1="216.3" x2="109.1" y2="240.1" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="109.1" y1="240.1" x2="112.3" y2="258.9" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="112.3" y1="258.9" x2="116.2" y2="271.0" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="116.2" y1="271.0" x2="120.7" y2="275.2" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="147.6" y1="258.4" x2="151.1" y2="255.0" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="151.1" y1="255.0" x2="154.4" y2="245.3" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="154.4" y1="245.3" x2="156.9" y2="230.2" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="156.9" y1="230.2" x2="158.5" y2="211.1" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="158.5" y1="211.1" x2="159.1" y2="190.0" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="159.1" y1="190.0" x2="158.5" y2="168.9" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="158.5" y1="168.9" x2="156.9" y2="149.8" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="156.9" y1="149.8" x2="154.4" y2="134.7" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="154.4" y1="134.7" x2="151.1" y2="125.0" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="151.1" y1="125.0" x2="147.6" y2="121.6" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="147.6" y1="121.6" x2="144.0" y2="125.0" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="144.0" y1="125.0" x2="140.8" y2="134.7" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="140.8" y1="134.7" x2="138.3" y2="149.8" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="138.3" y1="149.8" x2="136.7" y2="168.9" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="136.7" y1="168.9" x2="136.1" y2="190.0" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="136.1" y1="190.0" x2="136.7" y2="211.1" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="136.7" y1="211.1" x2="138.3" y2="230.2" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="138.3" y1="230.2" x2="140.8" y2="245.3" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="140.8" y1="245.3" x2="144.0" y2="255.0" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="144.0" y1="255.0" x2="147.6" y2="258.4" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="174.2" y1="243.8" x2="177.0" y2="241.2" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="177.0" y1="241.2" x2="179.5" y2="233.5" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="179.5" y1="233.5" x2="181.5" y2="221.6" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="181.5" y1="221.6" x2="182.8" y2="206.6" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="182.8" y1="206.6" x2="183.2" y2="190.0" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="183.2" y1="190.0" x2="182.8" y2="173.4" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="182.8" y1="173.4" x2="181.5" y2="158.4" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="181.5" y1="158.4" x2="179.5" y2="146.5" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="179.5" y1="146.5" x2="177.0" y2="138.8" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="177.0" y1="138.8" x2="174.2" y2="136.2" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="174.2" y1="136.2" x2="171.4" y2="138.8" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="171.4" y1="138.8" x2="168.9" y2="146.5" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="168.9" y1="146.5" x2="166.9" y2="158.4" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="166.9" y1="158.4" x2="165.6" y2="173.4" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="165.6" y1="173.4" x2="165.1" y2="190.0" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="165.1" y1="190.0" x2="165.6" y2="206.6" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="165.6" y1="206.6" x2="166.9" y2="221.6" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="166.9" y1="221.6" x2="168.9" y2="233.5" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="168.9" y1="233.5" x2="171.4" y2="241.2" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="171.4" y1="241.2" x2="174.2" y2="243.8" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="200.5" y1="231.4" x2="202.7" y2="229.4" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="202.7" y1="229.4" x2="204.6" y2="223.5" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="204.6" y1="223.5" x2="206.1" y2="214.4" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="206.1" y1="214.4" x2="207.1" y2="202.8" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="207.1" y1="202.8" x2="207.5" y2="190.0" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="207.5" y1="190.0" x2="207.1" y2="177.2" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="207.1" y1="177.2" x2="206.1" y2="165.6" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="206.1" y1="165.6" x2="204.6" y2="156.5" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="204.6" y1="156.5" x2="202.7" y2="150.6" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="202.7" y1="150.6" x2="200.5" y2="148.6" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="200.5" y1="148.6" x2="198.4" y2="150.6" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="198.4" y1="150.6" x2="196.4" y2="156.5" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="196.4" y1="156.5" x2="194.9" y2="165.6" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="194.9" y1="165.6" x2="193.9" y2="177.2" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="193.9" y1="177.2" x2="193.5" y2="190.0" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="193.5" y1="190.0" x2="193.9" y2="202.8" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="193.9" y1="202.8" x2="194.9" y2="214.4" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="194.9" y1="214.4" x2="196.4" y2="223.5" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="196.4" y1="223.5" x2="198.4" y2="229.4" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="198.4" y1="229.4" x2="200.5" y2="231.4" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="226.6" y1="221.2" x2="228.2" y2="219.6" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="228.2" y1="219.6" x2="229.7" y2="215.2" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="229.7" y1="215.2" x2="230.8" y2="208.3" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="230.8" y1="208.3" x2="231.6" y2="199.6" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="231.6" y1="199.6" x2="231.8" y2="190.0" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="231.8" y1="190.0" x2="231.6" y2="180.4" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="231.6" y1="180.4" x2="230.8" y2="171.7" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="230.8" y1="171.7" x2="229.7" y2="164.8" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="229.7" y1="164.8" x2="228.2" y2="160.4" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="228.2" y1="160.4" x2="226.6" y2="158.8" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="226.6" y1="158.8" x2="225.0" y2="160.4" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="225.0" y1="160.4" x2="223.5" y2="164.8" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="223.5" y1="164.8" x2="222.4" y2="171.7" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="222.4" y1="171.7" x2="221.6" y2="180.4" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="221.6" y1="180.4" x2="221.4" y2="190.0" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="221.4" y1="190.0" x2="221.6" y2="199.6" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="221.6" y1="199.6" x2="222.4" y2="208.3" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="222.4" y1="208.3" x2="223.5" y2="215.2" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="223.5" y1="215.2" x2="225.0" y2="219.6" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="225.0" y1="219.6" x2="226.6" y2="221.2" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="252.5" y1="212.9" x2="253.7" y2="211.8" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="253.7" y1="211.8" x2="254.8" y2="208.5" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="254.8" y1="208.5" x2="255.6" y2="203.4" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="255.6" y1="203.4" x2="256.2" y2="197.1" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="256.2" y1="197.1" x2="256.4" y2="190.0" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="256.4" y1="190.0" x2="256.2" y2="182.9" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="256.2" y1="182.9" x2="255.6" y2="176.6" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="255.6" y1="176.6" x2="254.8" y2="171.5" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="254.8" y1="171.5" x2="253.7" y2="168.2" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="253.7" y1="168.2" x2="252.5" y2="167.1" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="252.5" y1="167.1" x2="251.3" y2="168.2" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="251.3" y1="168.2" x2="250.3" y2="171.5" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="250.3" y1="171.5" x2="249.4" y2="176.6" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="249.4" y1="176.6" x2="248.9" y2="182.9" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="248.9" y1="182.9" x2="248.7" y2="190.0" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="248.7" y1="190.0" x2="248.9" y2="197.1" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="248.9" y1="197.1" x2="249.4" y2="203.4" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="249.4" y1="203.4" x2="250.3" y2="208.5" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="250.3" y1="208.5" x2="251.3" y2="211.8" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="251.3" y1="211.8" x2="252.5" y2="212.9" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="278.3" y1="206.5" x2="279.1" y2="205.7" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="279.1" y1="205.7" x2="279.9" y2="203.4" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="279.9" y1="203.4" x2="280.5" y2="199.7" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="280.5" y1="199.7" x2="280.9" y2="195.1" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="280.9" y1="195.1" x2="281.1" y2="190.0" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="281.1" y1="190.0" x2="280.9" y2="184.9" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="280.9" y1="184.9" x2="280.5" y2="180.3" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="280.5" y1="180.3" x2="279.9" y2="176.6" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="279.9" y1="176.6" x2="279.1" y2="174.3" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="279.1" y1="174.3" x2="278.3" y2="173.5" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="278.3" y1="173.5" x2="277.4" y2="174.3" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="277.4" y1="174.3" x2="276.6" y2="176.6" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="276.6" y1="176.6" x2="276.0" y2="180.3" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="276.0" y1="180.3" x2="275.6" y2="184.9" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="275.6" y1="184.9" x2="275.5" y2="190.0" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="275.5" y1="190.0" x2="275.6" y2="195.1" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="275.6" y1="195.1" x2="276.0" y2="199.7" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="276.0" y1="199.7" x2="276.6" y2="203.4" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="276.6" y1="203.4" x2="277.4" y2="205.7" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="277.4" y1="205.7" x2="278.3" y2="206.5" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="303.9" y1="201.9" x2="304.5" y2="201.3" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="304.5" y1="201.3" x2="305.1" y2="199.6" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="305.1" y1="199.6" x2="305.5" y2="197.0" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="305.5" y1="197.0" x2="305.8" y2="193.7" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="305.8" y1="193.7" x2="305.9" y2="190.0" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="305.9" y1="190.0" x2="305.8" y2="186.3" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="305.8" y1="186.3" x2="305.5" y2="183.0" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="305.5" y1="183.0" x2="305.1" y2="180.4" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="305.1" y1="180.4" x2="304.5" y2="178.7" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="304.5" y1="178.7" x2="303.9" y2="178.1" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="303.9" y1="178.1" x2="303.3" y2="178.7" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="303.3" y1="178.7" x2="302.7" y2="180.4" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="302.7" y1="180.4" x2="302.3" y2="183.0" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="302.3" y1="183.0" x2="302.0" y2="186.3" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="302.0" y1="186.3" x2="301.9" y2="190.0" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="301.9" y1="190.0" x2="302.0" y2="193.7" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="302.0" y1="193.7" x2="302.3" y2="197.0" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="302.3" y1="197.0" x2="302.7" y2="199.6" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="302.7" y1="199.6" x2="303.3" y2="201.3" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="303.3" y1="201.3" x2="303.9" y2="201.9" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="329.4" y1="198.9" x2="329.8" y2="198.5" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="329.8" y1="198.5" x2="330.3" y2="197.2" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="330.3" y1="197.2" x2="330.6" y2="195.2" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="330.6" y1="195.2" x2="330.8" y2="192.8" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="330.8" y1="192.8" x2="330.9" y2="190.0" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="330.9" y1="190.0" x2="330.8" y2="187.2" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="330.8" y1="187.2" x2="330.6" y2="184.8" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="330.6" y1="184.8" x2="330.3" y2="182.8" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="330.3" y1="182.8" x2="329.8" y2="181.5" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="329.8" y1="181.5" x2="329.4" y2="181.1" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="329.4" y1="181.1" x2="328.9" y2="181.5" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="328.9" y1="181.5" x2="328.5" y2="182.8" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="328.5" y1="182.8" x2="328.2" y2="184.8" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="328.2" y1="184.8" x2="327.9" y2="187.2" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="327.9" y1="187.2" x2="327.9" y2="190.0" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="327.9" y1="190.0" x2="327.9" y2="192.8" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="327.9" y1="192.8" x2="328.2" y2="195.2" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="328.2" y1="195.2" x2="328.5" y2="197.2" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="328.5" y1="197.2" x2="328.9" y2="198.5" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="328.9" y1="198.5" x2="329.4" y2="198.9" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="354.7" y1="197.4" x2="355.1" y2="197.0" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="355.1" y1="197.0" x2="355.5" y2="196.0" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="355.5" y1="196.0" x2="355.7" y2="194.3" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="355.7" y1="194.3" x2="355.9" y2="192.3" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="355.9" y1="192.3" x2="356.0" y2="190.0" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="356.0" y1="190.0" x2="355.9" y2="187.7" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="355.9" y1="187.7" x2="355.7" y2="185.7" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="355.7" y1="185.7" x2="355.5" y2="184.0" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="355.5" y1="184.0" x2="355.1" y2="183.0" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="355.1" y1="183.0" x2="354.7" y2="182.6" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="354.7" y1="182.6" x2="354.4" y2="183.0" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="354.4" y1="183.0" x2="354.0" y2="184.0" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="354.0" y1="184.0" x2="353.7" y2="185.7" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="353.7" y1="185.7" x2="353.6" y2="187.7" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="353.6" y1="187.7" x2="353.5" y2="190.0" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="353.5" y1="190.0" x2="353.6" y2="192.3" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="353.6" y1="192.3" x2="353.7" y2="194.3" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="353.7" y1="194.3" x2="354.0" y2="196.0" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="354.0" y1="196.0" x2="354.4" y2="197.0" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="354.4" y1="197.0" x2="354.7" y2="197.4" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
          </g>
          <g className="vortex-dots">
            <circle cx="380.0" cy="190.0" r="2.6" fill="#62B000" fillOpacity="0.95" />
            <circle cx="384.6" cy="190.5" r="2.6" fill="#62B000" fillOpacity="0.94" />
            <circle cx="389.1" cy="190.7" r="2.5" fill="#62B000" fillOpacity="0.93" />
            <circle cx="393.7" cy="190.6" r="2.5" fill="#62B000" fillOpacity="0.92" />
            <circle cx="398.3" cy="190.3" r="2.5" fill="#62B000" fillOpacity="0.91" />
            <circle cx="402.9" cy="189.7" r="2.5" fill="#62B000" fillOpacity="0.90" />
            <circle cx="407.4" cy="189.3" r="2.4" fill="#62B000" fillOpacity="0.89" />
            <circle cx="412.0" cy="189.3" r="2.4" fill="#62B000" fillOpacity="0.88" />
            <circle cx="416.6" cy="189.5" r="2.4" fill="#62B000" fillOpacity="0.87" />
            <circle cx="421.1" cy="190.0" r="2.3" fill="#62B000" fillOpacity="0.86" />
            <circle cx="425.7" cy="190.5" r="2.3" fill="#62B000" fillOpacity="0.85" />
            <circle cx="430.3" cy="190.7" r="2.3" fill="#62B000" fillOpacity="0.84" />
            <circle cx="434.9" cy="190.6" r="2.3" fill="#62B000" fillOpacity="0.83" />
            <circle cx="439.4" cy="190.2" r="2.2" fill="#62B000" fillOpacity="0.82" />
            <circle cx="444.0" cy="189.7" r="2.2" fill="#62B000" fillOpacity="0.81" />
            <circle cx="448.6" cy="189.3" r="2.2" fill="#62B000" fillOpacity="0.80" />
            <circle cx="453.1" cy="189.3" r="2.1" fill="#62B000" fillOpacity="0.79" />
            <circle cx="457.7" cy="189.5" r="2.1" fill="#62B000" fillOpacity="0.78" />
            <circle cx="462.3" cy="190.0" r="2.1" fill="#62B000" fillOpacity="0.77" />
            <circle cx="466.9" cy="190.5" r="2.1" fill="#62B000" fillOpacity="0.76" />
            <circle cx="471.4" cy="190.7" r="2.0" fill="#62B000" fillOpacity="0.75" />
            <circle cx="476.0" cy="190.6" r="2.0" fill="#62B000" fillOpacity="0.74" />
            <circle cx="480.6" cy="190.2" r="2.0" fill="#62B000" fillOpacity="0.73" />
            <circle cx="485.1" cy="189.7" r="1.9" fill="#62B000" fillOpacity="0.72" />
            <circle cx="489.7" cy="189.3" r="1.9" fill="#62B000" fillOpacity="0.71" />
            <circle cx="494.3" cy="189.3" r="1.9" fill="#62B000" fillOpacity="0.70" />
            <circle cx="498.9" cy="189.5" r="1.9" fill="#62B000" fillOpacity="0.69" />
            <circle cx="503.4" cy="190.0" r="1.8" fill="#62B000" fillOpacity="0.68" />
            <circle cx="508.0" cy="190.5" r="1.8" fill="#62B000" fillOpacity="0.67" />
            <circle cx="512.6" cy="190.7" r="1.8" fill="#62B000" fillOpacity="0.66" />
            <circle cx="517.1" cy="190.6" r="1.7" fill="#62B000" fillOpacity="0.65" />
            <circle cx="521.7" cy="190.2" r="1.7" fill="#62B000" fillOpacity="0.64" />
            <circle cx="526.3" cy="189.7" r="1.7" fill="#62B000" fillOpacity="0.63" />
            <circle cx="530.9" cy="189.3" r="1.7" fill="#62B000" fillOpacity="0.62" />
            <circle cx="535.4" cy="189.3" r="1.6" fill="#62B000" fillOpacity="0.61" />
            <circle cx="540.0" cy="189.6" r="1.6" fill="#62B000" fillOpacity="0.60" />
            <circle cx="9.8" cy="190.0" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="27.5" cy="190.0" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="44.0" cy="190.0" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="60.0" cy="190.0" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="75.7" cy="190.0" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="91.2" cy="190.0" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="106.4" cy="190.0" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="121.3" cy="190.0" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="136.1" cy="190.0" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="150.7" cy="190.0" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="165.1" cy="190.0" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="179.4" cy="190.0" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="193.5" cy="190.0" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="207.5" cy="190.0" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="221.4" cy="190.0" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="235.1" cy="190.0" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="248.7" cy="190.0" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="262.2" cy="190.0" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="275.5" cy="190.0" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="288.7" cy="190.0" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="301.9" cy="190.0" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="314.9" cy="190.0" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="327.9" cy="190.0" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="340.7" cy="190.0" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="353.5" cy="190.0" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="366.2" cy="190.0" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="378.8" cy="190.0" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="11.0" cy="236.4" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="28.6" cy="232.5" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="45.0" cy="228.9" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="61.0" cy="225.5" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="76.6" cy="222.3" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="91.9" cy="219.2" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="107.1" cy="216.3" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="122.0" cy="213.6" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="136.7" cy="211.1" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="151.2" cy="208.8" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="165.6" cy="206.6" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="179.8" cy="204.6" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="193.9" cy="202.8" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="207.8" cy="201.1" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="221.6" cy="199.6" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="235.3" cy="198.3" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="248.9" cy="197.1" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="262.3" cy="196.0" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="275.6" cy="195.1" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="288.9" cy="194.3" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="302.0" cy="193.7" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="315.0" cy="193.2" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="327.9" cy="192.8" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="340.8" cy="192.5" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="353.6" cy="192.3" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="366.3" cy="192.2" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="378.9" cy="192.2" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="11.0" cy="143.6" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="28.6" cy="147.5" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="45.0" cy="151.1" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="61.0" cy="154.5" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="76.6" cy="157.7" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="91.9" cy="160.8" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="107.1" cy="163.7" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="122.0" cy="166.4" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="136.7" cy="168.9" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="151.2" cy="171.2" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="165.6" cy="173.4" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="179.8" cy="175.4" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="193.9" cy="177.2" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="207.8" cy="178.9" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="221.6" cy="180.4" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="235.3" cy="181.7" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="248.9" cy="182.9" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="262.3" cy="184.0" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="275.6" cy="184.9" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="288.9" cy="185.7" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="302.0" cy="186.3" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="315.0" cy="186.8" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="327.9" cy="187.2" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="340.8" cy="187.5" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="353.6" cy="187.7" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="366.3" cy="187.8" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="378.9" cy="187.8" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="14.6" cy="278.2" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="31.9" cy="270.9" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="48.1" cy="264.0" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="63.7" cy="257.5" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="79.1" cy="251.4" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="94.2" cy="245.5" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="109.1" cy="240.1" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="123.8" cy="235.0" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="138.3" cy="230.2" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="152.7" cy="225.7" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="166.9" cy="221.6" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="180.9" cy="217.8" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="194.9" cy="214.4" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="208.7" cy="211.2" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="222.4" cy="208.3" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="235.9" cy="205.7" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="249.4" cy="203.4" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="262.8" cy="201.4" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="276.0" cy="199.7" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="289.2" cy="198.2" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="302.3" cy="197.0" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="315.3" cy="196.0" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="328.2" cy="195.2" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="341.0" cy="194.7" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="353.7" cy="194.3" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="366.4" cy="194.2" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="379.0" cy="194.1" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="14.6" cy="101.8" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="31.9" cy="109.1" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="48.1" cy="116.0" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="63.7" cy="122.5" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="79.1" cy="128.6" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="94.2" cy="134.5" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="109.1" cy="139.9" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="123.8" cy="145.0" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="138.3" cy="149.8" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="152.7" cy="154.3" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="166.9" cy="158.4" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="180.9" cy="162.2" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="194.9" cy="165.6" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="208.7" cy="168.8" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="222.4" cy="171.7" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="235.9" cy="174.3" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="249.4" cy="176.6" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="262.8" cy="178.6" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="276.0" cy="180.3" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="289.2" cy="181.8" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="302.3" cy="183.0" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="315.3" cy="184.0" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="328.2" cy="184.8" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="341.0" cy="185.3" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="353.7" cy="185.7" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="366.4" cy="185.8" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="379.0" cy="185.9" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="20.2" cy="311.4" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="37.0" cy="301.4" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="52.7" cy="291.9" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="68.0" cy="282.9" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="83.0" cy="274.4" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="97.7" cy="266.5" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="112.3" cy="258.9" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="126.6" cy="251.9" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="140.8" cy="245.3" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="154.9" cy="239.2" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="168.9" cy="233.5" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="182.7" cy="228.3" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="196.4" cy="223.5" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="210.0" cy="219.2" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="223.5" cy="215.2" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="236.9" cy="211.7" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="250.3" cy="208.5" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="263.5" cy="205.7" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="276.6" cy="203.4" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="289.7" cy="201.3" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="302.7" cy="199.6" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="315.6" cy="198.3" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="328.5" cy="197.2" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="341.3" cy="196.5" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="354.0" cy="196.0" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="366.7" cy="195.7" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="379.3" cy="195.7" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="20.2" cy="68.6" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="37.0" cy="78.6" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="52.7" cy="88.1" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="68.0" cy="97.1" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="83.0" cy="105.6" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="97.7" cy="113.5" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="112.3" cy="121.1" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="126.6" cy="128.1" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="140.8" cy="134.7" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="154.9" cy="140.8" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="168.9" cy="146.5" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="182.7" cy="151.7" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="196.4" cy="156.5" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="210.0" cy="160.8" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="223.5" cy="164.8" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="236.9" cy="168.3" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="250.3" cy="171.5" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="263.5" cy="174.3" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="276.6" cy="176.6" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="289.7" cy="178.7" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="302.7" cy="180.4" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="315.6" cy="181.7" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="328.5" cy="182.8" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="341.3" cy="183.5" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="354.0" cy="184.0" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="366.7" cy="184.3" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="379.3" cy="184.3" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="27.2" cy="47.3" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="43.5" cy="59.1" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="58.6" cy="70.2" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="73.4" cy="80.8" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="87.9" cy="90.7" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="102.1" cy="100.1" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="116.2" cy="109.0" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="130.2" cy="117.2" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="144.0" cy="125.0" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="157.8" cy="132.2" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="171.4" cy="138.8" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="184.9" cy="145.0" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="198.4" cy="150.6" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="211.7" cy="155.7" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="225.0" cy="160.4" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="238.2" cy="164.5" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="251.3" cy="168.2" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="264.4" cy="171.5" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="277.4" cy="174.3" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="290.4" cy="176.7" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="303.3" cy="178.7" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="316.1" cy="180.3" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="328.9" cy="181.5" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="341.7" cy="182.4" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="354.4" cy="183.0" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="367.0" cy="183.3" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="379.6" cy="183.3" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="27.2" cy="332.7" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="43.5" cy="320.9" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="58.6" cy="309.8" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="73.4" cy="299.2" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="87.9" cy="289.3" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="102.1" cy="279.9" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="116.2" cy="271.0" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="130.2" cy="262.8" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="144.0" cy="255.0" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="157.8" cy="247.8" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="171.4" cy="241.2" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="184.9" cy="235.0" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="198.4" cy="229.4" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="211.7" cy="224.3" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="225.0" cy="219.6" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="238.2" cy="215.5" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="251.3" cy="211.8" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="264.4" cy="208.5" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="277.4" cy="205.7" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="290.4" cy="203.3" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="303.3" cy="201.3" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="316.1" cy="199.7" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="328.9" cy="198.5" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="341.7" cy="197.6" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="354.4" cy="197.0" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="367.0" cy="196.7" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="379.6" cy="196.7" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="35.0" cy="340.0" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="50.6" cy="327.7" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="65.2" cy="316.0" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="79.3" cy="304.9" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="93.3" cy="294.4" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="107.0" cy="284.5" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="120.7" cy="275.2" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="134.2" cy="266.5" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="147.6" cy="258.4" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="160.9" cy="250.8" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="174.2" cy="243.8" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="187.4" cy="237.4" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="200.5" cy="231.4" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="213.6" cy="226.0" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="226.6" cy="221.2" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="239.6" cy="216.8" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="252.5" cy="212.9" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="265.4" cy="209.5" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="278.3" cy="206.5" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="291.1" cy="204.0" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="303.9" cy="201.9" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="316.6" cy="200.2" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="329.4" cy="198.9" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="342.1" cy="198.0" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="354.7" cy="197.4" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="367.4" cy="197.1" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="380.0" cy="197.0" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="35.0" cy="40.0" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="50.6" cy="52.3" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="65.2" cy="64.0" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="79.3" cy="75.1" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="93.3" cy="85.6" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="107.0" cy="95.5" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="120.7" cy="104.8" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="134.2" cy="113.5" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="147.6" cy="121.6" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="160.9" cy="129.2" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="174.2" cy="136.2" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="187.4" cy="142.6" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="200.5" cy="148.6" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="213.6" cy="154.0" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="226.6" cy="158.8" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="239.6" cy="163.2" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="252.5" cy="167.1" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="265.4" cy="170.5" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="278.3" cy="173.5" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="291.1" cy="176.0" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="303.9" cy="178.1" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="316.6" cy="179.8" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="329.4" cy="181.1" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="342.1" cy="182.0" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="354.7" cy="182.6" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="367.4" cy="182.9" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="380.0" cy="183.0" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="42.8" cy="332.7" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="57.8" cy="320.9" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="71.7" cy="309.8" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="85.3" cy="299.2" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="98.7" cy="289.3" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="112.0" cy="279.9" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="125.1" cy="271.0" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="138.2" cy="262.8" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="151.1" cy="255.0" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="164.1" cy="247.8" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="177.0" cy="241.2" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="189.8" cy="235.0" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="202.7" cy="229.4" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="215.5" cy="224.3" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="228.2" cy="219.6" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="241.0" cy="215.5" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="253.7" cy="211.8" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="266.4" cy="208.5" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="279.1" cy="205.7" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="291.8" cy="203.3" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="304.5" cy="201.3" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="317.2" cy="199.7" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="329.8" cy="198.5" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="342.5" cy="197.6" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="355.1" cy="197.0" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="367.7" cy="196.7" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="380.4" cy="196.7" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="42.8" cy="47.3" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="57.8" cy="59.1" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="71.7" cy="70.2" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="85.3" cy="80.8" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="98.7" cy="90.7" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="112.0" cy="100.1" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="125.1" cy="109.0" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="138.2" cy="117.2" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="151.1" cy="125.0" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="164.1" cy="132.2" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="177.0" cy="138.8" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="189.8" cy="145.0" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="202.7" cy="150.6" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="215.5" cy="155.7" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="228.2" cy="160.4" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="241.0" cy="164.5" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="253.7" cy="168.2" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="266.4" cy="171.5" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="279.1" cy="174.3" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="291.8" cy="176.7" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="304.5" cy="178.7" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="317.2" cy="180.3" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="329.8" cy="181.5" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="342.5" cy="182.4" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="355.1" cy="183.0" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="367.7" cy="183.3" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="380.4" cy="183.3" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="49.8" cy="311.4" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="64.2" cy="301.4" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="77.6" cy="291.9" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="90.7" cy="282.9" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="103.6" cy="274.4" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="116.4" cy="266.5" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="129.1" cy="258.9" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="141.7" cy="251.9" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="154.4" cy="245.3" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="166.9" cy="239.2" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="179.5" cy="233.5" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="192.1" cy="228.3" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="204.6" cy="223.5" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="217.1" cy="219.2" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="229.7" cy="215.2" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="242.2" cy="211.7" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="254.8" cy="208.5" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="267.3" cy="205.7" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="279.9" cy="203.4" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="292.5" cy="201.3" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="305.1" cy="199.6" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="317.7" cy="198.3" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="330.3" cy="197.2" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="342.9" cy="196.5" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="355.5" cy="196.0" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="368.1" cy="195.7" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="380.7" cy="195.7" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="49.8" cy="68.6" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="64.2" cy="78.6" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="77.6" cy="88.1" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="90.7" cy="97.1" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="103.6" cy="105.6" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="116.4" cy="113.5" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="129.1" cy="121.1" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="141.7" cy="128.1" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="154.4" cy="134.7" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="166.9" cy="140.8" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="179.5" cy="146.5" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="192.1" cy="151.7" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="204.6" cy="156.5" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="217.1" cy="160.8" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="229.7" cy="164.8" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="242.2" cy="168.3" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="254.8" cy="171.5" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="267.3" cy="174.3" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="279.9" cy="176.6" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="292.5" cy="178.7" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="305.1" cy="180.4" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="317.7" cy="181.7" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="330.3" cy="182.8" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="342.9" cy="183.5" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="355.5" cy="184.0" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="368.1" cy="184.3" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="380.7" cy="184.3" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="55.4" cy="278.2" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="55.4" cy="101.8" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="69.3" cy="270.9" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="69.3" cy="109.1" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="82.3" cy="264.0" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="82.3" cy="116.0" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="95.0" cy="257.5" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="95.0" cy="122.5" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="107.5" cy="251.4" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="107.5" cy="128.6" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="119.9" cy="245.5" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="119.9" cy="134.5" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="132.3" cy="240.1" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="132.3" cy="139.9" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="144.6" cy="235.0" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="144.6" cy="145.0" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="156.9" cy="230.2" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="156.9" cy="149.8" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="169.2" cy="225.7" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="169.2" cy="154.3" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="181.5" cy="221.6" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="181.5" cy="158.4" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="193.8" cy="217.8" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="193.8" cy="162.2" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="206.1" cy="214.4" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="206.1" cy="165.6" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="218.5" cy="211.2" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="218.5" cy="168.8" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="230.8" cy="208.3" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="230.8" cy="171.7" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="243.2" cy="205.7" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="243.2" cy="174.3" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="255.6" cy="203.4" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="255.6" cy="176.6" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="268.1" cy="201.4" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="268.1" cy="178.6" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="280.5" cy="199.7" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="280.5" cy="180.3" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="293.0" cy="198.2" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="293.0" cy="181.8" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="305.5" cy="197.0" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="305.5" cy="183.0" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="318.0" cy="196.0" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="318.0" cy="184.0" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="330.6" cy="195.2" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="330.6" cy="184.8" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="343.2" cy="194.7" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="343.2" cy="185.3" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="355.7" cy="194.3" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="355.7" cy="185.7" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="368.3" cy="194.2" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="368.3" cy="185.8" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="381.0" cy="194.1" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="381.0" cy="185.9" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="59.0" cy="236.4" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="72.6" cy="232.5" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="85.3" cy="228.9" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="97.7" cy="225.5" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="110.0" cy="222.3" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="122.1" cy="219.2" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="134.3" cy="216.3" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="146.4" cy="213.6" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="158.5" cy="211.1" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="170.6" cy="208.8" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="182.8" cy="206.6" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="194.9" cy="204.6" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="207.1" cy="202.8" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="219.3" cy="201.1" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="231.6" cy="199.6" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="243.9" cy="198.3" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="256.2" cy="197.1" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="268.5" cy="196.0" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="280.9" cy="195.1" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="293.3" cy="194.3" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="305.8" cy="193.7" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="318.3" cy="193.2" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="330.8" cy="192.8" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="343.3" cy="192.5" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="355.9" cy="192.3" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="368.5" cy="192.2" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="381.1" cy="192.2" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="59.0" cy="143.6" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="72.6" cy="147.5" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="85.3" cy="151.1" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="97.7" cy="154.5" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="110.0" cy="157.7" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="122.1" cy="160.8" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="134.3" cy="163.7" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="146.4" cy="166.4" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="158.5" cy="168.9" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="170.6" cy="171.2" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="182.8" cy="173.4" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="194.9" cy="175.4" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="207.1" cy="177.2" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="219.3" cy="178.9" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="231.6" cy="180.4" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="243.9" cy="181.7" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="256.2" cy="182.9" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="268.5" cy="184.0" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="280.9" cy="184.9" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="293.3" cy="185.7" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="305.8" cy="186.3" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="318.3" cy="186.8" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="330.8" cy="187.2" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="343.3" cy="187.5" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="355.9" cy="187.7" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="368.5" cy="187.8" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="381.1" cy="187.8" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="60.2" cy="190.0" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="73.7" cy="190.0" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="86.3" cy="190.0" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="98.6" cy="190.0" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="110.8" cy="190.0" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="122.9" cy="190.0" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="135.0" cy="190.0" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="147.0" cy="190.0" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="159.1" cy="190.0" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="171.1" cy="190.0" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="183.2" cy="190.0" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="195.3" cy="190.0" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="207.5" cy="190.0" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="219.6" cy="190.0" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="231.8" cy="190.0" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="244.1" cy="190.0" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="256.4" cy="190.0" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="268.7" cy="190.0" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="281.1" cy="190.0" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="293.5" cy="190.0" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="305.9" cy="190.0" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="318.4" cy="190.0" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="330.9" cy="190.0" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="343.4" cy="190.0" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="356.0" cy="190.0" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="368.6" cy="190.0" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="381.2" cy="190.0" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
          </g>
        </svg>
      </div>

      {/* Mobile Vertical Vortex (tapers downwards) */}
      <div className="block md:hidden w-full max-w-[340px] mx-auto">
        <svg 
          viewBox="0 0 360 340" 
          className="w-full h-auto block"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="vortex-lines">
            <line x1="310.0" y1="25.0" x2="299.4" y2="33.8" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="299.4" y1="33.8" x2="289.3" y2="42.1" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="289.3" y1="42.1" x2="279.8" y2="50.1" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="279.8" y1="50.1" x2="270.8" y2="57.9" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="270.8" y1="57.9" x2="262.3" y2="65.7" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="262.3" y1="65.7" x2="254.3" y2="73.4" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="254.3" y1="73.4" x2="246.8" y2="81.1" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="246.8" y1="81.1" x2="239.8" y2="88.6" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="239.8" y1="88.6" x2="233.3" y2="96.2" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="233.3" y1="96.2" x2="227.3" y2="103.7" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="227.3" y1="103.7" x2="221.7" y2="111.1" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="221.7" y1="111.1" x2="216.6" y2="118.5" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="216.6" y1="118.5" x2="212.0" y2="125.9" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="212.0" y1="125.9" x2="207.8" y2="133.3" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="207.8" y1="133.3" x2="204.0" y2="140.6" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="204.0" y1="140.6" x2="200.7" y2="147.9" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="200.7" y1="147.9" x2="197.7" y2="155.2" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="197.7" y1="155.2" x2="195.2" y2="162.5" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="195.2" y1="162.5" x2="193.0" y2="169.8" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="193.0" y1="169.8" x2="191.2" y2="177.0" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="191.2" y1="177.0" x2="189.8" y2="184.2" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="189.8" y1="184.2" x2="188.7" y2="191.4" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="188.7" y1="191.4" x2="187.9" y2="198.6" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="187.9" y1="198.6" x2="187.3" y2="205.7" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="187.3" y1="205.7" x2="187.1" y2="212.9" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="187.1" y1="212.9" x2="187.0" y2="220.0" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="303.6" y1="31.7" x2="293.5" y2="40.0" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="293.5" y1="40.0" x2="284.0" y2="47.7" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="284.0" y1="47.7" x2="274.9" y2="55.2" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="274.9" y1="55.2" x2="266.3" y2="62.7" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="266.3" y1="62.7" x2="258.2" y2="70.0" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="258.2" y1="70.0" x2="250.6" y2="77.3" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="250.6" y1="77.3" x2="243.5" y2="84.5" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="243.5" y1="84.5" x2="236.9" y2="91.7" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="236.9" y1="91.7" x2="230.7" y2="98.9" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="230.7" y1="98.9" x2="225.0" y2="106.1" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="225.0" y1="106.1" x2="219.7" y2="113.3" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="219.7" y1="113.3" x2="214.8" y2="120.4" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="214.8" y1="120.4" x2="210.4" y2="127.6" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="210.4" y1="127.6" x2="206.4" y2="134.7" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="206.4" y1="134.7" x2="202.8" y2="141.9" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="202.8" y1="141.9" x2="199.6" y2="149.0" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="199.6" y1="149.0" x2="196.9" y2="156.2" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="196.9" y1="156.2" x2="194.4" y2="163.3" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="194.4" y1="163.3" x2="192.4" y2="170.4" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="192.4" y1="170.4" x2="190.7" y2="177.6" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="190.7" y1="177.6" x2="189.3" y2="184.7" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="189.3" y1="184.7" x2="188.2" y2="191.8" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="188.2" y1="191.8" x2="187.5" y2="199.0" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="187.5" y1="199.0" x2="187.0" y2="206.1" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="187.0" y1="206.1" x2="186.7" y2="213.2" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="186.7" y1="213.2" x2="186.7" y2="220.4" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="285.2" y1="37.8" x2="276.6" y2="45.6" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="276.6" y1="45.6" x2="268.4" y2="52.8" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="268.4" y1="52.8" x2="260.7" y2="59.9" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="260.7" y1="59.9" x2="253.4" y2="66.9" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="253.4" y1="66.9" x2="246.6" y2="73.8" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="246.6" y1="73.8" x2="240.1" y2="80.8" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="240.1" y1="80.8" x2="234.0" y2="87.7" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="234.0" y1="87.7" x2="228.4" y2="94.5" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="228.4" y1="94.5" x2="223.1" y2="101.4" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="223.1" y1="101.4" x2="218.2" y2="108.3" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="218.2" y1="108.3" x2="213.7" y2="115.2" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="213.7" y1="115.2" x2="209.6" y2="122.2" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="209.6" y1="122.2" x2="205.9" y2="129.1" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="205.9" y1="129.1" x2="202.5" y2="136.0" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="202.5" y1="136.0" x2="199.4" y2="143.0" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="199.4" y1="143.0" x2="196.7" y2="150.0" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="196.7" y1="150.0" x2="194.3" y2="157.0" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="194.3" y1="157.0" x2="192.3" y2="164.0" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="192.3" y1="164.0" x2="190.5" y2="171.0" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="190.5" y1="171.0" x2="189.1" y2="178.1" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="189.1" y1="178.1" x2="187.9" y2="185.2" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="187.9" y1="185.2" x2="187.0" y2="192.2" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="187.0" y1="192.2" x2="186.4" y2="199.3" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="186.4" y1="199.3" x2="185.9" y2="206.4" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="185.9" y1="206.4" x2="185.7" y2="213.6" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="185.7" y1="213.6" x2="185.7" y2="220.7" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="256.4" y1="42.7" x2="250.2" y2="50.1" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="250.2" y1="50.1" x2="244.3" y2="56.9" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="244.3" y1="56.9" x2="238.6" y2="63.6" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="238.6" y1="63.6" x2="233.3" y2="70.3" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="233.3" y1="70.3" x2="228.4" y2="76.9" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="228.4" y1="76.9" x2="223.7" y2="83.5" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="223.7" y1="83.5" x2="219.3" y2="90.1" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="219.3" y1="90.1" x2="215.1" y2="96.8" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="215.1" y1="96.8" x2="211.3" y2="103.4" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="211.3" y1="103.4" x2="207.8" y2="110.1" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="207.8" y1="110.1" x2="204.5" y2="116.8" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="204.5" y1="116.8" x2="201.5" y2="123.5" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="201.5" y1="123.5" x2="198.8" y2="130.3" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="198.8" y1="130.3" x2="196.3" y2="137.1" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="196.3" y1="137.1" x2="194.1" y2="143.9" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="194.1" y1="143.9" x2="192.1" y2="150.8" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="192.1" y1="150.8" x2="190.4" y2="157.6" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="190.4" y1="157.6" x2="188.9" y2="164.6" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="188.9" y1="164.6" x2="187.6" y2="171.5" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="187.6" y1="171.5" x2="186.6" y2="178.5" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="186.6" y1="178.5" x2="185.7" y2="185.5" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="185.7" y1="185.5" x2="185.1" y2="192.6" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="185.1" y1="192.6" x2="184.6" y2="199.6" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="184.6" y1="199.6" x2="184.3" y2="206.7" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="184.3" y1="206.7" x2="184.2" y2="213.8" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="184.2" y1="213.8" x2="184.1" y2="221.0" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="220.2" y1="45.8" x2="216.9" y2="52.9" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="216.9" y1="52.9" x2="213.8" y2="59.5" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="213.8" y1="59.5" x2="210.8" y2="66.0" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="210.8" y1="66.0" x2="208.0" y2="72.4" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="208.0" y1="72.4" x2="205.4" y2="78.9" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="205.4" y1="78.9" x2="203.0" y2="85.3" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="203.0" y1="85.3" x2="200.6" y2="91.7" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="200.6" y1="91.7" x2="198.5" y2="98.2" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="198.5" y1="98.2" x2="196.5" y2="104.7" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="196.5" y1="104.7" x2="194.6" y2="111.2" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="194.6" y1="111.2" x2="192.9" y2="117.8" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="192.9" y1="117.8" x2="191.3" y2="124.4" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="191.3" y1="124.4" x2="189.9" y2="131.0" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="189.9" y1="131.0" x2="188.6" y2="137.7" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="188.6" y1="137.7" x2="187.4" y2="144.5" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="187.4" y1="144.5" x2="186.4" y2="151.2" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="186.4" y1="151.2" x2="185.5" y2="158.1" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="185.5" y1="158.1" x2="184.7" y2="164.9" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="184.7" y1="164.9" x2="184.0" y2="171.8" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="184.0" y1="171.8" x2="183.5" y2="178.8" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="183.5" y1="178.8" x2="183.0" y2="185.8" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="183.0" y1="185.8" x2="182.7" y2="192.8" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="182.7" y1="192.8" x2="182.4" y2="199.8" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="182.4" y1="199.8" x2="182.3" y2="206.9" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="182.3" y1="206.9" x2="182.2" y2="214.0" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="182.2" y1="214.0" x2="182.2" y2="221.1" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="180.0" y1="46.8" x2="180.0" y2="53.9" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="180.0" y1="53.9" x2="180.0" y2="60.4" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="180.0" y1="60.4" x2="180.0" y2="66.8" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="180.0" y1="66.8" x2="180.0" y2="73.2" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="180.0" y1="73.2" x2="180.0" y2="79.5" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="180.0" y1="79.5" x2="180.0" y2="85.9" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="180.0" y1="85.9" x2="180.0" y2="92.3" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="180.0" y1="92.3" x2="180.0" y2="98.7" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="180.0" y1="98.7" x2="180.0" y2="105.1" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="180.0" y1="105.1" x2="180.0" y2="111.6" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="180.0" y1="111.6" x2="180.0" y2="118.1" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="180.0" y1="118.1" x2="180.0" y2="124.7" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="180.0" y1="124.7" x2="180.0" y2="131.3" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="180.0" y1="131.3" x2="180.0" y2="138.0" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="180.0" y1="138.0" x2="180.0" y2="144.7" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="180.0" y1="144.7" x2="180.0" y2="151.4" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="180.0" y1="151.4" x2="180.0" y2="158.2" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="180.0" y1="158.2" x2="180.0" y2="165.1" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="180.0" y1="165.1" x2="180.0" y2="171.9" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="180.0" y1="171.9" x2="180.0" y2="178.9" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="180.0" y1="178.9" x2="180.0" y2="185.8" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="180.0" y1="185.8" x2="180.0" y2="192.8" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="180.0" y1="192.8" x2="180.0" y2="199.9" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="180.0" y1="199.9" x2="180.0" y2="207.0" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="180.0" y1="207.0" x2="180.0" y2="214.1" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="180.0" y1="214.1" x2="180.0" y2="221.2" stroke="#62B000" strokeOpacity="0.28" strokeWidth="0.8" />
            <line x1="139.8" y1="45.8" x2="143.1" y2="52.9" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="143.1" y1="52.9" x2="146.2" y2="59.5" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="146.2" y1="59.5" x2="149.2" y2="66.0" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="149.2" y1="66.0" x2="152.0" y2="72.4" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="152.0" y1="72.4" x2="154.6" y2="78.9" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="154.6" y1="78.9" x2="157.0" y2="85.3" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="157.0" y1="85.3" x2="159.4" y2="91.7" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="159.4" y1="91.7" x2="161.5" y2="98.2" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="161.5" y1="98.2" x2="163.5" y2="104.7" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="163.5" y1="104.7" x2="165.4" y2="111.2" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="165.4" y1="111.2" x2="167.1" y2="117.8" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="167.1" y1="117.8" x2="168.7" y2="124.4" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="168.7" y1="124.4" x2="170.1" y2="131.0" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="170.1" y1="131.0" x2="171.4" y2="137.7" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="171.4" y1="137.7" x2="172.6" y2="144.5" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="172.6" y1="144.5" x2="173.6" y2="151.2" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="173.6" y1="151.2" x2="174.5" y2="158.1" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="174.5" y1="158.1" x2="175.3" y2="164.9" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="175.3" y1="164.9" x2="176.0" y2="171.8" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="176.0" y1="171.8" x2="176.5" y2="178.8" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="176.5" y1="178.8" x2="177.0" y2="185.8" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="177.0" y1="185.8" x2="177.3" y2="192.8" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="177.3" y1="192.8" x2="177.6" y2="199.8" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="177.6" y1="199.8" x2="177.7" y2="206.9" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="177.7" y1="206.9" x2="177.8" y2="214.0" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="177.8" y1="214.0" x2="177.8" y2="221.1" stroke="#62B000" strokeOpacity="0.27" strokeWidth="0.8" />
            <line x1="103.6" y1="42.7" x2="109.8" y2="50.1" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="109.8" y1="50.1" x2="115.7" y2="56.9" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="115.7" y1="56.9" x2="121.4" y2="63.6" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="121.4" y1="63.6" x2="126.7" y2="70.3" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="126.7" y1="70.3" x2="131.6" y2="76.9" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="131.6" y1="76.9" x2="136.3" y2="83.5" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="136.3" y1="83.5" x2="140.7" y2="90.1" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="140.7" y1="90.1" x2="144.9" y2="96.8" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="144.9" y1="96.8" x2="148.7" y2="103.4" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="148.7" y1="103.4" x2="152.2" y2="110.1" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="152.2" y1="110.1" x2="155.5" y2="116.8" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="155.5" y1="116.8" x2="158.5" y2="123.5" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="158.5" y1="123.5" x2="161.2" y2="130.3" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="161.2" y1="130.3" x2="163.7" y2="137.1" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="163.7" y1="137.1" x2="165.9" y2="143.9" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="165.9" y1="143.9" x2="167.9" y2="150.8" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="167.9" y1="150.8" x2="169.6" y2="157.6" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="169.6" y1="157.6" x2="171.1" y2="164.6" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="171.1" y1="164.6" x2="172.4" y2="171.5" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="172.4" y1="171.5" x2="173.4" y2="178.5" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="173.4" y1="178.5" x2="174.3" y2="185.5" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="174.3" y1="185.5" x2="174.9" y2="192.6" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="174.9" y1="192.6" x2="175.4" y2="199.6" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="175.4" y1="199.6" x2="175.7" y2="206.7" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="175.7" y1="206.7" x2="175.8" y2="213.8" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="175.8" y1="213.8" x2="175.9" y2="221.0" stroke="#62B000" strokeOpacity="0.25" strokeWidth="0.8" />
            <line x1="74.8" y1="37.8" x2="83.4" y2="45.6" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="83.4" y1="45.6" x2="91.6" y2="52.8" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="91.6" y1="52.8" x2="99.3" y2="59.9" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="99.3" y1="59.9" x2="106.6" y2="66.9" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="106.6" y1="66.9" x2="113.4" y2="73.8" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="113.4" y1="73.8" x2="119.9" y2="80.8" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="119.9" y1="80.8" x2="126.0" y2="87.7" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="126.0" y1="87.7" x2="131.6" y2="94.5" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="131.6" y1="94.5" x2="136.9" y2="101.4" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="136.9" y1="101.4" x2="141.8" y2="108.3" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="141.8" y1="108.3" x2="146.3" y2="115.2" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="146.3" y1="115.2" x2="150.4" y2="122.2" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="150.4" y1="122.2" x2="154.1" y2="129.1" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="154.1" y1="129.1" x2="157.5" y2="136.0" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="157.5" y1="136.0" x2="160.6" y2="143.0" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="160.6" y1="143.0" x2="163.3" y2="150.0" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="163.3" y1="150.0" x2="165.7" y2="157.0" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="165.7" y1="157.0" x2="167.7" y2="164.0" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="167.7" y1="164.0" x2="169.5" y2="171.0" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="169.5" y1="171.0" x2="170.9" y2="178.1" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="170.9" y1="178.1" x2="172.1" y2="185.2" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="172.1" y1="185.2" x2="173.0" y2="192.2" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="173.0" y1="192.2" x2="173.6" y2="199.3" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="173.6" y1="199.3" x2="174.1" y2="206.4" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="174.1" y1="206.4" x2="174.3" y2="213.6" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="174.3" y1="213.6" x2="174.3" y2="220.7" stroke="#62B000" strokeOpacity="0.22" strokeWidth="0.8" />
            <line x1="56.4" y1="31.7" x2="66.5" y2="40.0" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="66.5" y1="40.0" x2="76.0" y2="47.7" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="76.0" y1="47.7" x2="85.1" y2="55.2" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="85.1" y1="55.2" x2="93.7" y2="62.7" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="93.7" y1="62.7" x2="101.8" y2="70.0" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="101.8" y1="70.0" x2="109.4" y2="77.3" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="109.4" y1="77.3" x2="116.5" y2="84.5" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="116.5" y1="84.5" x2="123.1" y2="91.7" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="123.1" y1="91.7" x2="129.3" y2="98.9" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="129.3" y1="98.9" x2="135.0" y2="106.1" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="135.0" y1="106.1" x2="140.3" y2="113.3" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="140.3" y1="113.3" x2="145.2" y2="120.4" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="145.2" y1="120.4" x2="149.6" y2="127.6" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="149.6" y1="127.6" x2="153.6" y2="134.7" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="153.6" y1="134.7" x2="157.2" y2="141.9" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="157.2" y1="141.9" x2="160.4" y2="149.0" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="160.4" y1="149.0" x2="163.1" y2="156.2" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="163.1" y1="156.2" x2="165.6" y2="163.3" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="165.6" y1="163.3" x2="167.6" y2="170.4" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="167.6" y1="170.4" x2="169.3" y2="177.6" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="169.3" y1="177.6" x2="170.7" y2="184.7" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="170.7" y1="184.7" x2="171.8" y2="191.8" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="171.8" y1="191.8" x2="172.5" y2="199.0" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="172.5" y1="199.0" x2="173.0" y2="206.1" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="173.0" y1="206.1" x2="173.3" y2="213.2" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="173.3" y1="213.2" x2="173.3" y2="220.4" stroke="#62B000" strokeOpacity="0.18" strokeWidth="0.8" />
            <line x1="50.0" y1="25.0" x2="60.6" y2="33.8" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="60.6" y1="33.8" x2="70.7" y2="42.1" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="70.7" y1="42.1" x2="80.2" y2="50.1" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="80.2" y1="50.1" x2="89.2" y2="57.9" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="89.2" y1="57.9" x2="97.7" y2="65.7" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="97.7" y1="65.7" x2="105.7" y2="73.4" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="105.7" y1="73.4" x2="113.2" y2="81.1" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="113.2" y1="81.1" x2="120.2" y2="88.6" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="120.2" y1="88.6" x2="126.7" y2="96.2" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="126.7" y1="96.2" x2="132.7" y2="103.7" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="132.7" y1="103.7" x2="138.3" y2="111.1" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="138.3" y1="111.1" x2="143.4" y2="118.5" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="143.4" y1="118.5" x2="148.0" y2="125.9" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="148.0" y1="125.9" x2="152.2" y2="133.3" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="152.2" y1="133.3" x2="156.0" y2="140.6" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="156.0" y1="140.6" x2="159.3" y2="147.9" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="159.3" y1="147.9" x2="162.3" y2="155.2" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="162.3" y1="155.2" x2="164.8" y2="162.5" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="164.8" y1="162.5" x2="167.0" y2="169.8" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="167.0" y1="169.8" x2="168.8" y2="177.0" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="168.8" y1="177.0" x2="170.2" y2="184.2" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="170.2" y1="184.2" x2="171.3" y2="191.4" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="171.3" y1="191.4" x2="172.1" y2="198.6" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="172.1" y1="198.6" x2="172.7" y2="205.7" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="172.7" y1="205.7" x2="172.9" y2="212.9" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="172.9" y1="212.9" x2="173.0" y2="220.0" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="56.4" y1="18.3" x2="66.5" y2="27.6" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="66.5" y1="27.6" x2="76.0" y2="36.4" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="76.0" y1="36.4" x2="85.1" y2="44.9" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="85.1" y1="44.9" x2="93.7" y2="53.2" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="93.7" y1="53.2" x2="101.8" y2="61.5" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="101.8" y1="61.5" x2="109.4" y2="69.6" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="109.4" y1="69.6" x2="116.5" y2="77.6" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="116.5" y1="77.6" x2="123.1" y2="85.5" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="123.1" y1="85.5" x2="129.3" y2="93.4" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="129.3" y1="93.4" x2="135.0" y2="101.2" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="135.0" y1="101.2" x2="140.3" y2="109.0" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="140.3" y1="109.0" x2="145.2" y2="116.6" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="145.2" y1="116.6" x2="149.6" y2="124.3" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="149.6" y1="124.3" x2="153.6" y2="131.9" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="153.6" y1="131.9" x2="157.2" y2="139.4" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="157.2" y1="139.4" x2="160.4" y2="146.9" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="160.4" y1="146.9" x2="163.1" y2="154.3" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="163.1" y1="154.3" x2="165.6" y2="161.7" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="165.6" y1="161.7" x2="167.6" y2="169.1" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="167.6" y1="169.1" x2="169.3" y2="176.4" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="169.3" y1="176.4" x2="170.7" y2="183.7" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="170.7" y1="183.7" x2="171.8" y2="190.9" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="171.8" y1="190.9" x2="172.5" y2="198.2" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="172.5" y1="198.2" x2="173.0" y2="205.3" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="173.0" y1="205.3" x2="173.3" y2="212.5" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="173.3" y1="212.5" x2="173.3" y2="219.6" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="74.8" y1="12.2" x2="83.4" y2="22.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="83.4" y1="22.0" x2="91.6" y2="31.3" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="91.6" y1="31.3" x2="99.3" y2="40.2" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="99.3" y1="40.2" x2="106.6" y2="49.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="106.6" y1="49.0" x2="113.4" y2="57.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="113.4" y1="57.6" x2="119.9" y2="66.1" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="119.9" y1="66.1" x2="126.0" y2="74.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="126.0" y1="74.5" x2="131.6" y2="82.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="131.6" y1="82.7" x2="136.9" y2="90.9" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="136.9" y1="90.9" x2="141.8" y2="99.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="141.8" y1="99.0" x2="146.3" y2="107.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="146.3" y1="107.0" x2="150.4" y2="114.9" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="150.4" y1="114.9" x2="154.1" y2="122.8" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="154.1" y1="122.8" x2="157.5" y2="130.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="157.5" y1="130.6" x2="160.6" y2="138.3" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="160.6" y1="138.3" x2="163.3" y2="145.9" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="163.3" y1="145.9" x2="165.7" y2="153.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="165.7" y1="153.5" x2="167.7" y2="161.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="167.7" y1="161.0" x2="169.5" y2="168.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="169.5" y1="168.5" x2="170.9" y2="175.9" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="170.9" y1="175.9" x2="172.1" y2="183.2" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="172.1" y1="183.2" x2="173.0" y2="190.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="173.0" y1="190.5" x2="173.6" y2="197.8" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="173.6" y1="197.8" x2="174.1" y2="205.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="174.1" y1="205.0" x2="174.3" y2="212.2" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="174.3" y1="212.2" x2="174.3" y2="219.3" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="103.6" y1="7.3" x2="109.8" y2="17.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="109.8" y1="17.6" x2="115.7" y2="27.2" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="115.7" y1="27.2" x2="121.4" y2="36.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="121.4" y1="36.5" x2="126.7" y2="45.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="126.7" y1="45.6" x2="131.6" y2="54.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="131.6" y1="54.5" x2="136.3" y2="63.3" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="136.3" y1="63.3" x2="140.7" y2="72.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="140.7" y1="72.0" x2="144.9" y2="80.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="144.9" y1="80.5" x2="148.7" y2="88.9" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="148.7" y1="88.9" x2="152.2" y2="97.2" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="152.2" y1="97.2" x2="155.5" y2="105.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="155.5" y1="105.5" x2="158.5" y2="113.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="158.5" y1="113.6" x2="161.2" y2="121.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="161.2" y1="121.6" x2="163.7" y2="129.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="163.7" y1="129.5" x2="165.9" y2="137.4" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="165.9" y1="137.4" x2="167.9" y2="145.1" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="167.9" y1="145.1" x2="169.6" y2="152.8" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="169.6" y1="152.8" x2="171.1" y2="160.4" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="171.1" y1="160.4" x2="172.4" y2="168.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="172.4" y1="168.0" x2="173.4" y2="175.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="173.4" y1="175.5" x2="174.3" y2="182.9" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="174.3" y1="182.9" x2="174.9" y2="190.2" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="174.9" y1="190.2" x2="175.4" y2="197.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="175.4" y1="197.5" x2="175.7" y2="204.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="175.7" y1="204.7" x2="175.8" y2="211.9" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="175.8" y1="211.9" x2="175.9" y2="219.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="139.8" y1="4.2" x2="143.1" y2="14.8" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="143.1" y1="14.8" x2="146.2" y2="24.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="146.2" y1="24.6" x2="149.2" y2="34.1" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="149.2" y1="34.1" x2="152.0" y2="43.4" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="152.0" y1="43.4" x2="154.6" y2="52.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="154.6" y1="52.6" x2="157.0" y2="61.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="157.0" y1="61.6" x2="159.4" y2="70.4" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="159.4" y1="70.4" x2="161.5" y2="79.1" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="161.5" y1="79.1" x2="163.5" y2="87.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="163.5" y1="87.7" x2="165.4" y2="96.1" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="165.4" y1="96.1" x2="167.1" y2="104.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="167.1" y1="104.5" x2="168.7" y2="112.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="168.7" y1="112.7" x2="170.1" y2="120.8" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="170.1" y1="120.8" x2="171.4" y2="128.9" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="171.4" y1="128.9" x2="172.6" y2="136.8" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="172.6" y1="136.8" x2="173.6" y2="144.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="173.6" y1="144.6" x2="174.5" y2="152.4" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="174.5" y1="152.4" x2="175.3" y2="160.1" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="175.3" y1="160.1" x2="176.0" y2="167.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="176.0" y1="167.7" x2="176.5" y2="175.2" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="176.5" y1="175.2" x2="177.0" y2="182.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="177.0" y1="182.6" x2="177.3" y2="190.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="177.3" y1="190.0" x2="177.6" y2="197.3" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="177.6" y1="197.3" x2="177.7" y2="204.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="177.7" y1="204.5" x2="177.8" y2="211.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="177.8" y1="211.7" x2="177.8" y2="218.9" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="180.0" y1="3.2" x2="180.0" y2="13.8" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="180.0" y1="13.8" x2="180.0" y2="23.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="180.0" y1="23.7" x2="180.0" y2="33.3" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="180.0" y1="33.3" x2="180.0" y2="42.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="180.0" y1="42.7" x2="180.0" y2="51.9" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="180.0" y1="51.9" x2="180.0" y2="60.9" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="180.0" y1="60.9" x2="180.0" y2="69.8" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="180.0" y1="69.8" x2="180.0" y2="78.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="180.0" y1="78.6" x2="180.0" y2="87.2" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="180.0" y1="87.2" x2="180.0" y2="95.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="180.0" y1="95.7" x2="180.0" y2="104.1" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="180.0" y1="104.1" x2="180.0" y2="112.4" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="180.0" y1="112.4" x2="180.0" y2="120.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="180.0" y1="120.6" x2="180.0" y2="128.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="180.0" y1="128.6" x2="180.0" y2="136.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="180.0" y1="136.6" x2="180.0" y2="144.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="180.0" y1="144.5" x2="180.0" y2="152.3" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="180.0" y1="152.3" x2="180.0" y2="160.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="180.0" y1="160.0" x2="180.0" y2="167.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="180.0" y1="167.6" x2="180.0" y2="175.1" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="180.0" y1="175.1" x2="180.0" y2="182.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="180.0" y1="182.5" x2="180.0" y2="189.9" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="180.0" y1="189.9" x2="180.0" y2="197.2" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="180.0" y1="197.2" x2="180.0" y2="204.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="180.0" y1="204.5" x2="180.0" y2="211.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="180.0" y1="211.7" x2="180.0" y2="218.8" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="220.2" y1="4.2" x2="216.9" y2="14.8" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="216.9" y1="14.8" x2="213.8" y2="24.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="213.8" y1="24.6" x2="210.8" y2="34.1" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="210.8" y1="34.1" x2="208.0" y2="43.4" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="208.0" y1="43.4" x2="205.4" y2="52.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="205.4" y1="52.6" x2="203.0" y2="61.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="203.0" y1="61.6" x2="200.6" y2="70.4" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="200.6" y1="70.4" x2="198.5" y2="79.1" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="198.5" y1="79.1" x2="196.5" y2="87.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="196.5" y1="87.7" x2="194.6" y2="96.1" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="194.6" y1="96.1" x2="192.9" y2="104.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="192.9" y1="104.5" x2="191.3" y2="112.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="191.3" y1="112.7" x2="189.9" y2="120.8" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="189.9" y1="120.8" x2="188.6" y2="128.9" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="188.6" y1="128.9" x2="187.4" y2="136.8" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="187.4" y1="136.8" x2="186.4" y2="144.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="186.4" y1="144.6" x2="185.5" y2="152.4" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="185.5" y1="152.4" x2="184.7" y2="160.1" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="184.7" y1="160.1" x2="184.0" y2="167.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="184.0" y1="167.7" x2="183.5" y2="175.2" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="183.5" y1="175.2" x2="183.0" y2="182.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="183.0" y1="182.6" x2="182.7" y2="190.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="182.7" y1="190.0" x2="182.4" y2="197.3" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="182.4" y1="197.3" x2="182.3" y2="204.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="182.3" y1="204.5" x2="182.2" y2="211.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="182.2" y1="211.7" x2="182.2" y2="218.9" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="256.4" y1="7.3" x2="250.2" y2="17.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="250.2" y1="17.6" x2="244.3" y2="27.2" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="244.3" y1="27.2" x2="238.6" y2="36.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="238.6" y1="36.5" x2="233.3" y2="45.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="233.3" y1="45.6" x2="228.4" y2="54.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="228.4" y1="54.5" x2="223.7" y2="63.3" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="223.7" y1="63.3" x2="219.3" y2="72.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="219.3" y1="72.0" x2="215.1" y2="80.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="215.1" y1="80.5" x2="211.3" y2="88.9" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="211.3" y1="88.9" x2="207.8" y2="97.2" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="207.8" y1="97.2" x2="204.5" y2="105.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="204.5" y1="105.5" x2="201.5" y2="113.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="201.5" y1="113.6" x2="198.8" y2="121.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="198.8" y1="121.6" x2="196.3" y2="129.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="196.3" y1="129.5" x2="194.1" y2="137.4" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="194.1" y1="137.4" x2="192.1" y2="145.1" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="192.1" y1="145.1" x2="190.4" y2="152.8" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="190.4" y1="152.8" x2="188.9" y2="160.4" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="188.9" y1="160.4" x2="187.6" y2="168.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="187.6" y1="168.0" x2="186.6" y2="175.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="186.6" y1="175.5" x2="185.7" y2="182.9" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="185.7" y1="182.9" x2="185.1" y2="190.2" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="185.1" y1="190.2" x2="184.6" y2="197.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="184.6" y1="197.5" x2="184.3" y2="204.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="184.3" y1="204.7" x2="184.2" y2="211.9" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="184.2" y1="211.9" x2="184.1" y2="219.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="285.2" y1="12.2" x2="276.6" y2="22.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="276.6" y1="22.0" x2="268.4" y2="31.3" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="268.4" y1="31.3" x2="260.7" y2="40.2" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="260.7" y1="40.2" x2="253.4" y2="49.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="253.4" y1="49.0" x2="246.6" y2="57.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="246.6" y1="57.6" x2="240.1" y2="66.1" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="240.1" y1="66.1" x2="234.0" y2="74.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="234.0" y1="74.5" x2="228.4" y2="82.7" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="228.4" y1="82.7" x2="223.1" y2="90.9" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="223.1" y1="90.9" x2="218.2" y2="99.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="218.2" y1="99.0" x2="213.7" y2="107.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="213.7" y1="107.0" x2="209.6" y2="114.9" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="209.6" y1="114.9" x2="205.9" y2="122.8" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="205.9" y1="122.8" x2="202.5" y2="130.6" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="202.5" y1="130.6" x2="199.4" y2="138.3" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="199.4" y1="138.3" x2="196.7" y2="145.9" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="196.7" y1="145.9" x2="194.3" y2="153.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="194.3" y1="153.5" x2="192.3" y2="161.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="192.3" y1="161.0" x2="190.5" y2="168.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="190.5" y1="168.5" x2="189.1" y2="175.9" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="189.1" y1="175.9" x2="187.9" y2="183.2" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="187.9" y1="183.2" x2="187.0" y2="190.5" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="187.0" y1="190.5" x2="186.4" y2="197.8" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="186.4" y1="197.8" x2="185.9" y2="205.0" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="185.9" y1="205.0" x2="185.7" y2="212.2" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="185.7" y1="212.2" x2="185.7" y2="219.3" stroke="#62B000" strokeOpacity="0.06" strokeWidth="0.8" />
            <line x1="303.6" y1="18.3" x2="293.5" y2="27.6" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="293.5" y1="27.6" x2="284.0" y2="36.4" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="284.0" y1="36.4" x2="274.9" y2="44.9" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="274.9" y1="44.9" x2="266.3" y2="53.2" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="266.3" y1="53.2" x2="258.2" y2="61.5" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="258.2" y1="61.5" x2="250.6" y2="69.6" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="250.6" y1="69.6" x2="243.5" y2="77.6" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="243.5" y1="77.6" x2="236.9" y2="85.5" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="236.9" y1="85.5" x2="230.7" y2="93.4" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="230.7" y1="93.4" x2="225.0" y2="101.2" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="225.0" y1="101.2" x2="219.7" y2="109.0" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="219.7" y1="109.0" x2="214.8" y2="116.6" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="214.8" y1="116.6" x2="210.4" y2="124.3" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="210.4" y1="124.3" x2="206.4" y2="131.9" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="206.4" y1="131.9" x2="202.8" y2="139.4" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="202.8" y1="139.4" x2="199.6" y2="146.9" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="199.6" y1="146.9" x2="196.9" y2="154.3" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="196.9" y1="154.3" x2="194.4" y2="161.7" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="194.4" y1="161.7" x2="192.4" y2="169.1" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="192.4" y1="169.1" x2="190.7" y2="176.4" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="190.7" y1="176.4" x2="189.3" y2="183.7" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="189.3" y1="183.7" x2="188.2" y2="190.9" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="188.2" y1="190.9" x2="187.5" y2="198.2" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="187.5" y1="198.2" x2="187.0" y2="205.3" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="187.0" y1="205.3" x2="186.7" y2="212.5" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="186.7" y1="212.5" x2="186.7" y2="219.6" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="310.0" y1="25.0" x2="303.6" y2="31.7" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="303.6" y1="31.7" x2="285.2" y2="37.8" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="285.2" y1="37.8" x2="256.4" y2="42.7" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="256.4" y1="42.7" x2="220.2" y2="45.8" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="220.2" y1="45.8" x2="180.0" y2="46.8" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="180.0" y1="46.8" x2="139.8" y2="45.8" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="139.8" y1="45.8" x2="103.6" y2="42.7" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="103.6" y1="42.7" x2="74.8" y2="37.8" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="74.8" y1="37.8" x2="56.4" y2="31.7" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="56.4" y1="31.7" x2="50.0" y2="25.0" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="50.0" y1="25.0" x2="56.4" y2="18.3" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="56.4" y1="18.3" x2="74.8" y2="12.2" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="74.8" y1="12.2" x2="103.6" y2="7.3" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="103.6" y1="7.3" x2="139.8" y2="4.2" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="139.8" y1="4.2" x2="180.0" y2="3.2" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="180.0" y1="3.2" x2="220.2" y2="4.2" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="220.2" y1="4.2" x2="256.4" y2="7.3" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="256.4" y1="7.3" x2="285.2" y2="12.2" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="285.2" y1="12.2" x2="303.6" y2="18.3" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="303.6" y1="18.3" x2="310.0" y2="25.0" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="289.3" y1="42.1" x2="284.0" y2="47.7" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="284.0" y1="47.7" x2="268.4" y2="52.8" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="268.4" y1="52.8" x2="244.3" y2="56.9" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="244.3" y1="56.9" x2="213.8" y2="59.5" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="213.8" y1="59.5" x2="180.0" y2="60.4" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="180.0" y1="60.4" x2="146.2" y2="59.5" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="146.2" y1="59.5" x2="115.7" y2="56.9" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="115.7" y1="56.9" x2="91.6" y2="52.8" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="91.6" y1="52.8" x2="76.0" y2="47.7" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="76.0" y1="47.7" x2="70.7" y2="42.1" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="70.7" y1="42.1" x2="76.0" y2="36.4" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="76.0" y1="36.4" x2="91.6" y2="31.3" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="91.6" y1="31.3" x2="115.7" y2="27.2" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="115.7" y1="27.2" x2="146.2" y2="24.6" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="146.2" y1="24.6" x2="180.0" y2="23.7" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="180.0" y1="23.7" x2="213.8" y2="24.6" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="213.8" y1="24.6" x2="244.3" y2="27.2" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="244.3" y1="27.2" x2="268.4" y2="31.3" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="268.4" y1="31.3" x2="284.0" y2="36.4" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="284.0" y1="36.4" x2="289.3" y2="42.1" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="270.8" y1="57.9" x2="266.3" y2="62.7" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="266.3" y1="62.7" x2="253.4" y2="66.9" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="253.4" y1="66.9" x2="233.3" y2="70.3" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="233.3" y1="70.3" x2="208.0" y2="72.4" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="208.0" y1="72.4" x2="180.0" y2="73.2" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="180.0" y1="73.2" x2="152.0" y2="72.4" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="152.0" y1="72.4" x2="126.7" y2="70.3" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="126.7" y1="70.3" x2="106.6" y2="66.9" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="106.6" y1="66.9" x2="93.7" y2="62.7" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="93.7" y1="62.7" x2="89.2" y2="57.9" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="89.2" y1="57.9" x2="93.7" y2="53.2" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="93.7" y1="53.2" x2="106.6" y2="49.0" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="106.6" y1="49.0" x2="126.7" y2="45.6" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="126.7" y1="45.6" x2="152.0" y2="43.4" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="152.0" y1="43.4" x2="180.0" y2="42.7" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="180.0" y1="42.7" x2="208.0" y2="43.4" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="208.0" y1="43.4" x2="233.3" y2="45.6" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="233.3" y1="45.6" x2="253.4" y2="49.0" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="253.4" y1="49.0" x2="266.3" y2="53.2" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="266.3" y1="53.2" x2="270.8" y2="57.9" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="254.3" y1="73.4" x2="250.6" y2="77.3" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="250.6" y1="77.3" x2="240.1" y2="80.8" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="240.1" y1="80.8" x2="223.7" y2="83.5" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="223.7" y1="83.5" x2="203.0" y2="85.3" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="203.0" y1="85.3" x2="180.0" y2="85.9" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="180.0" y1="85.9" x2="157.0" y2="85.3" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="157.0" y1="85.3" x2="136.3" y2="83.5" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="136.3" y1="83.5" x2="119.9" y2="80.8" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="119.9" y1="80.8" x2="109.4" y2="77.3" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="109.4" y1="77.3" x2="105.7" y2="73.4" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="105.7" y1="73.4" x2="109.4" y2="69.6" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="109.4" y1="69.6" x2="119.9" y2="66.1" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="119.9" y1="66.1" x2="136.3" y2="63.3" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="136.3" y1="63.3" x2="157.0" y2="61.6" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="157.0" y1="61.6" x2="180.0" y2="60.9" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="180.0" y1="60.9" x2="203.0" y2="61.6" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="203.0" y1="61.6" x2="223.7" y2="63.3" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="223.7" y1="63.3" x2="240.1" y2="66.1" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="240.1" y1="66.1" x2="250.6" y2="69.6" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="250.6" y1="69.6" x2="254.3" y2="73.4" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="239.8" y1="88.6" x2="236.9" y2="91.7" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="236.9" y1="91.7" x2="228.4" y2="94.5" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="228.4" y1="94.5" x2="215.1" y2="96.8" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="215.1" y1="96.8" x2="198.5" y2="98.2" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="198.5" y1="98.2" x2="180.0" y2="98.7" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="180.0" y1="98.7" x2="161.5" y2="98.2" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="161.5" y1="98.2" x2="144.9" y2="96.8" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="144.9" y1="96.8" x2="131.6" y2="94.5" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="131.6" y1="94.5" x2="123.1" y2="91.7" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="123.1" y1="91.7" x2="120.2" y2="88.6" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="120.2" y1="88.6" x2="123.1" y2="85.5" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="123.1" y1="85.5" x2="131.6" y2="82.7" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="131.6" y1="82.7" x2="144.9" y2="80.5" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="144.9" y1="80.5" x2="161.5" y2="79.1" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="161.5" y1="79.1" x2="180.0" y2="78.6" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="180.0" y1="78.6" x2="198.5" y2="79.1" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="198.5" y1="79.1" x2="215.1" y2="80.5" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="215.1" y1="80.5" x2="228.4" y2="82.7" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="228.4" y1="82.7" x2="236.9" y2="85.5" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="236.9" y1="85.5" x2="239.8" y2="88.6" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="227.3" y1="103.7" x2="225.0" y2="106.1" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="225.0" y1="106.1" x2="218.2" y2="108.3" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="218.2" y1="108.3" x2="207.8" y2="110.1" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="207.8" y1="110.1" x2="194.6" y2="111.2" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="194.6" y1="111.2" x2="180.0" y2="111.6" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="180.0" y1="111.6" x2="165.4" y2="111.2" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="165.4" y1="111.2" x2="152.2" y2="110.1" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="152.2" y1="110.1" x2="141.8" y2="108.3" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="141.8" y1="108.3" x2="135.0" y2="106.1" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="135.0" y1="106.1" x2="132.7" y2="103.7" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="132.7" y1="103.7" x2="135.0" y2="101.2" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="135.0" y1="101.2" x2="141.8" y2="99.0" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="141.8" y1="99.0" x2="152.2" y2="97.2" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="152.2" y1="97.2" x2="165.4" y2="96.1" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="165.4" y1="96.1" x2="180.0" y2="95.7" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="180.0" y1="95.7" x2="194.6" y2="96.1" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="194.6" y1="96.1" x2="207.8" y2="97.2" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="207.8" y1="97.2" x2="218.2" y2="99.0" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="218.2" y1="99.0" x2="225.0" y2="101.2" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="225.0" y1="101.2" x2="227.3" y2="103.7" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="216.6" y1="118.5" x2="214.8" y2="120.4" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="214.8" y1="120.4" x2="209.6" y2="122.2" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="209.6" y1="122.2" x2="201.5" y2="123.5" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="201.5" y1="123.5" x2="191.3" y2="124.4" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="191.3" y1="124.4" x2="180.0" y2="124.7" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="180.0" y1="124.7" x2="168.7" y2="124.4" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="168.7" y1="124.4" x2="158.5" y2="123.5" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="158.5" y1="123.5" x2="150.4" y2="122.2" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="150.4" y1="122.2" x2="145.2" y2="120.4" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="145.2" y1="120.4" x2="143.4" y2="118.5" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="143.4" y1="118.5" x2="145.2" y2="116.6" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="145.2" y1="116.6" x2="150.4" y2="114.9" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="150.4" y1="114.9" x2="158.5" y2="113.6" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="158.5" y1="113.6" x2="168.7" y2="112.7" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="168.7" y1="112.7" x2="180.0" y2="112.4" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="180.0" y1="112.4" x2="191.3" y2="112.7" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="191.3" y1="112.7" x2="201.5" y2="113.6" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="201.5" y1="113.6" x2="209.6" y2="114.9" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="209.6" y1="114.9" x2="214.8" y2="116.6" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="214.8" y1="116.6" x2="216.6" y2="118.5" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="207.8" y1="133.3" x2="206.4" y2="134.7" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="206.4" y1="134.7" x2="202.5" y2="136.0" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="202.5" y1="136.0" x2="196.3" y2="137.1" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="196.3" y1="137.1" x2="188.6" y2="137.7" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="188.6" y1="137.7" x2="180.0" y2="138.0" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="180.0" y1="138.0" x2="171.4" y2="137.7" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="171.4" y1="137.7" x2="163.7" y2="137.1" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="163.7" y1="137.1" x2="157.5" y2="136.0" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="157.5" y1="136.0" x2="153.6" y2="134.7" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="153.6" y1="134.7" x2="152.2" y2="133.3" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="152.2" y1="133.3" x2="153.6" y2="131.9" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="153.6" y1="131.9" x2="157.5" y2="130.6" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="157.5" y1="130.6" x2="163.7" y2="129.5" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="163.7" y1="129.5" x2="171.4" y2="128.9" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="171.4" y1="128.9" x2="180.0" y2="128.6" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="180.0" y1="128.6" x2="188.6" y2="128.9" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="188.6" y1="128.9" x2="196.3" y2="129.5" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="196.3" y1="129.5" x2="202.5" y2="130.6" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="202.5" y1="130.6" x2="206.4" y2="131.9" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="206.4" y1="131.9" x2="207.8" y2="133.3" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="200.7" y1="147.9" x2="199.6" y2="149.0" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="199.6" y1="149.0" x2="196.7" y2="150.0" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="196.7" y1="150.0" x2="192.1" y2="150.8" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="192.1" y1="150.8" x2="186.4" y2="151.2" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="186.4" y1="151.2" x2="180.0" y2="151.4" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="180.0" y1="151.4" x2="173.6" y2="151.2" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="173.6" y1="151.2" x2="167.9" y2="150.8" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="167.9" y1="150.8" x2="163.3" y2="150.0" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="163.3" y1="150.0" x2="160.4" y2="149.0" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="160.4" y1="149.0" x2="159.3" y2="147.9" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="159.3" y1="147.9" x2="160.4" y2="146.9" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="160.4" y1="146.9" x2="163.3" y2="145.9" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="163.3" y1="145.9" x2="167.9" y2="145.1" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="167.9" y1="145.1" x2="173.6" y2="144.6" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="173.6" y1="144.6" x2="180.0" y2="144.5" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="180.0" y1="144.5" x2="186.4" y2="144.6" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="186.4" y1="144.6" x2="192.1" y2="145.1" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="192.1" y1="145.1" x2="196.7" y2="145.9" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="196.7" y1="145.9" x2="199.6" y2="146.9" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="199.6" y1="146.9" x2="200.7" y2="147.9" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="195.2" y1="162.5" x2="194.4" y2="163.3" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="194.4" y1="163.3" x2="192.3" y2="164.0" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="192.3" y1="164.0" x2="188.9" y2="164.6" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="188.9" y1="164.6" x2="184.7" y2="164.9" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="184.7" y1="164.9" x2="180.0" y2="165.1" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="180.0" y1="165.1" x2="175.3" y2="164.9" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="175.3" y1="164.9" x2="171.1" y2="164.6" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="171.1" y1="164.6" x2="167.7" y2="164.0" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="167.7" y1="164.0" x2="165.6" y2="163.3" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="165.6" y1="163.3" x2="164.8" y2="162.5" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="164.8" y1="162.5" x2="165.6" y2="161.7" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="165.6" y1="161.7" x2="167.7" y2="161.0" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="167.7" y1="161.0" x2="171.1" y2="160.4" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="171.1" y1="160.4" x2="175.3" y2="160.1" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="175.3" y1="160.1" x2="180.0" y2="160.0" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="180.0" y1="160.0" x2="184.7" y2="160.1" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="184.7" y1="160.1" x2="188.9" y2="160.4" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="188.9" y1="160.4" x2="192.3" y2="161.0" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="192.3" y1="161.0" x2="194.4" y2="161.7" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="194.4" y1="161.7" x2="195.2" y2="162.5" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="191.2" y1="177.0" x2="190.7" y2="177.6" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="190.7" y1="177.6" x2="189.1" y2="178.1" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="189.1" y1="178.1" x2="186.6" y2="178.5" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="186.6" y1="178.5" x2="183.5" y2="178.8" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="183.5" y1="178.8" x2="180.0" y2="178.9" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="180.0" y1="178.9" x2="176.5" y2="178.8" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="176.5" y1="178.8" x2="173.4" y2="178.5" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="173.4" y1="178.5" x2="170.9" y2="178.1" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="170.9" y1="178.1" x2="169.3" y2="177.6" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="169.3" y1="177.6" x2="168.8" y2="177.0" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="168.8" y1="177.0" x2="169.3" y2="176.4" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="169.3" y1="176.4" x2="170.9" y2="175.9" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="170.9" y1="175.9" x2="173.4" y2="175.5" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="173.4" y1="175.5" x2="176.5" y2="175.2" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="176.5" y1="175.2" x2="180.0" y2="175.1" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="180.0" y1="175.1" x2="183.5" y2="175.2" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="183.5" y1="175.2" x2="186.6" y2="175.5" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="186.6" y1="175.5" x2="189.1" y2="175.9" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="189.1" y1="175.9" x2="190.7" y2="176.4" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="190.7" y1="176.4" x2="191.2" y2="177.0" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="188.7" y1="191.4" x2="188.2" y2="191.8" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="188.2" y1="191.8" x2="187.0" y2="192.2" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="187.0" y1="192.2" x2="185.1" y2="192.6" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="185.1" y1="192.6" x2="182.7" y2="192.8" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="182.7" y1="192.8" x2="180.0" y2="192.8" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="180.0" y1="192.8" x2="177.3" y2="192.8" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="177.3" y1="192.8" x2="174.9" y2="192.6" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="174.9" y1="192.6" x2="173.0" y2="192.2" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="173.0" y1="192.2" x2="171.8" y2="191.8" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="171.8" y1="191.8" x2="171.3" y2="191.4" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="171.3" y1="191.4" x2="171.8" y2="190.9" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="171.8" y1="190.9" x2="173.0" y2="190.5" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="173.0" y1="190.5" x2="174.9" y2="190.2" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="174.9" y1="190.2" x2="177.3" y2="190.0" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="177.3" y1="190.0" x2="180.0" y2="189.9" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="180.0" y1="189.9" x2="182.7" y2="190.0" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="182.7" y1="190.0" x2="185.1" y2="190.2" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="185.1" y1="190.2" x2="187.0" y2="190.5" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="187.0" y1="190.5" x2="188.2" y2="190.9" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="188.2" y1="190.9" x2="188.7" y2="191.4" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="187.3" y1="205.7" x2="187.0" y2="206.1" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="187.0" y1="206.1" x2="185.9" y2="206.4" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="185.9" y1="206.4" x2="184.3" y2="206.7" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="184.3" y1="206.7" x2="182.3" y2="206.9" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="182.3" y1="206.9" x2="180.0" y2="207.0" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="180.0" y1="207.0" x2="177.7" y2="206.9" stroke="#62B000" strokeOpacity="0.24" strokeWidth="0.8" />
            <line x1="177.7" y1="206.9" x2="175.7" y2="206.7" stroke="#62B000" strokeOpacity="0.23" strokeWidth="0.8" />
            <line x1="175.7" y1="206.7" x2="174.1" y2="206.4" stroke="#62B000" strokeOpacity="0.20" strokeWidth="0.8" />
            <line x1="174.1" y1="206.4" x2="173.0" y2="206.1" stroke="#62B000" strokeOpacity="0.17" strokeWidth="0.8" />
            <line x1="173.0" y1="206.1" x2="172.7" y2="205.7" stroke="#62B000" strokeOpacity="0.14" strokeWidth="0.8" />
            <line x1="172.7" y1="205.7" x2="173.0" y2="205.3" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
            <line x1="173.0" y1="205.3" x2="174.1" y2="205.0" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="174.1" y1="205.0" x2="175.7" y2="204.7" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="175.7" y1="204.7" x2="177.7" y2="204.5" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="177.7" y1="204.5" x2="180.0" y2="204.5" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="180.0" y1="204.5" x2="182.3" y2="204.5" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="182.3" y1="204.5" x2="184.3" y2="204.7" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="184.3" y1="204.7" x2="185.9" y2="205.0" stroke="#62B000" strokeOpacity="0.05" strokeWidth="0.8" />
            <line x1="185.9" y1="205.0" x2="187.0" y2="205.3" stroke="#62B000" strokeOpacity="0.07" strokeWidth="0.8" />
            <line x1="187.0" y1="205.3" x2="187.3" y2="205.7" stroke="#62B000" strokeOpacity="0.10" strokeWidth="0.8" />
          </g>
          <g className="vortex-dots">
            <circle cx="180.0" cy="220.0" r="2.6" fill="#62B000" fillOpacity="0.95" />
            <circle cx="180.5" cy="223.0" r="2.6" fill="#62B000" fillOpacity="0.94" />
            <circle cx="180.7" cy="226.0" r="2.5" fill="#62B000" fillOpacity="0.93" />
            <circle cx="180.6" cy="229.0" r="2.5" fill="#62B000" fillOpacity="0.92" />
            <circle cx="180.3" cy="232.0" r="2.5" fill="#62B000" fillOpacity="0.91" />
            <circle cx="179.7" cy="235.0" r="2.5" fill="#62B000" fillOpacity="0.90" />
            <circle cx="179.3" cy="238.0" r="2.4" fill="#62B000" fillOpacity="0.89" />
            <circle cx="179.3" cy="241.0" r="2.4" fill="#62B000" fillOpacity="0.88" />
            <circle cx="179.5" cy="244.0" r="2.4" fill="#62B000" fillOpacity="0.87" />
            <circle cx="180.0" cy="247.0" r="2.3" fill="#62B000" fillOpacity="0.86" />
            <circle cx="180.5" cy="250.0" r="2.3" fill="#62B000" fillOpacity="0.85" />
            <circle cx="180.7" cy="253.0" r="2.3" fill="#62B000" fillOpacity="0.84" />
            <circle cx="180.6" cy="256.0" r="2.3" fill="#62B000" fillOpacity="0.83" />
            <circle cx="180.2" cy="259.0" r="2.2" fill="#62B000" fillOpacity="0.82" />
            <circle cx="179.7" cy="262.0" r="2.2" fill="#62B000" fillOpacity="0.81" />
            <circle cx="179.3" cy="265.0" r="2.2" fill="#62B000" fillOpacity="0.80" />
            <circle cx="179.3" cy="268.0" r="2.1" fill="#62B000" fillOpacity="0.79" />
            <circle cx="179.5" cy="271.0" r="2.1" fill="#62B000" fillOpacity="0.78" />
            <circle cx="180.0" cy="274.0" r="2.1" fill="#62B000" fillOpacity="0.77" />
            <circle cx="180.5" cy="277.0" r="2.1" fill="#62B000" fillOpacity="0.76" />
            <circle cx="180.7" cy="280.0" r="2.0" fill="#62B000" fillOpacity="0.75" />
            <circle cx="180.6" cy="283.0" r="2.0" fill="#62B000" fillOpacity="0.74" />
            <circle cx="180.2" cy="286.0" r="2.0" fill="#62B000" fillOpacity="0.73" />
            <circle cx="179.7" cy="289.0" r="1.9" fill="#62B000" fillOpacity="0.72" />
            <circle cx="179.3" cy="292.0" r="1.9" fill="#62B000" fillOpacity="0.71" />
            <circle cx="179.3" cy="295.0" r="1.9" fill="#62B000" fillOpacity="0.70" />
            <circle cx="179.5" cy="298.0" r="1.9" fill="#62B000" fillOpacity="0.69" />
            <circle cx="180.0" cy="301.0" r="1.8" fill="#62B000" fillOpacity="0.68" />
            <circle cx="180.5" cy="304.0" r="1.8" fill="#62B000" fillOpacity="0.67" />
            <circle cx="180.7" cy="307.0" r="1.8" fill="#62B000" fillOpacity="0.66" />
            <circle cx="180.6" cy="310.0" r="1.7" fill="#62B000" fillOpacity="0.65" />
            <circle cx="180.2" cy="313.0" r="1.7" fill="#62B000" fillOpacity="0.64" />
            <circle cx="179.7" cy="316.0" r="1.7" fill="#62B000" fillOpacity="0.63" />
            <circle cx="179.3" cy="319.0" r="1.7" fill="#62B000" fillOpacity="0.62" />
            <circle cx="179.3" cy="322.0" r="1.6" fill="#62B000" fillOpacity="0.61" />
            <circle cx="179.6" cy="325.0" r="1.6" fill="#62B000" fillOpacity="0.60" />
            <circle cx="180.0" cy="3.2" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="180.0" cy="13.8" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="180.0" cy="23.7" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="180.0" cy="33.3" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="180.0" cy="42.7" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="180.0" cy="51.9" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="180.0" cy="60.9" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="180.0" cy="69.8" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="180.0" cy="78.6" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="180.0" cy="87.2" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="180.0" cy="95.7" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="180.0" cy="104.1" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="180.0" cy="112.4" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="180.0" cy="120.6" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="180.0" cy="128.6" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="180.0" cy="136.6" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="180.0" cy="144.5" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="180.0" cy="152.3" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="180.0" cy="160.0" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="180.0" cy="167.6" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="180.0" cy="175.1" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="180.0" cy="182.5" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="180.0" cy="189.9" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="180.0" cy="197.2" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="180.0" cy="204.5" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="180.0" cy="211.7" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="180.0" cy="218.8" r="1.3" fill="#4E9200" fillOpacity="0.22"  />
            <circle cx="220.2" cy="4.2" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="216.9" cy="14.8" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="213.8" cy="24.6" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="210.8" cy="34.1" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="208.0" cy="43.4" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="205.4" cy="52.6" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="203.0" cy="61.6" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="200.6" cy="70.4" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="198.5" cy="79.1" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="196.5" cy="87.7" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="194.6" cy="96.1" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="192.9" cy="104.5" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="191.3" cy="112.7" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="189.9" cy="120.8" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="188.6" cy="128.9" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="187.4" cy="136.8" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="186.4" cy="144.6" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="185.5" cy="152.4" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="184.7" cy="160.1" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="184.0" cy="167.7" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="183.5" cy="175.2" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="183.0" cy="182.6" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="182.7" cy="190.0" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="182.4" cy="197.3" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="182.3" cy="204.5" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="182.2" cy="211.7" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="182.2" cy="218.9" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="139.8" cy="4.2" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="143.1" cy="14.8" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="146.2" cy="24.6" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="149.2" cy="34.1" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="152.0" cy="43.4" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="154.6" cy="52.6" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="157.0" cy="61.6" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="159.4" cy="70.4" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="161.5" cy="79.1" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="163.5" cy="87.7" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="165.4" cy="96.1" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="167.1" cy="104.5" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="168.7" cy="112.7" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="170.1" cy="120.8" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="171.4" cy="128.9" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="172.6" cy="136.8" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="173.6" cy="144.6" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="174.5" cy="152.4" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="175.3" cy="160.1" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="176.0" cy="167.7" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="176.5" cy="175.2" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="177.0" cy="182.6" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="177.3" cy="190.0" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="177.6" cy="197.3" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="177.7" cy="204.5" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="177.8" cy="211.7" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="177.8" cy="218.9" r="1.4" fill="#4E9200" fillOpacity="0.24"  />
            <circle cx="256.4" cy="7.3" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="250.2" cy="17.6" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="244.3" cy="27.2" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="238.6" cy="36.5" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="233.3" cy="45.6" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="228.4" cy="54.5" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="223.7" cy="63.3" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="219.3" cy="72.0" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="215.1" cy="80.5" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="211.3" cy="88.9" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="207.8" cy="97.2" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="204.5" cy="105.5" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="201.5" cy="113.6" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="198.8" cy="121.6" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="196.3" cy="129.5" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="194.1" cy="137.4" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="192.1" cy="145.1" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="190.4" cy="152.8" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="188.9" cy="160.4" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="187.6" cy="168.0" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="186.6" cy="175.5" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="185.7" cy="182.9" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="185.1" cy="190.2" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="184.6" cy="197.5" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="184.3" cy="204.7" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="184.2" cy="211.9" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="184.1" cy="219.0" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="103.6" cy="7.3" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="109.8" cy="17.6" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="115.7" cy="27.2" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="121.4" cy="36.5" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="126.7" cy="45.6" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="131.6" cy="54.5" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="136.3" cy="63.3" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="140.7" cy="72.0" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="144.9" cy="80.5" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="148.7" cy="88.9" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="152.2" cy="97.2" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="155.5" cy="105.5" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="158.5" cy="113.6" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="161.2" cy="121.6" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="163.7" cy="129.5" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="165.9" cy="137.4" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="167.9" cy="145.1" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="169.6" cy="152.8" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="171.1" cy="160.4" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="172.4" cy="168.0" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="173.4" cy="175.5" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="174.3" cy="182.9" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="174.9" cy="190.2" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="175.4" cy="197.5" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="175.7" cy="204.7" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="175.8" cy="211.9" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="175.9" cy="219.0" r="1.5" fill="#4E9200" fillOpacity="0.29"  />
            <circle cx="285.2" cy="12.2" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="276.6" cy="22.0" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="268.4" cy="31.3" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="260.7" cy="40.2" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="253.4" cy="49.0" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="246.6" cy="57.6" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="240.1" cy="66.1" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="234.0" cy="74.5" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="228.4" cy="82.7" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="223.1" cy="90.9" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="218.2" cy="99.0" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="213.7" cy="107.0" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="209.6" cy="114.9" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="205.9" cy="122.8" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="202.5" cy="130.6" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="199.4" cy="138.3" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="196.7" cy="145.9" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="194.3" cy="153.5" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="192.3" cy="161.0" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="190.5" cy="168.5" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="189.1" cy="175.9" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="187.9" cy="183.2" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="187.0" cy="190.5" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="186.4" cy="197.8" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="185.9" cy="205.0" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="185.7" cy="212.2" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="185.7" cy="219.3" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="74.8" cy="12.2" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="83.4" cy="22.0" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="91.6" cy="31.3" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="99.3" cy="40.2" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="106.6" cy="49.0" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="113.4" cy="57.6" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="119.9" cy="66.1" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="126.0" cy="74.5" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="131.6" cy="82.7" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="136.9" cy="90.9" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="141.8" cy="99.0" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="146.3" cy="107.0" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="150.4" cy="114.9" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="154.1" cy="122.8" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="157.5" cy="130.6" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="160.6" cy="138.3" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="163.3" cy="145.9" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="165.7" cy="153.5" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="167.7" cy="161.0" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="169.5" cy="168.5" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="170.9" cy="175.9" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="172.1" cy="183.2" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="173.0" cy="190.5" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="173.6" cy="197.8" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="174.1" cy="205.0" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="174.3" cy="212.2" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="174.3" cy="219.3" r="1.8" fill="#4E9200" fillOpacity="0.38"  />
            <circle cx="56.4" cy="18.3" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="66.5" cy="27.6" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="76.0" cy="36.4" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="85.1" cy="44.9" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="93.7" cy="53.2" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="101.8" cy="61.5" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="109.4" cy="69.6" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="116.5" cy="77.6" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="123.1" cy="85.5" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="129.3" cy="93.4" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="135.0" cy="101.2" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="140.3" cy="109.0" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="145.2" cy="116.6" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="149.6" cy="124.3" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="153.6" cy="131.9" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="157.2" cy="139.4" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="160.4" cy="146.9" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="163.1" cy="154.3" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="165.6" cy="161.7" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="167.6" cy="169.1" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="169.3" cy="176.4" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="170.7" cy="183.7" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="171.8" cy="190.9" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="172.5" cy="198.2" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="173.0" cy="205.3" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="173.3" cy="212.5" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="173.3" cy="219.6" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="303.6" cy="18.3" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="293.5" cy="27.6" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="284.0" cy="36.4" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="274.9" cy="44.9" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="266.3" cy="53.2" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="258.2" cy="61.5" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="250.6" cy="69.6" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="243.5" cy="77.6" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="236.9" cy="85.5" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="230.7" cy="93.4" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="225.0" cy="101.2" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="219.7" cy="109.0" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="214.8" cy="116.6" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="210.4" cy="124.3" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="206.4" cy="131.9" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="202.8" cy="139.4" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="199.6" cy="146.9" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="196.9" cy="154.3" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="194.4" cy="161.7" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="192.4" cy="169.1" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="190.7" cy="176.4" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="189.3" cy="183.7" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="188.2" cy="190.9" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="187.5" cy="198.2" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="187.0" cy="205.3" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="186.7" cy="212.5" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="186.7" cy="219.6" r="2.1" fill="#4E9200" fillOpacity="0.49"  />
            <circle cx="310.0" cy="25.0" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="299.4" cy="33.8" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="289.3" cy="42.1" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="279.8" cy="50.1" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="270.8" cy="57.9" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="262.3" cy="65.7" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="254.3" cy="73.4" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="246.8" cy="81.1" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="239.8" cy="88.6" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="233.3" cy="96.2" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="227.3" cy="103.7" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="221.7" cy="111.1" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="216.6" cy="118.5" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="212.0" cy="125.9" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="207.8" cy="133.3" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="204.0" cy="140.6" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="200.7" cy="147.9" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="197.7" cy="155.2" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="195.2" cy="162.5" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="193.0" cy="169.8" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="191.2" cy="177.0" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="189.8" cy="184.2" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="188.7" cy="191.4" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="187.9" cy="198.6" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="187.3" cy="205.7" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="187.1" cy="212.9" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="187.0" cy="220.0" r="2.5" fill="#62B000" fillOpacity="0.61"  />
            <circle cx="50.0" cy="25.0" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="60.6" cy="33.8" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="70.7" cy="42.1" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="80.2" cy="50.1" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="89.2" cy="57.9" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="97.7" cy="65.7" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="105.7" cy="73.4" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="113.2" cy="81.1" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="120.2" cy="88.6" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="126.7" cy="96.2" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="132.7" cy="103.7" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="138.3" cy="111.1" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="143.4" cy="118.5" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="148.0" cy="125.9" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="152.2" cy="133.3" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="156.0" cy="140.6" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="159.3" cy="147.9" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="162.3" cy="155.2" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="164.8" cy="162.5" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="167.0" cy="169.8" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="168.8" cy="177.0" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="170.2" cy="184.2" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="171.3" cy="191.4" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="172.1" cy="198.6" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="172.7" cy="205.7" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="172.9" cy="212.9" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="173.0" cy="220.0" r="2.5" fill="#62B000" fillOpacity="0.61" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="303.6" cy="31.7" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="293.5" cy="40.0" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="284.0" cy="47.7" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="274.9" cy="55.2" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="266.3" cy="62.7" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="258.2" cy="70.0" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="250.6" cy="77.3" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="243.5" cy="84.5" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="236.9" cy="91.7" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="230.7" cy="98.9" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="225.0" cy="106.1" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="219.7" cy="113.3" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="214.8" cy="120.4" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="210.4" cy="127.6" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="206.4" cy="134.7" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="202.8" cy="141.9" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="199.6" cy="149.0" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="196.9" cy="156.2" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="194.4" cy="163.3" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="192.4" cy="170.4" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="190.7" cy="177.6" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="189.3" cy="184.7" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="188.2" cy="191.8" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="187.5" cy="199.0" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="187.0" cy="206.1" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="186.7" cy="213.2" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="186.7" cy="220.4" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="56.4" cy="31.7" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="66.5" cy="40.0" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="76.0" cy="47.7" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="85.1" cy="55.2" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="93.7" cy="62.7" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="101.8" cy="70.0" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="109.4" cy="77.3" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="116.5" cy="84.5" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="123.1" cy="91.7" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="129.3" cy="98.9" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="135.0" cy="106.1" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="140.3" cy="113.3" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="145.2" cy="120.4" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="149.6" cy="127.6" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="153.6" cy="134.7" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="157.2" cy="141.9" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="160.4" cy="149.0" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="163.1" cy="156.2" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="165.6" cy="163.3" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="167.6" cy="170.4" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="169.3" cy="177.6" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="170.7" cy="184.7" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="171.8" cy="191.8" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="172.5" cy="199.0" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="173.0" cy="206.1" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="173.3" cy="213.2" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="173.3" cy="220.4" r="2.8" fill="#7FE300" fillOpacity="0.73" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="285.2" cy="37.8" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="276.6" cy="45.6" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="268.4" cy="52.8" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="260.7" cy="59.9" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="253.4" cy="66.9" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="246.6" cy="73.8" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="240.1" cy="80.8" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="234.0" cy="87.7" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="228.4" cy="94.5" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="223.1" cy="101.4" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="218.2" cy="108.3" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="213.7" cy="115.2" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="209.6" cy="122.2" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="205.9" cy="129.1" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="202.5" cy="136.0" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="199.4" cy="143.0" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="196.7" cy="150.0" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="194.3" cy="157.0" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="192.3" cy="164.0" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="190.5" cy="171.0" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="189.1" cy="178.1" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="187.9" cy="185.2" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="187.0" cy="192.2" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="186.4" cy="199.3" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="185.9" cy="206.4" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="185.7" cy="213.6" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="185.7" cy="220.7" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="74.8" cy="37.8" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="83.4" cy="45.6" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="91.6" cy="52.8" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="99.3" cy="59.9" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="106.6" cy="66.9" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="113.4" cy="73.8" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="119.9" cy="80.8" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="126.0" cy="87.7" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="131.6" cy="94.5" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="136.9" cy="101.4" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="141.8" cy="108.3" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="146.3" cy="115.2" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="150.4" cy="122.2" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="154.1" cy="129.1" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="157.5" cy="136.0" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="160.6" cy="143.0" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="163.3" cy="150.0" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="165.7" cy="157.0" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="167.7" cy="164.0" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="169.5" cy="171.0" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="170.9" cy="178.1" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="172.1" cy="185.2" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="173.0" cy="192.2" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="173.6" cy="199.3" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="174.1" cy="206.4" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="174.3" cy="213.6" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="174.3" cy="220.7" r="3.1" fill="#7FE300" fillOpacity="0.84" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="256.4" cy="42.7" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="103.6" cy="42.7" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="250.2" cy="50.1" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="109.8" cy="50.1" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="244.3" cy="56.9" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="115.7" cy="56.9" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="238.6" cy="63.6" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="121.4" cy="63.6" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="233.3" cy="70.3" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="126.7" cy="70.3" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="228.4" cy="76.9" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="131.6" cy="76.9" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="223.7" cy="83.5" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="136.3" cy="83.5" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="219.3" cy="90.1" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="140.7" cy="90.1" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="215.1" cy="96.8" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="144.9" cy="96.8" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="211.3" cy="103.4" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="148.7" cy="103.4" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="207.8" cy="110.1" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="152.2" cy="110.1" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="204.5" cy="116.8" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="155.5" cy="116.8" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="201.5" cy="123.5" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="158.5" cy="123.5" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="198.8" cy="130.3" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="161.2" cy="130.3" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="196.3" cy="137.1" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="163.7" cy="137.1" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="194.1" cy="143.9" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="165.9" cy="143.9" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="192.1" cy="150.8" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="167.9" cy="150.8" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="190.4" cy="157.6" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="169.6" cy="157.6" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="188.9" cy="164.6" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="171.1" cy="164.6" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="187.6" cy="171.5" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="172.4" cy="171.5" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="186.6" cy="178.5" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="173.4" cy="178.5" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="185.7" cy="185.5" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="174.3" cy="185.5" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="185.1" cy="192.6" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="174.9" cy="192.6" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="184.6" cy="199.6" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="175.4" cy="199.6" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="184.3" cy="206.7" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="175.7" cy="206.7" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="184.2" cy="213.8" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="175.8" cy="213.8" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="184.1" cy="221.0" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="175.9" cy="221.0" r="3.4" fill="#7FE300" fillOpacity="0.93" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="220.2" cy="45.8" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="216.9" cy="52.9" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="213.8" cy="59.5" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="210.8" cy="66.0" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="208.0" cy="72.4" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="205.4" cy="78.9" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="203.0" cy="85.3" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="200.6" cy="91.7" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="198.5" cy="98.2" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="196.5" cy="104.7" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="194.6" cy="111.2" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="192.9" cy="117.8" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="191.3" cy="124.4" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="189.9" cy="131.0" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="188.6" cy="137.7" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="187.4" cy="144.5" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="186.4" cy="151.2" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="185.5" cy="158.1" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="184.7" cy="164.9" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="184.0" cy="171.8" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="183.5" cy="178.8" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="183.0" cy="185.8" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="182.7" cy="192.8" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="182.4" cy="199.8" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="182.3" cy="206.9" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="182.2" cy="214.0" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="182.2" cy="221.1" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="139.8" cy="45.8" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="143.1" cy="52.9" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="146.2" cy="59.5" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="149.2" cy="66.0" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="152.0" cy="72.4" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="154.6" cy="78.9" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="157.0" cy="85.3" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="159.4" cy="91.7" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="161.5" cy="98.2" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="163.5" cy="104.7" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="165.4" cy="111.2" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="167.1" cy="117.8" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="168.7" cy="124.4" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="170.1" cy="131.0" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="171.4" cy="137.7" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="172.6" cy="144.5" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="173.6" cy="151.2" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="174.5" cy="158.1" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="175.3" cy="164.9" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="176.0" cy="171.8" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="176.5" cy="178.8" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="177.0" cy="185.8" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="177.3" cy="192.8" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="177.6" cy="199.8" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="177.7" cy="206.9" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="177.8" cy="214.0" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="177.8" cy="221.1" r="3.5" fill="#7FE300" fillOpacity="0.98" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="180.0" cy="46.8" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="180.0" cy="53.9" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="180.0" cy="60.4" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="180.0" cy="66.8" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="180.0" cy="73.2" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="180.0" cy="79.5" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="180.0" cy="85.9" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="180.0" cy="92.3" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="180.0" cy="98.7" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="180.0" cy="105.1" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="180.0" cy="111.6" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="180.0" cy="118.1" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="180.0" cy="124.7" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="180.0" cy="131.3" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="180.0" cy="138.0" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="180.0" cy="144.7" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="180.0" cy="151.4" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="180.0" cy="158.2" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="180.0" cy="165.1" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="180.0" cy="171.9" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="180.0" cy="178.9" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="180.0" cy="185.8" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="180.0" cy="192.8" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="180.0" cy="199.9" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="180.0" cy="207.0" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="180.0" cy="214.1" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="180.0" cy="221.2" r="3.6" fill="#7FE300" fillOpacity="1.00" stroke="#3C7000" strokeWidth="0.5" strokeOpacity="0.3" />
          </g>
        </svg>
      </div>
    </div>
  );
}
