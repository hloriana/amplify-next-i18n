## Baseline

The baseline also comes with a normalization, for better browser compatibility, and sets sane defaults for text. GUD compliant.

- font size `16px`
- line height `1.5`
- font family `see list below based on language`

## Screens

The screens are the defined breakpoints. Everything will start with a 'mobile-first' approach, and will be overridden by bigger screens. GUD compliant.

- sm `all screens, ≥ 0`
- md `≥ 768px`
- lg `≥ 1024px`
- xl `≥ 1264px`

## Font families

The list used here are the fonts families for each set of language we support. GUD compliant.

- latin `"EF Circular Latin", "Helvetica", "Open Sans", "Gill Sans MT", "Gill Sans", Corbel, Arial, sans-serif`
- extended `"EF Circular", "Helvetica", "Open Sans", "Gill Sans MT", "Gill Sans", Corbel, Arial, sans-serif`
- arabic `"Noto Sans AR", "Geeza Pro", "Arabic Typesetting", Roboto, Noto, "Noto Naskh Arabic", "Times New Roman", serif`
- chinese-hk `"Noto Sans HK", "方体", "PingFang HK", "黑体", "Heiti SC", "Microsoft JhengHei UI", "Microsoft JhengHei", Roboto, Noto, "Noto Sans CJK SC", sans-serif`
- chinese-tw `"Noto Sans TC", "方體", "PingFang TC", "黑体", "Heiti SC", "Microsoft JhengHei UI", "Microsoft JhengHei", Roboto, Noto, "Noto Sans CJK SC", sans-serif`
- chinese `"Noto Sans SC", "方体", "PingFang SC", "黑体", "Heiti SC", "Microsoft JhengHei UI", "Microsoft JhengHei", Roboto, Noto, "Noto Sans CJK SC", sans-serif`
- japanese `"Noto Sans JP", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", Osaka, "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif`
- korean `"Noto Sans KR", "Nanum Gothic", "Apple SD Gothic Neo", "Malgun Gothic", Roboto, Noto, sans-serif`
- thai `"Noto Sans Thai UI", "Noto Sans Thai", "Thonburi", "Leelawadee UI", "Cordia New", Roboto, Noto, sans-serif`
- vietnamese `"Noto Sans", "Helvetica", "Open Sans", "Gill Sans MT", "Gill Sans", Corbel, Arial, sans-serif`

## Font sizes

The font sizes listed here are used to control the size of text in `Text Modules` only.

- xs `.75rem`
- sm `.875rem`
- base `1rem`
- lg `1.125rem`
- xl `1.25rem`

## Font weights

The different type of fonts weights we have, applicable to any text-based module.

- light `300`
- book `400`
- medium `500`
- bold `700`
- black `900`

## Headings

The headings settings used in any H tag, associated with `Heading Module`.
All headings will have the following:

- font weight `bold`

All the headings will have their settings be applied to small screens (first part), then to medium and larger screens.
The settings will be written as: our setting => how it compares to GUD value

### H1

- font size `4rem => ~56px`
- line height `1.15 => ~1.143`

@screen md

- font size `5rem => 80px`
- line height `1.1 => 1.1`

### H2

- font size `2.85rem => ~40px`
- line height `1.2 => 1.2`

@screen md

- font size `'4rem' => 64px`
- line height `1.125 => 1.125`

### H3

- font size `2.25rem => ~32px`
- line height `1.25 => 1.25`

@screen md

- font size `'3rem' => 48px`
- line height `1.165 => ~1.167`

### H4

- font size `1.7125rem => ~24px`
- line height `1.325 => ~1.333`

@screen md

- font size `'2rem' => 32px`
- line height `1.25 => 1.25`

### H5

- font size `1.425rem => ~20px`
- line height `1.35 => ~1.2`

@screen md

- font size `'1.5rem' => 24px`
- line height `1.325 => ~1.333`

### H6

- font size `'1.25rem' => ~17.5px / 20px`
- line height `1.5 => 1.5`
