type Props = {
  /** -1 (far left) … 1 (far right): where the target circle sits relative to the character. */
  look: number
  className?: string
  style?: React.CSSProperties
}

/**
 * Back-view traveller gazing out of the train window (after the inspo image):
 * long pale coat, draped scarf, dark armbands, one hand resting behind the back.
 * Warm rim light comes from the planets; the head turns toward the target.
 */
export default function Character({ look, className = "", style }: Props) {
  const l = Math.max(-1, Math.min(1, look))
  return (
    <svg
      aria-hidden
      viewBox="0 0 240 420"
      className={className}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="coat"
          x1="40"
          y1="0"
          x2="200"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#4f4d66" />
          <stop offset="0.35" stopColor="#7d7a96" />
          <stop offset="0.7" stopColor="#a8a4bd" />
          <stop offset="0.93" stopColor="#cfc6c4" />
          <stop offset="1" stopColor="#efd9a8" />
        </linearGradient>
        <linearGradient
          id="coatShade"
          x1="0"
          y1="120"
          x2="0"
          y2="420"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#0b0c1c" stopOpacity="0" />
          <stop offset="1" stopColor="#0b0c1c" stopOpacity="0.55" />
        </linearGradient>
        <linearGradient
          id="scarf"
          x1="100"
          y1="110"
          x2="170"
          y2="320"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#b9b5cc" />
          <stop offset="1" stopColor="#7e7a95" />
        </linearGradient>
        <radialGradient id="hair" cx="0.62" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#4a4f5c" />
          <stop offset="0.6" stopColor="#262a35" />
          <stop offset="1" stopColor="#15171f" />
        </radialGradient>
        <linearGradient id="skin" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#a88a7a" />
          <stop offset="1" stopColor="#ecd1b8" />
        </linearGradient>
      </defs>

      <g
        style={{
          transformOrigin: "120px 420px",
          animation: "breathe 4.5s ease-in-out infinite",
        }}
      >
        {/* trousers peeking below coat */}
        <path
          d="M84 380 L80 420 H112 L114 384 Z M126 384 L128 420 H160 L156 380 Z"
          fill="#1a1b26"
        />

        {/* left arm (hanging) */}
        <path
          d="M66 126 C48 136 42 168 41 200 L38 282 C38 292 46 296 54 294 L64 290 L70 206 Z"
          fill="url(#coat)"
        />
        <path d="M41 196 L68 200 L67 214 L40 210 Z" fill="#1d1e2b" />
        <path d="M40 204 L67 208" stroke="#c7783b" strokeWidth="1.6" />
        <path
          d="M38 270 L64 272 L63 290 L39 288 Z"
          fill="#e7e3ee"
          opacity="0.85"
        />
        <path
          d="M44 274 h4 M44 282 h4"
          stroke="#1d1e2b"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M41 290 C38 304 42 316 50 318 C58 318 60 306 58 292 Z"
          fill="url(#skin)"
        />

        {/* coat body */}
        <path
          d="M70 116 C96 104 144 104 172 116 L184 150 L190 300 L200 420 H40 L50 300 L58 150 Z"
          fill="url(#coat)"
        />
        <path
          d="M120 236 V420"
          stroke="#4a4860"
          strokeWidth="1.5"
          opacity="0.7"
        />
        <path
          d="M58 300 L190 300"
          stroke="#4a4860"
          strokeWidth="1"
          opacity="0.35"
        />
        {/* light lower back panel with small crest */}
        <path
          d="M126 300 L188 300 L196 420 H128 Z"
          fill="#e2deea"
          opacity="0.18"
        />
        <circle
          cx="160"
          cy="352"
          r="9"
          stroke="#c9a84c"
          strokeWidth="1.5"
          opacity="0.75"
        />
        <path
          d="M154 352 h12 M160 346 v12"
          stroke="#c9a84c"
          strokeWidth="1.2"
          opacity="0.75"
        />

        {/* right arm bent behind the back */}
        <path
          d="M170 122 C192 132 198 160 196 190 L192 230 C190 240 182 244 172 243 L132 240 C122 238 122 226 132 224 L172 220 L170 172 Z"
          fill="url(#coat)"
        />
        <path d="M171 178 L197 176 L197 191 L171 193 Z" fill="#1d1e2b" />
        <path d="M171 186 L197 184" stroke="#c7783b" strokeWidth="1.6" />
        <path
          d="M120 222 C112 222 108 230 112 238 C116 244 126 244 132 240 L132 224 Z"
          fill="url(#skin)"
        />

        {/* rim light from the planet */}
        <path
          d="M172 116 L184 150 L190 300 L200 420 M196 190 C198 160 192 132 170 122"
          stroke="#f8e2ad"
          strokeWidth="2"
          opacity="0.55"
        />

        {/* draped scarf + folded hood */}
        <path
          d="M150 112 C146 176 128 236 108 300 L102 330 L116 334 L126 300 C150 236 164 176 166 118 Z"
          fill="url(#scarf)"
        />
        <path
          d="M104 330 l-3 14 M109 332 l-2 15 M114 333 l-1 14"
          stroke="#8d89a4"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M84 110 C100 96 140 96 158 110 C156 146 138 162 120 164 C102 162 86 146 84 110 Z"
          fill="#c4c0d5"
        />
        <path
          d="M92 116 C104 132 136 132 150 116"
          stroke="#8e8aa6"
          strokeWidth="2"
        />
        <path
          d="M100 136 C110 146 132 146 142 136"
          stroke="#8e8aa6"
          strokeWidth="1.5"
          opacity="0.7"
        />

        <rect
          x="40"
          y="100"
          width="160"
          height="320"
          fill="url(#coatShade)"
          style={{ mixBlendMode: "multiply" }}
        />
      </g>

      {/* neck + head, turning toward the target */}
      <g
        style={{
          transformOrigin: "120px 104px",
          transform: `translateX(${l * 5}px) rotate(${l * 7}deg)`,
          transition: "transform 1s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <rect x="106" y="86" width="28" height="22" rx="6" fill="#1c1f2b" />
        <ellipse cx="96" cy="64" rx="5" ry="8" fill="url(#skin)" />
        <ellipse cx="144" cy="64" rx="5" ry="8" fill="url(#skin)" />
        <path
          d="M94 58 C92 34 106 22 122 22 C140 22 150 36 147 58 C146 76 138 92 120 92 C102 92 95 76 94 58 Z"
          fill="url(#hair)"
        />
        {/* tufts */}
        <path
          d="M112 24 C114 14 122 10 128 12 C124 16 124 20 126 24 Z"
          fill="#2b2f3b"
        />
        <path
          d="M100 80 C100 88 104 92 108 94 L106 84 Z M140 80 C140 88 136 92 132 94 L134 84 Z"
          fill="#20232d"
        />
        <path
          d="M136 30 C146 38 148 52 146 66"
          stroke="#f8e2ad"
          strokeWidth="1.6"
          opacity="0.5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
}
