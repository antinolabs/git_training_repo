export function formatCount(count) {
    return count.toString().padStart(2, '0');
}

export function createEntry(count) {
    const time = new Date().toLocaleString();
    return `${count} - ${time}`;
}
