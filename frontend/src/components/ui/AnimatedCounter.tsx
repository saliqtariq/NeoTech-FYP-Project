import { useRef, useLayoutEffect } from 'react'
import { animate, KeyframeOptions } from 'framer-motion'

type AnimatedCounterProps = {
    from: number
    to: number
    animationOptions?: KeyframeOptions
    /**
     * Custom formatter function for the displayed value
     * @param value - The current animated number value
     * @returns Formatted string to display
     */
    formatter?: (value: number) => string
    /**
     * Number of decimal places (default: 0)
     */
    decimalPlaces?: number
    /**
     * Prefix to add before the number (e.g., "$")
     */
    prefix?: string
    /**
     * Suffix to add after the number (e.g., "+", "%", "K")
     */
    suffix?: string
    className?: string
    /**
     * Whether to add commas as thousand separators (default: false)
     */
    useCommas?: boolean
}

const AnimatedCounter = ({
    from,
    to,
    animationOptions,
    formatter,
    decimalPlaces = 0,
    prefix = '',
    suffix = '',
    useCommas = false,
    className
}: AnimatedCounterProps) => {
    const ref = useRef<HTMLSpanElement>(null)

    useLayoutEffect(() => {
        const element = ref.current
        if (!element) return

        element.textContent = formatValue(from)
        element.className = className

        const controls = animate(from, to, {
            duration: 3,
            ease: "easeOut",
            ...animationOptions,
            onUpdate(value) {
                element.textContent = formatValue(value)
            }
        })

        return () => controls.stop()
    }, [from, to, animationOptions, formatter, decimalPlaces, prefix, suffix, useCommas])

    const formatValue = (value: number): string => {
        // If custom formatter is provided, use it
        if (formatter) {
            return formatter(value)
        }

        // Format the number
        let formattedNumber = value.toFixed(decimalPlaces)

        // Add commas if requested
        if (useCommas) {
            const parts = formattedNumber.split('.')
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            formattedNumber = parts.join('.')
        }

        // Add prefix and suffix
        return `${prefix}${formattedNumber}${suffix}`
    }

    return <span ref={ref} />
}

export default AnimatedCounter
