# Icon Component

The `Icon` component is a reusable React component for displaying SVG icons in the Capis Admin application. It dynamically loads icons from the `src/assets/icons` directory and supports various props for customization.

## Features

- **Dynamic Loading**: Icons are loaded dynamically using Vite's `import.meta.glob` for efficient bundling.
- **Type Safety**: Strongly typed with TypeScript, ensuring only valid icon names are accepted.
- **Customizable**: Supports className and additional SVG props for styling and behavior.
- **Snake Case Files**: Icon files are named in snake_case (e.g., `caret_down.svg`) for consistency.

## Usage

Import the `Icon` component and use it with the desired icon name:

```tsx
import { Icon } from "./Icon";

function MyComponent() {
  return (
    <div>
      <Icon name="caretDown" />
      <Icon name="user" className="text-blue-500" />
    </div>
  );
}
```

## Props

| Prop            | Type                            | Required | Description                                                                                                  |
| --------------- | ------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------ |
| `name`          | `IconNames`                     | Yes      | The name of the icon to display. Must match one of the exported icon names from `src/assets/icons/index.ts`. |
| `className`     | `string`                        | No       | Additional CSS classes to apply to the icon wrapper.                                                         |
| `...otherProps` | `React.SVGProps<SVGSVGElement>` | No       | Any additional props to pass to the underlying SVG element.                                                  |

## Icon Names

Icon names are derived from the SVG file names in `src/assets/icons`. The component converts PascalCase prop names to snake_case for file matching.

Available icons include:

- `caretDown`, `caretLeft`, `caretRight`, `caretUp`
- `checkedBox`, `uncheckedBox`
- `user`, `userPlus`, `userSwitch`
- And many more (see `src/assets/icons/index.ts` for the full list)

## Adding New Icons

1. Add your SVG file to `src/assets/icons` in snake_case (e.g., `new_icon.svg`).
2. Export it in `src/assets/icons/index.ts` with a PascalCase name (e.g., `export { default as newIcon } from "./new_icon.svg";`).
3. Run the update script: `node scripts/update-icon-names.js` to regenerate types.
4. Use the new icon in your components: `<Icon name="newIcon" />`.

## File Structure

```
src/
├── assets/
│   └── icons/
│       ├── index.ts          # Exports all icons
│       ├── caret_down.svg    # Example icon file
│       └── ...
├── components/
│   └── core/
│       └── icons/
│           ├── Icon.tsx      # Main component
│           ├── icon.types.ts # Generated types
│           └── README.md     # This file
└── scripts/
    └── update-icon-names.js  # Script to generate types
```

## Dependencies

- React
- TypeScript
- Vite (for dynamic imports)

## Notes

- Icons are loaded eagerly at build time for performance.
- The component wraps the SVG in a `<span>` element for better styling control.
- If an invalid icon name is provided, nothing will be rendered.
