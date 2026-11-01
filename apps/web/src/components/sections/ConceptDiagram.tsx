import styles from "./ConceptDiagram.module.css";

const netLines = [-30, -20, -10, 0, 10, 20, 30];

// Side view of the concept, deliberately abstract: no dimensions, proportions,
// or construction detail. Exposed as one image; `description` carries the text.
export function ConceptDiagram({ description }: { description: string }) {
  return (
    <svg className={styles.diagram} viewBox="0 0 480 350" role="img" aria-label={description}>
      <defs>
        <clipPath id="concept-net">
          <circle cx="392" cy="82" r="36" />
        </clipPath>
      </defs>

      <line className={styles.faint} x1="10" y1="335" x2="470" y2="335" />

      {/* Tripod-style base */}
      <g className={styles.line}>
        <line x1="150" y1="250" x2="90" y2="335" />
        <line x1="150" y1="250" x2="210" y2="335" />
        <line x1="150" y1="250" x2="164" y2="326" />
        <rect x="130" y="234" width="40" height="16" />
      </g>

      {/* Pan axis */}
      <line className={styles.line} x1="150" y1="234" x2="150" y2="190" />
      <ellipse className={styles.dashed} cx="150" cy="224" rx="44" ry="9" />

      {/* Tilt axis */}
      <path className={styles.dashed} d="M104 190 A46 46 0 0 1 124 152" />

      {/* Launcher barrels */}
      <g transform="rotate(-32 150 190)" className={styles.line}>
        <rect x="140" y="180" width="20" height="20" />
        <rect x="128" y="176.5" width="150" height="8" />
        <rect x="128" y="186" width="150" height="8" />
        <rect x="128" y="195.5" width="150" height="8" />
      </g>
      <circle className={styles.pivot} cx="150" cy="190" r="5" />

      {/* Tethered net */}
      <path className={styles.tether} d="M268 118 Q322 124 360 98" />
      <g clipPath="url(#concept-net)" className={styles.mesh}>
        <g transform="rotate(20 392 82)">
          {netLines.map((offset) => (
            <line key={`v${offset}`} x1={392 + offset} y1="40" x2={392 + offset} y2="124" />
          ))}
          {netLines.map((offset) => (
            <line key={`h${offset}`} x1="350" y1={82 + offset} x2="434" y2={82 + offset} />
          ))}
        </g>
      </g>
      <circle className={styles.accent} cx="392" cy="82" r="36" />

      {/* Test drone */}
      <g className={styles.line}>
        <rect className={styles.solid} x="384" y="70" width="16" height="7" />
        <line x1="384" y1="73" x2="370" y2="66" />
        <line x1="400" y1="73" x2="414" y2="66" />
        <line x1="362" y1="66" x2="378" y2="66" />
        <line x1="406" y1="66" x2="422" y2="66" />
      </g>

      {/* Labels */}
      <g className={styles.leader}>
        <line x1="178" y1="92" x2="208" y2="128" />
        <line x1="72" y1="166" x2="100" y2="168" />
        <line x1="198" y1="224" x2="218" y2="224" />
        <line x1="184" y1="298" x2="218" y2="298" />
      </g>
      <g className={styles.label}>
        <text x="86" y="84">Launcher barrels</text>
        <text x="10" y="172">Tilt axis</text>
        <text x="224" y="230">Pan axis</text>
        <text x="224" y="304">Tripod-style base</text>
        <text x="470" y="30" textAnchor="end">Test drone</text>
        <text x="470" y="146" textAnchor="end">Tethered net</text>
      </g>
    </svg>
  );
}
