const breakpoints = [
    { name: '4xl', min: 2560 },
    { name: '3xl', min: 2000 },
    { name: '2xl', min: 1536 },
    { name: 'xl', min: 1280 },
    { name: 'lg', min: 1024 },
    { name: 'md', min: 768 },
    { name: 'sm', min: 640 },
    { name: 'xs', min: 0 }
];

const breakpointValues = Object.fromEntries(breakpoints.map((bp) => [bp.name, bp.min]));

const getBreakpoint = (width: number) => {
    return breakpoints.find((bp) => width >= bp.min)?.name || 'xs';
};

export const useBreakpoint = () => {
    const initialWidth = import.meta.client ? window.innerWidth : 0;
    const current = ref(getBreakpoint(initialWidth));
    const width = ref(initialWidth);

    function update() {
        width.value = window.innerWidth;
        current.value = getBreakpoint(window.innerWidth);
    }

    const up = (name: string) => width.value >= (breakpointValues[name] ?? 0);
    const down = (name: string) => {
        return width.value < (breakpointValues[name] ?? 0);
    };

    useEventListener(window, 'resize', update);

    return {
        breakpoint: current,
        width,
        values: breakpointValues,
        up,
        down
    };
};
