export const FormatTime = (timestamp: number): string => {
    const date = new Date(timestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // e.g., "3:45 PM"
}