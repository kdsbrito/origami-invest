import { VariantProps, tv } from "tailwind-variants";

export const button = tv({
    base: 'px-4 py-2 rounded-md text-white focus:outline-none focus:ring-2 flex items-center justify-center space-x-2 text-sm',
    variants: {
        color: {
            primary: 'bg-primary hover:bg-primary/90',
            neutral: 'bg-zinc-700 hover:bg-zinc-700/90 focus:ring-zinc-700/50'
        }
    },
    defaultVariants: {
        color: 'primary'
    }
});

export type ButtonVariantProps = VariantProps<typeof button>

