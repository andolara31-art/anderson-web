import React from 'react';
import { useCharacterConfig } from '../context/CharacterConfigContext';

const COLORS: Record<string, string> = {
  k: '#121212', // tinta negra
  b: '#2046F0', // azul NUVRO / Superman
  w: '#F7F7F4', // papel blanco
  y: '#FFC83D', // amarillo NUVRO / Flash / Batman cinturón
  m: '#5EDBB0', // menta
  c: '#FF5A4E', // coral
  s: '#E8B48A', // piel
  h: '#3B2418', // cabello oscuro
  o: '#D97757', // Claude terracota
  p: '#F4A27E', // Claude brillo / manos
  r: '#E63946', // rojo Superman / Flash / Google
  d: '#2A303C', // gris oscuro Batman
  B: '#4285F4', // azul Google
  G: '#34A853', // verde Google
  R: '#EA4335', // rojo Google
  Y: '#FBBC05', // amarillo Google
};

const GROUPS: Record<string, { color: string; className: string }> = {
  e: { color: '#121212', className: 'px-eyes' },
  W: { color: '#F7F7F4', className: 'px-eyes' }, // ojos claros animados (Batman)
  u: { color: '#121212', className: 'px-cursor' },
  a: { color: '#F7F7F4', className: 'px-arm' },
};

export type PixelSpriteName =
  | 'bit'
  | 'dev'
  | 'chispa'
  | 'termi'
  | 'claude'
  | 'google'
  | 'batman'
  | 'superman'
  | 'flash';

type Sprite = { name: PixelSpriteName; rows: string[] };

const SPRITES: Sprite[] = [
  {
    name: 'bit',
    rows: [
      '..ww......ww..',
      '..bb......bb..',
      '..bb..yy..bb..',
      '..kkkkkkkkkk..',
      '..kbbbbbbbbk..',
      '..kbwwwwwwbk..',
      '..kbweewewbk..',
      '..kbwwwwwwbk..',
      '..kbwwkkwwbk..',
      '..kbbbbbbbbk..',
      '..kkkkkkkkkk..',
      '....kbbbbk....',
      '....kkkkkk....',
    ],
  },
  {
    name: 'dev',
    rows: [
      '..ss......ss..',
      '..cc......cc..',
      '..cc.hhhh.cc..',
      '..cchhhhhhcc..',
      '..cchsssshcc..',
      '..cckekkekcc..',
      '..ccsssssscc..',
      '..ccsskksscc..',
      '..cccccccccc..',
      '...cccyyccc...',
      '...cccccccc...',
      '....kk..kk....',
    ],
  },
  {
    name: 'chispa',
    rows: [
      '...ww....ww...',
      '...yy....yy...',
      '...yyyyyyyy...',
      '..yyyyyyyyyy..',
      '.yyyeyyyyeyyy.',
      '.yyyeyyyyeyyy.',
      '.yyyyyyyyyyyy.',
      '..yycyyyycyy..',
      '...yyykkyyy...',
      '....yyyyyy....',
      '.....yyyy.....',
      '......yy......',
    ],
  },
  {
    name: 'termi',
    rows: [
      '..ww..........',
      '..kk.........a',
      '..kkkkkkkkkk.a',
      '..kmmmmmmmmkaa',
      '..kmkmmmmmmk..',
      '..kmmkmmmmmk..',
      '..kmkmmuummk..',
      '..kmmmmmmmmk..',
      '..kkkkkkkkkk..',
      '.....kkkk.....',
      '....kkkkkk....',
    ],
  },
  {
    name: 'claude',
    rows: [
      '....y....y....',
      '..y..kkkk..y..',
      '..kkkkkkkkkk..',
      '..kooooooook..',
      '..kowwwwwwok..',
      '..kowewwewok..',
      '..kowwwwwwok..',
      '..kooooooook..',
      '.pkooyyyyookp.',
      '..kooooooook..',
      '..kkkkkkkkkk..',
      '....kk..kk....',
      '....kk..kk....',
    ],
  },
  {
    name: 'google',
    rows: [
      '..G........G..',
      '...G......G...',
      '..kkkkkkkkkk..',
      '..kGGGGGGGGk..',
      '..kGwewwweGk..',
      '..kGGGGGGGGk..',
      '..kkkkkkkkkk..',
      '.GkBBRRRRYYkG.',
      '.GkBBBBGGGGkG.',
      '.GkYYYYGGGGkG.',
      '..kkkkkkkkkk..',
      '....kk..kk....',
      '....kk..kk....',
    ],
  },
  {
    name: 'batman',
    rows: [
      '..kk......kk..',
      '..kkk....kkk..',
      '..kkkkkkkkkk..',
      '..kddddddddk..',
      '..kdWddddWdk..',
      '..kddddddddk..',
      '..kksssssskk..',
      '.kddddddddddk.',
      '.kdddyyyydddk.',
      '.kddddddddddk.',
      '.kdyyyyyyyydk.',
      '.kdkk....kkdk.',
      '.k..kk..kk..k.',
    ],
  },
  {
    name: 'superman',
    rows: [
      '....kkkkkk....',
      '...kkkkkkkk...',
      '...ksskkssk...',
      '..kssssssssk..',
      '..kssessessk..',
      '..kssssssssk..',
      '.rkkkkkkkkkkr.',
      '.rkbbryyrbbkr.',
      '.rkbbryyrbbkr.',
      '.rkbbbbbbbbkr.',
      '.rkyyyyyyyykr.',
      '.rkrrrrrrrrkr.',
      '....rr..rr....',
    ],
  },
  {
    name: 'flash',
    rows: [
      '...kkkkkkkk...',
      '.y.krrrrrrk.y.',
      '.yykrrrrrrkyy.',
      '.y.krrrrrrk.y.',
      '..krrerrerrk..',
      '..krrrrrrrrk..',
      '..kksssssskk..',
      '..krrrrrrrrk..',
      '..krrwwyyrrk..',
      '..krrwyywrrk..',
      '..kryyyyyyrk..',
      '..kkkkkkkkkk..',
      '....yy..yy....',
    ],
  },
];

const HEADER_CREW: PixelSpriteName[] = ['chispa', 'bit', 'dev', 'termi'];

export function PixelSprite({
  spriteName,
  scale = 3,
  className = '',
  label,
  alwaysVisible = false,
}: {
  spriteName: PixelSpriteName;
  scale?: number;
  className?: string;
  label?: string;
  alwaysVisible?: boolean;
}) {
  const { charactersVisible } = useCharacterConfig();
  if (!alwaysVisible && !charactersVisible) return null;

  const sprite = SPRITES.find((s) => s.name === spriteName) ?? SPRITES[0];
  const width = sprite.rows[0].length;
  const height = sprite.rows.length;
  const base: React.ReactElement[] = [];
  const grouped: Record<string, React.ReactElement[]> = {
    e: [],
    W: [],
    u: [],
    a: [],
  };

  sprite.rows.forEach((row, y) => {
    [...row].forEach((char, x) => {
      if (char === '.') return;
      const special = GROUPS[char];
      const rect = (
        <rect
          key={`${x}-${y}`}
          x={x}
          y={y}
          width={1}
          height={1}
          fill={special ? special.color : COLORS[char]}
        />
      );
      if (special) grouped[char].push(rect);
      else base.push(rect);
    });
  });

  return (
    <svg
      className={`px-eyes-anim ${className}`.trim()}
      viewBox={`0 0 ${width} ${height}`}
      width={width * scale}
      height={height * scale}
      shapeRendering="crispEdges"
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
    >
      <g className="px-body">
        {base}
        {Object.entries(grouped).map(([char, rects]) =>
          rects.length ? (
            <g key={char} className={GROUPS[char].className}>
              {rects}
            </g>
          ) : null,
        )}
      </g>
    </svg>
  );
}

export default function PixelCrew() {
  const { charactersVisible } = useCharacterConfig();
  if (!charactersVisible) return null;

  return (
    <div className="pixel-crew" aria-hidden="true">
      {HEADER_CREW.map((name) => (
        <span key={name} className={`px-char px-${name}`}>
          <PixelSprite spriteName={name} scale={3} />
        </span>
      ))}
    </div>
  );
}
